import React from 'react';
import Categorias from '../../components/Categorias/Categorias';
import Filmes from '../../components/Filmes/Filmes';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Categorias />
            <Filmes />
            <Footer />
        </div>
    )
};

export default Home;
