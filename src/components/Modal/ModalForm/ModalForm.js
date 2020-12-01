import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export const ModalForm = ({values, errors, touched, handleChange, handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <InputGroup className="mb-2">
            <InputGroup.Prepend>
                <InputGroup.Text>Название книги</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
                type="bookName"
                name="bookName"
                onChange={handleChange}
                value={values.bookName}
            />
        </InputGroup>
        <p>{errors.bookName && touched.bookName && errors.bookName}</p>
        
        <InputGroup className="mb-2">
            <InputGroup.Prepend>
                <InputGroup.Text>Автор книги</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
                type="author"
                name="author"
                onChange={handleChange}
                value={values.author}
            />
        </InputGroup>
        <p>{errors.author && touched.author && errors.author}</p>

        <InputGroup className="mb-2">
            <InputGroup.Prepend>
                <InputGroup.Text>Количество страниц</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
                type="pageNumber"
                name="pageNumber"
                onChange={handleChange}
                value={values.pageNumber}
            />
        </InputGroup>
        <p>{errors.pageNumber && touched.pageNumber && errors.pageNumber}</p>

        <InputGroup className="mb-2">
            <InputGroup.Prepend>
                <InputGroup.Text>Год выпуска книги</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
                type="year"
                name="year"
                onChange={handleChange}
                value={values.year}
            />
        </InputGroup>
        <p>{errors.year && touched.year && errors.year}</p>
        <Button 
            variant="primary"
            type="submit"
        >
            Добавить книгу
        </Button>
    </form>
)