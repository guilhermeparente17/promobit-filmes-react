import styled from 'styled-components'

export const CategoriasContainer = styled.section`
    width: 100%;
    height: 450px;
    background-color: #2D0C5E;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;

    @media screen and (max-width: 700px){
        height: 500px;
    }

    @media screen and (max-width: 500px){
        height: 700px;
    }
    
`

export const CategoriasTitle = styled.h1`
    color: #FFF;
    font-size: 48px;
    text-align: center;
    

    @media screen and (max-width: 700px){
        font-size: 24px;
        margin-top: 100px;
    }
`

export const CategoriasSubtitle = styled.span`
    color: #FFF;
    font-size: 14px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
`

export const CategoriasMenu = styled.aside`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`