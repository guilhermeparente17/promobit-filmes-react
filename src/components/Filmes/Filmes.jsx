import React from 'react';
import AuthContext from '../../providers/auth';
import FilmesItem from '../FilmesItem/FilmesItem';

import {
    FilmesContainer
} from './FilmesElements'

const Filmes = () => {
    const filmes = React.useContext(AuthContext)
    console.log(filmes.filmes.results)
    const allMovies = filmes.filmes.results


    return (
        <FilmesContainer>
            {
                allMovies && allMovies.map((movie, idx) => {
                    return <FilmesItem movie={movie} key={movie.id} />
                })
            }
        </FilmesContainer>
    )
};

export default Filmes;
