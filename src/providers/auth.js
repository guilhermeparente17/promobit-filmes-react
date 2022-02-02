import React, { useState, useEffect } from 'react'
import api from '../api/api'

export const AuthContext = React.createContext({})

export const AuthProvider = props => {
    const [categories, setCategories] = useState([])
    const [generos, setGeneros] = useState([])
    const [filmes, setFilmes] = useState([])
    const [pagina, setPagina] = useState(1)
    const [tipoGenero, setTipoGenero] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [genreType, setGenreType] = useState([])

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
                setFilmes(response.data.results)
                setGenreType(response.data.results.map(genero => genero.genre_ids))
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

    const handleTipoGenero = (id, isOpen, setIsOpen) => {
        if (!isOpen) {
            const teste = setCategories(prevState => [...prevState, id])
            console.log(teste)
        } else {
            let newCategoriesArr = categories.filter(category => category !== id)
            console.log(newCategoriesArr)
            setCategories(newCategoriesArr)
        }

        console.log(categories)
        setIsOpen(!isOpen)
    }

    // console.log(generos)
    console.log(filmes)
    console.log(genreType)

    useEffect(() => {
        let filteredMovies = [];

        filmes && filmes.forEach((filme) => {
            let result = filme.genre_ids.map((category) => {
              if (categories.includes(category)) return filme;
            });

            result.map((filterResult) => {
                if (
                  filterResult !== undefined &&
                  !filteredMovies.includes(filterResult)
                ) {
                  filteredMovies.push(filterResult);
                }
              });
            });

            console.log({ filteredMovies });
        
    }, [categories])

    // useEffect(() => {
    //     const filteredNovies = () => {
    //         for(let i=0; i <= genreType.length; i++){
    //             for(let j = 0; j <= genreType[i]?.length; j++){
    //                 if(genreType[i] === categories[j])
    //             }
    //         }
            
    //     }
        

    //     filteredNovies()
    // }, [categories])
    
    // console.log(tipoGenero)
    
    // console.log(tipoGenero)

    // useEffect(() => {
    //     // let filteredMovies = filmes?.results?.genre_ids && filmes.results.genre_ids.filter(movie => Task.includes(movie))
    //     let filteredMovies = filmes?.results && filmes.results.map(item => item.genre_ids.filter(element => categories.includes(element)))
    //     setFilteredData(filteredMovies)
    //     console.log(filteredData)
        
    // }, [categories])

    return (
        <AuthContext.Provider value={{ 
            generos, 
            setGeneros, 
            filmes, 
            setPagina, 
            pagina,
            tipoGenero, 
            setTipoGenero,
            handleTipoGenero,
            filteredData
        }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext