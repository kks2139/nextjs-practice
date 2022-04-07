import React from "react";

interface Props {
    children: JSX.Element | JSX.Element[]
}

const WHITE_SPACE = 80;

function Slider({children}: Props){
    const onClickMove = (e: React.MouseEvent<HTMLElement>)=>{
        if(e.target instanceof HTMLButtonElement){
            const move = e.target.dataset.move;
            if(move === "left"){
                
            }else{

            }
        }
    }

    return (
        <ul className="slider-box">
            <div className="wrapper">
                {children}
            </div>
            <div className="shadow left"></div>
            <div className="shadow right"></div>
            <div className="btn-box" onClick={onClickMove}>
                <button className="btn-move left" data-move="left">◀</button>
                <button className="btn-move right" data-move="right">▶</button>
            </div>
            <style jsx>{`
                .slider-box {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    overflow: hidden;
                    border: 1px solid blue;
                    > .wrapper {
                        border: 1px solid red;
                        padding: 20px 0;
                        position: relative;
                        display: flex;
                        width: calc(100% - ${WHITE_SPACE}px);
                        overflow: hidden;
                    }
                }
                .shadow {
                    z-index: 2;
                    position: absolute;
                    height: 100%;
                    width: 40px;
                    &.left {
                        left: ${WHITE_SPACE / 2}px;
                        background-image: linear-gradient(to right, white, transparent);
                    }
                    &.right {
                        right: ${WHITE_SPACE / 2}px;
                        background-image: linear-gradient(to left, white, transparent);
                    }
                }
                .btn-box {
                    z-index: 3;
                    position: absolute;
                    height: 0;
                    top: 50%;
                    width: calc(100% - 100px);
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
                    color: gray;
                    transform: translateY(-50%);
                    transition: .2s;
                    opacity: .6;
                    &:hover {
                        opacity: 1;
                    }
                    &.left {
                        transform: translateX(-20px);
                    }
                    &.right {
                        transform: translateX(20px);
                    }
                }
            `}</style>
        </ul>
    );
}

export default Slider;