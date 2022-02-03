import React from 'react';
import AuthContext from '../../providers/auth';
import FilmesItem from '../FilmesItem/FilmesItem';

import {
    FilmesContainer
} from './FilmesElements'

const Filmes = () => {
    const context = React.useContext(AuthContext)
    const { filmes, filteredData, categories } = context

    return (
        <FilmesContainer>
            {
                categories.length > 0
                    ? filteredData.map((movie, idx) => {
                        return <FilmesItem movie={movie} key={movie.id} />
                    })
                    : filmes.map((movie, idx) => {
                        return <FilmesItem movie={movie} key={movie.id} />
                    })
            }
        </FilmesContainer>
    )
};

export default Filmes;
