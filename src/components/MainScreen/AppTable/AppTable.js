import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Container, TableWrapper } from './StyledAppTable';

export const AppTable = () => {

    const table = useSelector(state => state.tableReducer.table);
    
    return (
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
                        table.map( ({id, name, author, pageNumbers, year}) => (
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
    )
}