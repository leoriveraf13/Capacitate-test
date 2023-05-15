import React, { ReactElement } from "react";

const Footer = () : ReactElement => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-item">
                    <h4>Legales</h4>
                </div>
                <div className="footer-item">
                    <h4>Información</h4>
                </div>
                <div className="footer-item">
                    <h4>Redes Sociales</h4>
                </div>
                <div className="footer-item">
                    <h4>Ayuda</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer