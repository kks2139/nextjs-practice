interface Props {
    title: string
    children: JSX.Element | JSX.Element[]
}

function Panel({title, children}: Props){
    return (
        <div>
            <h3 className="title">{title}</h3>
            {children}
            <style jsx>{`
                .title {
                    margin: 0 0 0 60px;
                    font-size: 30px;
                }
            `}</style>
        </div>
    );
}

export default Panel;