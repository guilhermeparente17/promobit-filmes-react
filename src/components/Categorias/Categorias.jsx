import React from 'react';
import AuthContext from '../../providers/auth';
import GeneroItem from '../GeneroItem/GeneroItem';

import {
    CategoriasContainer,
    CategoriasTitle,
    CategoriasSubtitle,
    CategoriasMenu
} from './CategoriasElements'

const Categorias = () => {
    const context = React.useContext(AuthContext)
    const genres = context.generos.genres

    return (
        <div>
            <CategoriasContainer>
                <CategoriasTitle>Milhões de filmes, séries e pessoas <br /> para descobrir. Explore já.</CategoriasTitle>
                <CategoriasSubtitle>FILTRE POR:</CategoriasSubtitle>

                <CategoriasMenu>
                    {
                        genres && genres.map((genre, idx) => {
                            return <GeneroItem key={genre.id} genre={genre} />
                        })
                    }
                </CategoriasMenu>
            </CategoriasContainer>
        </div>
    )
};

export default Categorias;
