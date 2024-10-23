import Link from "next/link";
import logoImage from '@/app/icon.png'
export default function Header(){
    return(
        <header>
            <Link href='/'>
            <img src={logoImage.src} alt="a lot of foods on a plate"/>
            <p>Meals Community</p>
            </Link>
            <nav>
                <ul>
                    <li><p><Link href='/meals'>Meals</Link></p></li>
                    <li><p><Link href='/community'>Community</Link></p></li>
                </ul>
            </nav>
        </header>
    )
}