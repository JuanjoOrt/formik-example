import {Formik, Form} from "formik";
import {initialValues, schema} from './constants';
import {MyTextInput, MySelect, MyCheckbox, MyDate} from './FormComponents'



export default function Home(){

    return (
        <>
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values)
          setSubmitting(false);
        }}
        >
            <Form className="form">

              <MyTextInput
                  label="Nombre"
                  name="firstName"
                  type="text"
              />

              <MyTextInput
                  label="Apellido"
                  name="lastName"
                  type="text"
              />

              <MyTextInput
                  label="Email"
                  name="email"
                  type="email"
              />

              <MySelect label="Job Type" name="jobType">
                <option value="">Select a job type</option>
                <option value="designer">Designer</option>
                <option value="development">Developer</option>
                <option value="product">Product Manager</option>
                <option value="other">Other</option>
                <option value="SeSuponeQueEstoEstaMal">Se supone que esto esta mal</option>
              </MySelect>

              <MyCheckbox 
                name="acceptedTerms"
                >
                  Aceptar las condiciones
              </MyCheckbox>

              <MyDate name="dateTime"/>

              <button type="submit">Submit</button>
            </Form>         
        </Formik>
        </>
    )
}