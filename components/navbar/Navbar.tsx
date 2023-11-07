'use client'

import getCurrentUser from '@/app/actions/getCurrentUser'
import { SafeUser } from '@/types/type'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

interface UserMenuProps {
 currentUser: SafeUser | null
}


export default function Navbar({ currentUser }: UserMenuProps) {


 return (
  <header>
   <nav className='bg-gray-200 flex justify-between px-4 py-6 shadow-xl'>
    {/* <div>  {currentUser?.name }</div> */}
    <div>  {currentUser ? <h1> <span>Hi </span>{currentUser?.name}</h1> : null}</div>

    <div className='flex gap-4'>
     <Link href='/'>Home</Link>
     {currentUser ? <Link href='/create' >Create</Link> : null}
     {currentUser ? <Link href='/profile' >Profile</Link> : null}
     {/* <Link href='/create'>Create</Link> */}
     {currentUser ? <button onClick={() => signOut()}>Sign out</button> : <Link href='/login'>Login</Link>}
    </div>
   </nav>
  </header>
 )
}
