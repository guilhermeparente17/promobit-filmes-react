import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: #5C16C5;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 780px){
        justify-content: center;
    }
`

export const HeaderLogo = styled.h1`
    color: #fff;
    margin-left: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 780px){
        margin-left: 0px;
    }

`

export const HeaderIcon = styled.div`
    width: 70px;
    height: 25px;
    background: #FFF;
    margin: 0px 10px;
    border-radius: 10px 10px 10px 10px;
`