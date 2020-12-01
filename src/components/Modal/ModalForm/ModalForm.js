import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export const ModalForm = ({values, errors, touched, handleChange, handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <InputGroup className="mb-2">
            <InputGroup.Prepend>
                <InputGroup.Text>Название книги</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
                type="name"
                name="name"
                onChange={handleChange}
                value={values.name}
            />
        </InputGroup>
        <p>{errors.name && touched.name && errors.name}</p>
        
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
                type="pageNumbers"
                name="pageNumbers"
                onChange={handleChange}
                value={values.pageNumbers}
            />
        </InputGroup>
        <p>{errors.pageNumbers && touched.pageNumbers && errors.pageNumbers}</p>

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