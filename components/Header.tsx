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
                    z-index: 100;
                    width: 100%;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 5px 50px -20px black;
                    padding: 0 20px;
                    border-radius: 10px;
                    background-color: white;
                }
                a {
                    font-weight: bold;
                    font-size: 16px;
                    margin: 0 10px;
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