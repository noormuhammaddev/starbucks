import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, TextField } from '@mui/material';

const UpdateModal = ({ initialValues, onSubmit, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] min-h-[60%] m-2 p -2">
        <h2 className="text-xl font-bold mb-4">Update Blog</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({ values, handleChange }) => (
            <Form>
              <div className="mb-4">
                <Field
                  as={TextField}
                  name="title"
                  label="Title"
                  fullWidth
                  variant="outlined"
                  onChange={handleChange}
                  value={values.title}
                />
              </div>
              <div className="mb-4">
                <Field
                  as={TextField}
                  name="content"
                  label="Content"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={7}
                  onChange={handleChange}
                  value={values.content}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outlined"
                  color="secondary"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Update
                </Button>
             
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateModal;
