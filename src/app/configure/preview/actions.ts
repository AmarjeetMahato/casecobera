"use server"

import { auth } from "@/auth";
import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { Order } from "@prisma/client";

export const createCheckoutSession = async ({ configId }: { configId: string }) => {
  const configuration = await db.configuration.findUnique({
    where: { id: configId },
  });

  if (!configuration) {
    throw new Error("No Such configuration found");
  }

  const session = await auth();
  const user = session?.user

  if (!user || !user?.id) {
    throw new Error("You need to be logged in");
  }

  // Check if the user exists in the database
  const existingUser = await db.user?.findUnique({
    where: { id: user.id },
  });

  if (!existingUser) {
    throw new Error("User does not exist in the database");
  }

  const { material, finish } = configuration;

  let price = BASE_PRICE;

  if (finish === "textured") price += PRODUCT_PRICES.finish.textured;
  if (material === "polycarbonate") price += PRODUCT_PRICES.material.polycarbonate;

  let order: Order | undefined = undefined;

  const existingOrder = await db.order.findFirst({
    where: {
      userId: user.id,
      configurationId: configuration.id,
    },
  });

  if (existingOrder) {
    order = existingOrder;
  } else {
    order = await db.order?.create({
      data: {
        amount: price / 100,
        userId: user?.id,
        configurationId: configuration.id,
        status: "awaiting_shipment",
      },
    });
  }

  const product = await stripe.products.create({
    name: "Custom IPhone Case",
    images: [configuration.imageUrl],
    default_price_data: {
      currency: "USD",
      unit_amount: price,
    },
  });

  const stripeSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/configure/preview?id=${configuration.id}`,
    payment_method_types: ["card"],
    mode: 'payment',
    shipping_address_collection: {
      allowed_countries: ["DE", "US", "IN", "AU", "GB"],
    },
    metadata: {
      userId: user.id,
      orderId: order.id,
    },
    line_items: [{ price: product.default_price as string, quantity: 1 }],
  });

  return { url: stripeSession.url };
};
