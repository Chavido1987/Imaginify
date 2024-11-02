"use client"

import React from 'react'
import {Sheet,SheetContent,SheetTrigger,} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
// import { SignedIn, UserButton } from '@clerk/nextjs'

const MobileNav = () => {

  /*
  
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://msafiriemmanuel6:<db_password>@cluster0.xn9hm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

  */
  const pathname = usePathname();  
  return (
    <header className='header'>
        <Link href='/' className='flex items-center gap-2 md:py-2'>
           <Image 
             src='/assets/images/logo-text.svg'
             alt='logo'
             width={180}
             height={28}
             />
        </Link>

        <nav className='flex gap-2'>
          {/* <SignedIn> */}
            <UserButton afterSignOutUrl='/' />
        <Sheet>
          <SheetTrigger>
            <Image
              src='/assets/icons/menu.svg'
              alt='logo'
              width={32}
              height={32}
              className='cursor-pointer'
            />
          </SheetTrigger>
            <SheetContent className='sheet-content sm:w-64'>
              <>
                <Image
                  src='/assets/images/logo-text.svg'
                  alt='logo'
                  width={152}
                  height={23}
                />

            <ul className="header-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                  <li
                   className={`${isActive &&
                    'gradient-text'} p-18 flex
                     whitespace-nowrap text-dark-700`}
                     key={link.route}>
                    <Link className='sidebar-link cursor-pointer' href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        // className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
               })}
             </ul>

              </>
           </SheetContent>
        </Sheet>

            {/* </SignedIn> */}
            <SignedOut>
                <Button asChild className='button bg-purple-gradient bg-cover'>
                    <Link href='/sign-in'>Login</Link>
                </Button>
            </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav