import React from 'react';
import { Formik } from 'formik';
import { ModalForm } from '../ModalForm/ModalForm';

export const ModalFormValidate = () => {

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