import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Section = styled.section`
    min-height: 100vh;
    background-color: #f8f9fa;
    padding: 2rem 0;
`

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`

const HeadText = styled.div`
    text-align: center;
    margin-bottom: 1.5rem;

    h2 {
        font-size: 2rem;
        color: #343a40;
    }
    hr {
        width: 50%;
        margin: 1rem auto;
        border: 1px solid #6c757d;
    }
`

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Form = styled.form`
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

const FormGroup = styled.div`
    margin-bottom: 1.5rem;

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
        color: #495057;
    }

    input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ced4da;
        border-radius: 4px;
        font-size: 1rem;
        color: #495057;
        &:focus {
            outline: none;
        }
    }
`

const Button = styled.button`
    width: 100%;
    padding: 0.75rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`
const ReturnHomeContainer = styled.div`
    width: 150px;
    position: absolute;
    left: 200px;
    top: 30px;
    display: flex;
    align-items: center;
    gap: 8px;
`
const LinkHref = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    color: #007bff;
    font-weight: bold;
    transition: color 0.3s ease;
    text-wrap: nowrap;
    margin-bottom: 2px;

    &:hover {
        color: #0056b3;
    }
`
export {
    Button,
    Container,
    Form,
    FormGroup,
    FormWrapper,
    HeadText,
    Section,
    LinkHref,
    ReturnHomeContainer,
}
