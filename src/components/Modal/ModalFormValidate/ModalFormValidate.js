import React from 'react';
import { Formik } from 'formik';
import { ModalForm } from '../ModalForm/ModalForm';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../../../store/actions/tableActions';

export const ModalFormValidate = () => {

    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                name: '',
                author: '',
                pageNumbers: '',
                year: '',
            }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Введите название книги!';
                } 
                if (!values.author) {
                    errors.author = 'Введите автора!';
                } 
                if (
                    !/^[0-9]{1,}$/i.test(values.pageNumbers)
                ) {
                    errors.pageNumbers = 'Введите корректное количество страниц';
                } 
                if (
                    !/^[0-9]{3,4}$/i.test(values.year)
                ) {
                    errors.year = 'Введите корректный год выпуска книги';
                }
                return errors;
            }}
            onSubmit={(fields, actions) => {
                dispatch(addNewBook(fields));
                actions.resetForm({
                    name: '',
                    author: '',
                    pageNumbers: '',
                    year: '',
                });
            }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                }) => (
                    <ModalForm 
                        values={values} 
                        errors={errors} 
                        touched={touched} 
                        handleChange={handleChange}
                        handleSubmit={handleSubmit} 
                    />
                )}
        </Formik>
    )
}