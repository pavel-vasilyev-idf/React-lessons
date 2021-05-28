import React from 'react';
import { ReactComponent as Test } from '../../static/svg/test.svg';
import Logo from '../Logo/Logo';

const Header = () => (
    <header>
        <div className="wrapper">
            <div className="header">
                <Logo />
                <a href="tel:888" className="header-phone"></a>
                <div className="header-phonelink"><a href="tel:7(962)556-1234">+7(962)556-1234</a></div>
                <Test />
            </div>
        </div>
    </header>
);

export default Header;