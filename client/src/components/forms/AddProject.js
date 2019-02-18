import React from 'react';
import { Form, withFormik, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const AddProject = props => {
  const {
    values,
    touched,
    errors,
    setFieldValue,
  } = props;
  return (
    <Form className="form">
      <h1>Add a Project</h1>
      <div className="form__group">
        <Field
          name="title"
          type="text"
          placeholder="Project Title"
          className="form__field"
        />
      </div>
      <div className="form__group">
        <label htmlFor="file">Thumbnail:</label>
        <input id="file" name="file" type="file" onChange={(event) => {
          setFieldValue("file", event.currentTarget.files[0]);
        }} />
      </div>
      <div className="form__buttons">
        <button className="btn btn-orange" type="submit">Submit</button>
        <Link className="btn-black" to="/projects">Cancel</Link>
      </div>
    </Form>
  );
};

const AddProjectForm = withFormik({
  mapPropsToValues: () => ({

  }),
  validationSchema: Yup.object().shape({

  }),
  handleSubmit: (payload, { props, setSubmitting }) => {
    setSubmitting(false);
    props.onSubmit(payload);
  }
})(AddProject);

export default AddProjectForm;