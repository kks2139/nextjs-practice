import Header from "./Header";

interface Props {
    children: JSX.Element | JSX.Element[]
}

function Layout({children}: Props){
    return (
        <div className="layout">
            <Header/>
            <main>
                {children}
            </main>
            <style jsx>{`
                .layout {
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                } 
                main {
                    margin-top: 80px;
                }   
            `}</style>
        </div>
    )
}

export default Layout;