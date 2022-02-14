import Link from "next/link";

function Header(){
    return (
        <nav className="header">
            <Link href='/'>
                <a>Home</a>
            </Link>            
            <Link href='/about'>
                <a>About</a>
            </Link>            

            <style jsx>{`
                .header {
                    position: fixed;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    box-shadow: 0 5px 50px -20px black;
                    padding: 0 20px;
                    border-radius: 10px;
                }
                a {
                    font-weight: bold;
                    font-size: 16px;
                    margin: 0 20px;
                    transition: .2s;
                    &:hover {
                        color: red;
                    }
                }
            `}</style>
        </nav>
    );
}

export default Header;