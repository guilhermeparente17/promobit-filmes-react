import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import GeneroItem from '../GeneroItem/GeneroItem';

import {
    CategoriasContainer,
    CategoriasTitle,
    CategoriasSubtitle,
    CategoriasMenu
} from './CategoriasElements'

const Categorias = () => {
    const [generos, setGeneros] = useState([])

    let config = {
        headers: {
            'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjRmZDYzNjc0ZWE3NTQwZTk3ZWRlOTJjOWViYmFlNiIsInN1YiI6IjYxZjg1MTY2NWYyZGIxMDBhMmE4ZmVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VkuhKUSp2GflLyrwJ0DsGTcUkZ7kgO5VCBsrJ2FrSK0'
        }
    }

    const getAllDataGenre = async () => {
        try {
            const response = await api.get('/genre/movie/list', config)
            setGeneros(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllDataGenre()
    }, [])

    const genres = generos.genres

    console.log(genres)


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
