"use server"

import { auth } from "@/auth"
import { db } from "@/lib/db"

export async  function getAuthStatus() {
 
     const session = await auth()
     const user = session?.user

     if(!user || !user?.id){
         throw new Error('Invalid user data')
     }


     const existingUser = await  db.user.findFirst({
          where:{id:user?.id}
     })

     if(existingUser){
          await db.user.create({
            data:{
                id: user?.id,
                email:user?.email as string
            }
          })
     }

     return { success: true }



}