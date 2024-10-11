import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getAllUsers from '../../services/getAllUsers'
import { UsersWrapper, Header, Table, HeadArticle, Container } from './styled'
const Tasks = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsersData() {
            const usersData = await getAllUsers()
            setUsers(usersData)
        }
        getUsersData()
    }, [])

    return (
        <UsersWrapper>
            <Container>
                <Header>
                    <HeadArticle>
                        <h1>All users</h1>
                        <h6>Monitor user name, phone, email.</h6>
                    </HeadArticle>
                    <Link to="/newuser">
                        <button>Add new user</button>
                    </Link>
                </Header>
                <main>
                    <Table>
                        <thead>
                            <tr>
                                <th>No:</th>
                                <th>Name:</th>
                                <th>Phone:</th>
                                <th>Email:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users &&
                                users.map((user, index) => (
                                    <tr key={user.id}>
                                        <td>{index + 1}.</td>
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </main>
            </Container>
        </UsersWrapper>
    )
}

export default Tasks
