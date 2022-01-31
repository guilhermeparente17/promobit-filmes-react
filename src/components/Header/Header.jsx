import React from 'react';

import {
    HeaderContainer,
    HeaderLogo,
    HeaderIcon
} from './Headerelements'

const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <HeaderLogo>TMDB <HeaderIcon /></HeaderLogo>
            </HeaderContainer>
        </div>
    )
};

export default Header;
