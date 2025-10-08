"use client"
import { Nav_Items } from "@/lib/Nav_Items"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItems=()=>{
    const pathname = usePathname();
    const isActive = (path:string)=>{
        if(path === "/") return pathname === "/";
        return pathname.startsWith(path);
    }
    return(
        <ul className="flex flex-col sm:flex-row p-2 gap-3 sm: gap-10 font-medium text-lg">
            {Nav_Items.map(({ href, path })=>(
                <li key={href} >
                    <Link href={href} className={`hover:text-yellow-500 color-transition ${
                        isActive(href) ? "text-gray-100" :""
                    }`}>
                        {path}
                    </Link>
                </li>
            ))}
        </ul>
    )
}   

export default NavItems