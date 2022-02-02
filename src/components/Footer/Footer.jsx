import React from 'react';
import { ChevronRight } from 'react-feather';
import AuthContext from '../../providers/auth';

import {
    FooterContainer,
    FooterPages,
    FooterItem
} from './FooterElements'

const Footer = () => {
    const context = React.useContext(AuthContext)
    const setPagina = context.setPagina
    const pagina = context.pagina
    return (
        <FooterContainer>
            <FooterPages>
                <FooterItem onClick={() => setPagina(1)}>1</FooterItem>
                <FooterItem onClick={() => setPagina(2)}>2</FooterItem>
                <FooterItem onClick={() => setPagina(3)}>3</FooterItem>
                <FooterItem onClick={() => setPagina(4)}>4</FooterItem>
                <FooterItem onClick={() => setPagina(5)}>5</FooterItem>
                <FooterItem onClick={() => setPagina(pagina + 1)}><ChevronRight size="20" /></FooterItem>
                <FooterItem>Página: {pagina}</FooterItem>
                <FooterItem onClick={() => setPagina()}>Ultima</FooterItem>
            </FooterPages>
        </FooterContainer>
    )
};

export default Footer;
