import styled from 'styled-components'

export const FooterContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 100px;
`

export const FooterPages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterItem = styled.span`
    cursor: pointer;
    font-size: 18px;
    color: #5C16C5;
    font-weight: 700;
    margin-right: 20px;

    &:hover{
        text-decoration: underline;
    }
`