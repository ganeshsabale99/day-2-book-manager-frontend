import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Add Book</h1>
      <Formik
        initialValues={{
          title: "",
          author: "",
          description: "",
          price: "",
          gener: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.title) errors.title = "Required";
          if (!values.author) errors.author = "Required";
          if (!values.description) errors.description = "Required";
          if (!values.price) errors.price = "Required";
          if (!values.gener) errors.gener = "Required";
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const existingBooks = JSON.parse(localStorage.getItem("books")) || [];

          const newBook = {
            ...values,
            id: Date.now(), 
          };

          const updatedBooks = [...existingBooks, newBook];
          localStorage.setItem("books", JSON.stringify(updatedBooks));

          resetForm();
          setSubmitting(false);
          navigate("/"); 
        }}
      >
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <Field name="author" type="text" />
            <ErrorMessage name="author" component="div" />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <Field name="price" type="number" />
            <ErrorMessage name="price" component="div" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Field name="description" type="text" />
            <ErrorMessage name="description" component="div" />
          </div>
          <div>
            <label htmlFor="gener">gener</label>
            <Field name="gener" type="text" />
            <ErrorMessage name="gener" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddBook;
