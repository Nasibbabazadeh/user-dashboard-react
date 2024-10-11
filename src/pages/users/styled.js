import styled from 'styled-components'

const UsersWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f5f5f5;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 1140px;
    width: 100%;
    padding: 20px;
    position: relative;
`
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 2rem;
        color: #333;
        font-weight: bold;
        line-height: 2rem;
    }

    button {
        padding: 10px 20px;
        border-radius: 4px;
        font-size: 1rem;
        font-weight: 500;
        background-color: #6d9e76;
        color: #fff;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s linear;

        &:hover {
            background-color: #4e7d59;
            color: #fff;
        }
    }
`
const HeadArticle = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h6 {
        font-size: 1rem;
        line-height: 1rem;
        color: #7a7a7a;
    }
`
const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 2px solid #ccc;
    th,
    td {
        border: 1px solid #d0d0d0;
        padding: 12px;
        text-align: left;
    }

    th {
        background-color: #3f4c6b;
        color: #fff;
        font-weight: bold;
        font-size: 1.2rem;
        line-height: 1.5rem;
    }

    td {
        background-color: #f9f9f9;
        color: #333;
    }

    tr:nth-child(even) {
        background-color: #ebebeb;
    }

    tr:hover {
        background-color: #e0e0e0;
    }
`

export { Table, Header, UsersWrapper, HeadArticle, Container }
