import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './TableData.css';

function TableData() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        (
            async () => {
                await fetch('https://moji-react-table-form-default-rtdb.firebaseio.com/users.json')
                    .then(res => res.json())
                    .then(x => {
                        console.log(Object.entries(x))
                        setUsers(Object.entries(x))
                    })
            }
        )();
    }, [])


    return (
        <Table striped bordered hover responsive variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={user[0]}>
                        <td>{index + 1}</td>
                        <td>{user[1].userName}</td>
                        <td>{user[1].password}</td>
                        <td>{user[1].email}</td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}

export default TableData