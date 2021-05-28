import React from 'react';
import Logo from '../Logo/Logo';

const Footer = () => (
    <footer>
        <div className="footer">
            <Logo />
            <div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
            <a
                href="tel:888"
                className="footer-phone"
            >
            </a>
            <div className="footer-websurfer"><span className="footer-websurfer_build">Сделано</span> <a href="" target="_blank">Ваше имя</a>
            </div>
            <div className="footer-phonelink"><a href="tel:888">+7(962)556-1234</a></div>
        </div>
    </footer>
);

export default Footer;