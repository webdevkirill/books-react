import React from 'react';
import { Table } from 'react-bootstrap';
import { Container, TableWrapper } from './StyledAppTable';

export const AppTable = ({data}) => {
    
    return (
        <Container>
            <TableWrapper>
                <Table striped bordered hover variant="dark">
                    <thead>
                            <tr>
                            <th>Название</th>
                            <th>Автор</th>
                            <th>Количество страниц</th>
                            <th>Год</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map( ({id, name, author, pageNumbers, year}) => (
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{author}</td>
                                    <td>{pageNumbers}</td>
                                    <td>{year}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </TableWrapper>
        </Container>
    )
}