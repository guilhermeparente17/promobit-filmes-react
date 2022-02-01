import React from 'react';
import {
    FilmesItemContainer,
    FilmesItemImg,
    FilmeItemInfom,
    FilmesItemTitle,
    FilmesItemData
} from './FilmesItemElements'

const FilmesItem = ({ movie }) => {
    let imagem = movie.poster_path.replace('/', '')
    const baseUrlImg = 'http://image.tmdb.org/t/p/w185/'
    return (
        <FilmesItemContainer>
            <FilmesItemImg src={`${baseUrlImg}${imagem}`} />
            <FilmeItemInfom>
                <FilmesItemTitle>{movie.original_title}</FilmesItemTitle>
                <FilmesItemData>{movie.release_date}</FilmesItemData>
            </FilmeItemInfom>
        </FilmesItemContainer>
    )
};

export default FilmesItem;
