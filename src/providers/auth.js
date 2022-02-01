import React, { useState, useEffect } from 'react'
import api from '../api/api'

export const AuthContext = React.createContext({})

export const AuthProvider = props => {
    const [generos, setGeneros] = useState([])
    const [filmes, setFilmes] = useState([])
    const [pagina, setPagina] = useState(1)
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjRmZDYzNjc0ZWE3NTQwZTk3ZWRlOTJjOWViYmFlNiIsInN1YiI6IjYxZjg1MTY2NWYyZGIxMDBhMmE4ZmVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VkuhKUSp2GflLyrwJ0DsGTcUkZ7kgO5VCBsrJ2FrSK0'
    
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }

    useEffect(() => {
        const getAllDataMovies = async () => {
            try {
                const response = await api.get(`/movie/popular?page=${pagina}`, config)
                setFilmes(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        getAllDataMovies()
    }, [pagina])

    

    useEffect(() => {
        const getAllDataGenre = async () => {
            try {
                const response = await api.get('/genre/movie/list', config)
                setGeneros(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        getAllDataGenre()
    }, [])

    console.log(generos)
    console.log(filmes)
    console.log(pagina)

    return (
        <AuthContext.Provider value={{ generos, setGeneros, filmes, setPagina, pagina }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext