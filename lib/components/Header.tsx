import React, { ReactDOM, ReactElement, useEffect, useState } from "react";

const Header = () : ReactElement => {
    var windowPos: number = 0
    if(typeof window === undefined){
        windowPos = window.pageYOffset
    }
    const [position, setPosition] = useState(windowPos)
    const [visible, setVisible] = useState(true)

    const cls = visible ? "visible" : "hidden"

    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

    return (
        <div>
            <header className={cls}>
                <div className="content">
                    <div className="logo">
                        <button className="button-logo">
                            <img className="img-logo" title="logo" src="https://capacitateparaelempleo.org/assets/images/Logo_Capacitate_White.png" />
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header