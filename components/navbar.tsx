'use client'
import { NavigationProps } from "@/interfaces/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ menuOptions }: NavigationProps) {
    const pathname = usePathname();
    return (
        <header className="bg-sky-950">
            <nav className="mx-20 py-6">
                {
                    menuOptions.map(e => {
                        const isActive = pathname.startsWith(e.href)
                        return <Link href={e.href} key={e.href} className={`px-8 font-semibold ${isActive ? 'text-sky-400' : 'text-white'}`}>{e.name}</Link>
                    })
                }
            </nav>
        </header>
    )
}