import React, { useEffect, useRef } from "react";

interface Props {
    children: JSX.Element | JSX.Element[]
    text: string
}

const TOOLTIP_WIDTH = 200;

function Tooltip({children ,text}: Props){
    const divRef = useRef<HTMLDivElement>(null);

    const onMouseMove = (e: React.MouseEvent)=>{
        const {pageX, pageY} = e;
        const {top, left} = e.currentTarget.getBoundingClientRect();
        const x = pageX - left - (TOOLTIP_WIDTH / 2);
        const y = pageY - (top + document.documentElement.scrollTop - 20);
    
        divRef.current!.style.left = x + 'px';
        divRef.current!.style.top = y + 'px';
    }

    return (
        <div className="tooltip-box" onMouseMove={onMouseMove}>
            {children}
            <div className="tooltip" ref={divRef}>
                {text}
            </div>
            <style jsx>{`
                .tooltip-box {
                    position: relative;
                    &:hover {
                        .tooltip {
                            display: block;
                        }        
                    }
                }
                .tooltip {
                    display: none;
                    position: absolute;
                    z-index: 10;
                    border-radius: 6px;
                    padding: 5px 8px;
                    color: gray;
                    width: ${TOOLTIP_WIDTH}px;
                    box-shadow: 0 0 35px -15px black;
                    background-color: white;
                    white-space: pre-line;
                }
            `}</style>
        </div>
    );
}

export default Tooltip;