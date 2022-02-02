import React, { useState } from 'react';
import { XCircle } from 'react-feather';
import {
    GeneroContainer,
    GeneroName
} from './GeneroItemElements'

const GeneroItem = ({ genre, tipoGenero, setTipoGenero, Task, handleTipoGenero }) => {
    const [isSelect, setIsSelect] = useState(false)
    let genero
    if (genre.name === 'Action') {
        genero = 'Ação'
    }

    if (genre.name === 'Adventure') {
        genero = "Aventura"
    }

    if (genre.name === 'Animation') {
        genero = "Animação"
    }

    if (genre.name === 'Comedy') {
        genero = "Comédia"
    }

    if (genre.name === 'Crime') {
        genero = "Crime"
    }

    if (genre.name === 'Documentary') {
        genero = "Documentario"
    }

    if (genre.name === 'Drama') {
        genero = "Drama"
    }

    if (genre.name === 'Family') {
        genero = "Familia"
    }

    if (genre.name === 'History') {
        genero = "Historia"
    }

    if (genre.name === 'Horror') {
        genero = "Horror"
    }

    if (genre.name === 'Music') {
        genero = "Musica"
    }

    if (genre.name === 'Mystery') {
        genero = "Mistério"
    }

    if (genre.name === 'Romance') {
        genero = "Romance"
    }

    if (genre.name === 'Science Fiction') {
        genero = "Ficção Cientifica"
    }

    if (genre.name === 'TV Movie') {
        genero = "Filme de TV"
    }

    if (genre.name === 'Fantasy') {
        genero = "fantasia"
    }

    if (genre.name === 'War') {
        genero = "Guerra"
    }

    if (genre.name === 'Thriller') {
        genero = "Thriller"
    }

    if (genre.name === 'Western') {
        genero = "Ocidental"
    }



    return (
        <GeneroContainer
            onClick={() => handleTipoGenero(genre.id, isSelect, setIsSelect)}
            style={{
                backgroundColor: isSelect ? '#D18000' : '#FFF',
            }}
        >
            <GeneroName style={{ color: isSelect ? '#FFF' : '#000' }}>
                {genero} {isSelect && <XCircle size="18" style={{ color: '#FFF', margin: '0px 5px' }} />}
            </GeneroName>
        </GeneroContainer>
    )
};

export default GeneroItem;
