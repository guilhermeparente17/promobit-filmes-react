import React from 'react';
import Categorias from '../../components/Categorias/Categorias';
import Filmes from '../../components/Filmes/Filmes';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Categorias />
            <Filmes />
            <Footer />
        </div>
    )
};

export default Home;
