interface Props {
    children: JSX.Element | JSX.Element[]
}

function Slider({children}: Props){
    return (
        <ul className="slider-box">
            {children}
            <div className="shadow left"></div>
            <div className="shadow right"></div>
            <div className="btn-box">
                <button className="btn-move left">◀</button>
                <button className="btn-move right">▶</button>
            </div>
            <style jsx>{`
                .slider-box {
                    position: relative;
                    display: flex;
                    width: calc(100% - 300px);
                    padding: 30px 0;
                    /* border: 1px solid red; */
                    overflow: hidden;
                }
                .shadow {
                    z-index: 2;
                    position: absolute;
                    /* border: 1px solid blue; */
                    height: 100%;
                    width: 40px;
                    &.left {
                        left: 0;
                        background-image: linear-gradient(to right, white, transparent);
                    }
                    &.right {
                        right: 0;
                        background-image: linear-gradient(to left, white, transparent);
                    }
                }
                .btn-box {
                    z-index: 3;
                    position: absolute;
                    top: 50%;
                    width: 100%;
                    transform: translateY(-50%);
                    display: flex;
                    justify-content: space-between;
                }
                .btn-move {
                    width: 50px;
                    height: 50px;
                    display: flex;
                    border-radius: 50%;
                    box-shadow: 0 0 20px -5px black;
                    justify-content: center;
                    align-items: center;
                    background-color: white;
                    &.left {
                        /* transform: translateX(-30px); */
                    }
                    &.right {
                        /* transform: translateX(30px); */
                    }
                }
            `}</style>
        </ul>
    );
}

export default Slider;