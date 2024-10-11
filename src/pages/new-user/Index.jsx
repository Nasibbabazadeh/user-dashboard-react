import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LeftArrow from '../../assets/images/left-arrow.svg'
import addUser from '../../services/addUser'
import {
    Button,
    Container,
    Form,
    FormGroup,
    FormWrapper,
    HeadText,
    LinkHref,
    ReturnHomeContainer,
    Section,
} from './styled'
const NewUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await addUser(formData)
        if (response) {
            toast.success('User added successfully')
            setFormData({
                name: '',
                phone: '',
                email: '',
            })
        }
    }

    return (
        <Section>
            <ReturnHomeContainer>
                <img src={LeftArrow} alt="leftArrow" width={18} height={18} />
                <LinkHref to="/">Return Home</LinkHref>
            </ReturnHomeContainer>
            <ToastContainer />
            <Container>
                <HeadText>
                    <h2>Add New User</h2>
                    <hr />
                </HeadText>
                <FormWrapper>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <Button
                            type="submit"
                            disabled={Object.values(formData).some(
                                (value) => value === ''
                            )}
                        >
                            Add User
                        </Button>
                    </Form>
                </FormWrapper>
            </Container>
        </Section>
    )
}
export default NewUser
