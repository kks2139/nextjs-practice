import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const URLS = [
    {url: '/', name: 'Home'},
    {url: '/about', name: 'About'},
    {url: '/profile', name: 'Profile'},
];

function Header(){
    const {pathname} = useRouter();
    const [] = useState();

    useEffect(()=>{
        console.log(pathname)
    }, [pathname]);

    return (
        <nav className="header">
            <ul className="menu-box">
                {URLS.map(o => (
                    <li key={o.url}>
                        <Link href={o.url}>
                            <a className={pathname === o.url ? 'now' : ''}>{o.name}</a>
                        </Link>   
                        {pathname === o.url && <div className="bar"></div>}
                    </li>
                ))}
            </ul>
            <style jsx>{`
                .header {
                    position: fixed;
                    z-index: 100;
                    width: 100%;
                    /* height: 40px; */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: white;
                    box-shadow: 0 0 30px -15px black;
                    /* border: 1px solid red; */
                }
                .menu-box {
                    display: flex;
                }
                li {
                    position: relative;
                    padding: 10px 15px;
                }
                a {
                    font-weight: bold;
                    font-size: 16px;
                    transition: .2s;
                    &:hover {
                        color: var(--blue-1);
                    }
                    &.now {
                        color: var(--blue-1);
                    }
                }
                .bar {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    background-color: var(--blue-1);
                    width: 100%;
                    height: 3px;
                }
            `}</style>
        </nav>
    );
}

export default Header;