import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button, buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Image from 'next/image'
import { auth, signIn, signOut } from '@/auth'

const Navbar = async() => {
    const session = await auth()
    const user = session?.user
    const isAdmin = user?.email === process.env.ADMIN_EMAIL
    console.log(user);
    
  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
        <Link href='/' className='flex z-40 font-semibold'>
            case<span className='text-green-600'>cobra</span>
          </Link>

           <div className=' flex items-center gap-x-2'>
           {  user ? (
                 <>
                  <Image src={ user?.image || ''} alt={user?.name || ''} width={30} height={30} className=' object-cover rounded-full' />
                  <form   action={async () => {
                "use server";
                await signOut();
              }}
                >
                    <Button className={buttonVariants({
                    size:"sm", variant:"ghost"
                  })}>

                       Sign out
                    </Button>
                  </form>
                  {isAdmin ? (
                  <Link
                    href='/'
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'ghost',
                    })}>
                    Dashboard ✨
                  </Link>
                ) : null}
                  <Link
                  href='/configure/upload'
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden sm:flex items-center gap-1',
                  })}>
                  Create case
                  <ArrowRight className='ml-1.5 h-5 w-5' />
                </Link>
                 </>
          ) : (
            <>
                 <form 
                     action={async () => {
                      "use server";
                      await signIn();
                    }}
                 
                 >
                    <Button  className={buttonVariants({
                    size: 'sm',
                    variant:"secondary",
                  })}>
                    Sign up
                    </Button>
                </form>

                <form
                     action={async () => {
                      "use server";
                      await signIn();
                    }}
                >
                    <Button 
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                   
                  }) }>
                    Login
                    </Button>
                
                </form>
 
                <div className=' bg-zinc-200 h-8 w-px hidden sm:block' />

                
                <Link
                  href='/configure/upload'
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden sm:flex items-center gap-1',
                  })}>
                  Create case
                  <ArrowRight className='ml-1.5 h-5 w-5' />
                </Link>
            </>
          )

          }
           </div>
        </div>
        </MaxWidthWrapper>
    </nav>

  )
}

export default Navbar