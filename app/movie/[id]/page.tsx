"use client"
import Navbar from "@/components/navbar";
import { optionsForMenu } from '@/app/menu-options';
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Movie() {
    const pathname = usePathname()
    useEffect(() => {
        console.log(pathname.split('/')[2], 'ID')
      }, [pathname])
    return (
        <>
            <Navbar menuOptions={optionsForMenu} />
            <p></p>
        </>
    );
}