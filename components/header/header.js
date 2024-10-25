import Link from "next/link";
import Image from "next/image";
import logoImage from '@/app/icon.png'
import HeaderBackground from "./header-background";
import NavLink from "./nav-link";


export default function Header(){
    return(
        <>
        <HeaderBackground/>
        <header className="flex justify-between container mx-auto my-6 items-center">
            <Link href='/' className="flex gap-2 items-center">
            <Image src={logoImage} alt="a lot of foods on a plate" className="w-14" priority/>
            <p className="text-slate-100 hover:bg-red-400">Meals Community</p>
            </Link>
            <nav>
                <ul className="flex gap-7">
                <li><NavLink href='/meals'>Meals</NavLink></li>
                <li><NavLink href='/community'>community</NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}