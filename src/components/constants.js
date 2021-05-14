import * as Yup from "yup";


export const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    acceptedTerms: false, 
    jobType: "" ,
    dateTime: ""
}


export const schema = Yup.object({
    firstName: Yup.string()
      .min(2, "El nombre tiene que ser superior a 2")
      .max(10, "El nombre tiene que ser inferior a 10")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Debes escribir un apellido")
      .required("Required"),
    email: Yup.string()
      .email("email no valido")
      .required("Required"),
    acceptedTerms: Yup.boolean()
      .required("Required")
      .oneOf([true], "Debe aceptar los terminos y condiciones"),
    jobType: Yup.string()
      .oneOf(
        ["designer", "development", "product", "other"],
        "Tipo no valido"
      )
      .required("Required"),
    dateTime: Yup.date()
      .min(new Date('01-01-2021'), "La fecha tiene que ser superior a 01/01/2021")
      .max(new Date(), "La fecha tiene que ser inferior a hoy")
      .required("Required"),
  })