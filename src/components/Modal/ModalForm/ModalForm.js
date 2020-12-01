import React from 'react';
import { Formik } from 'formik';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

export const ModalForm = () => {

    return (
        <Formik
            initialValues={{
                bookName: '',
                author: '',
                pageNumber: '',
                year: '',
            }}
            validate={values => {
                const errors = {};
                if (!values.bookName) {
                    errors.bookName = 'Введите название книги!';
                } 
                if (!values.author) {
                    errors.author = 'Введите автора!';
                } 
                if (
                    !/^[0-9]{1,}$/i.test(values.pageNumber)
                ) {
                    errors.pageNumber = 'Введите корректное количество страниц';
                } 
                if (
                    !/^[0-9]{3,4}$/i.test(values.year)
                ) {
                    errors.year = 'Введите корректный год выпуска книги';
                }
                return errors;
            }}
            onSubmit={fields => {
                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                }) => (
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
                )}
        </Formik>
    )
}