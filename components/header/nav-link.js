'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({href,children}){
    const path=usePathname();
    let style="text-slate-200 transition hover:text-yellow-300 text-4xl";
    if(path.startsWith(href)){
        style+=' text-yellow-300';
    }
    return <Link className={style} href={href}>{children}</Link>
}