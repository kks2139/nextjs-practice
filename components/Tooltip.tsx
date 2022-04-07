import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';

interface Props {
    children: JSX.Element | JSX.Element[]
    text: string
}

const TOOLTIP_WIDTH = 280;

function Tooltip({children ,text}: Props){
    const divRef = useRef<HTMLDivElement>(null);
    const [isBrowser, setIsBrowser] = useState(false);
    const [isHover, setIsHover] = useState(false);

    useEffect(()=>{
        setIsBrowser(true);
    }, []);

    const onMouseMove = (e: React.MouseEvent)=>{
        const {pageX, pageY} = e;
        const x = pageX - (TOOLTIP_WIDTH / 2);
        const y = pageY + document.documentElement.scrollTop + 25;
    
        divRef.current!.style.left = x + 'px';
        divRef.current!.style.top = y + 'px';
    }

    const onMouseEnter = ()=>{
        setIsHover(true);
    }
    
    const onMouseLeave = ()=>{
        setIsHover(false);

    }

    return (
        isBrowser ? <div className="tooltip-box" onMouseMove={onMouseMove} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
            {isHover && ReactDOM.createPortal(
                <div className="tooltip" ref={divRef}>
                    {text}
                </div>,
                document.querySelector('#modal-root')!
            )}
            <style jsx global>{`
                #modal-root {
                    > .tooltip {
                        position: absolute;
                        z-index: 999;
                        border-radius: 6px;
                        padding: 5px 9px;
                        color: gray;
                        max-width: ${TOOLTIP_WIDTH}px;
                        box-shadow: 0 0 35px -15px black;
                        background-color: white;
                        white-space: pre-line;
                    }
                }
            `}</style>
        </div> : <></>
    );
}

export default Tooltip;