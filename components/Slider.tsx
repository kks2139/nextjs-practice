import React, { useEffect, useRef, useState } from "react";

interface Props {
    children: JSX.Element | JSX.Element[]
    distance?: number
}

const WHITE_SPACE = 80;
let prevScrollLeft = 0;

function Slider({children, distance = 210}: Props){
    const [shadow, setShadow] = useState({left: false, right: true});
    const timerRef = useRef(0);

    const onScroll = (e: React.UIEvent<HTMLDivElement>)=>{
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
        const targ = e.currentTarget;
        timerRef.current = window.setTimeout(()=>{
            console.log(123);
            const {scrollWidth, scrollLeft} = targ;
            const {width} = targ.getBoundingClientRect();
            if(scrollLeft === 0){
                setShadow(pre => ({...pre, left: false}));
            }else{
                setShadow(pre => ({...pre, left: true}));
            }
            if(scrollWidth <= width + scrollLeft){
                setShadow(pre => ({...pre, right: false}));
            }else{
                setShadow(pre => ({...pre, right: true}));
            }
        }, 50);
    }

    return (
        <div className="slider-box">
            <div className="wrapper" onScroll={onScroll}>
                <ul className="contents">
                    {children}
                </ul>
            </div>
            <div className="shadow left"></div>
            <div className="shadow right"></div>
            <style jsx>{`
                .slider-box {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    /* border: 1px solid blue; */
                    > .wrapper {
                        /* border: 1px solid green; */
                        width: calc(100% - ${WHITE_SPACE}px);
                        overflow-x: auto;
                        &::-webkit-scrollbar { 
                            height: 15px;
                        }
                        &::-webkit-scrollbar-thumb {
                            background-color: #c4c4c4;
                            border-radius: 20px;
                        }
                        &::-webkit-scrollbar-track {
                            /* background-color: #f3f3f3; */
                        }
                        > .contents {
                            /* border: 1px solid red; */
                            padding: 20px 0;
                            position: relative;
                            display: flex;
                            transition: .2s;
                        }
                    }
                }
                .shadow {
                    z-index: 2;
                    position: absolute;
                    height: calc(100% - 10px);
                    width: 50px;
                    transition: .3s;
                    &.left {
                        opacity: ${shadow.left ? 1 : 0};
                        left: ${WHITE_SPACE / 2}px;
                        background-image: linear-gradient(to right, white, transparent);
                    }
                    &.right {
                        opacity: ${shadow.right ? 1 : 0};
                        right: ${WHITE_SPACE / 2}px;
                        background-image: linear-gradient(to left, white, transparent);
                    }
                }
            `}</style>
        </div>
    );
}

export default Slider;