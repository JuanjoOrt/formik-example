
<h1>Holaa 👋</h1>


Este es un proyecto realizado cuya unica finalidad es hacer pruebas con la libreria de formularios <a href="https://formik.org/">Formik</a>, el objetivo es entender como funciona la libreria, realizar un formulario base de ejemplo con los tipicos inputs que solemos utilizar y controlar las validaciones que queramos.

Demo: https://juanjoort.github.io/formik-example/

El resultado cuando haces summit se puede ver en la consola.


Los tipos de datos que vamos a utilizar y las validaciones son las siguientes:

```
firstName: Yup.string()
      .min(2, "El nombre tiene que ser superior a 2")
      .max(10, "El nombre tiene que ser inferior a 10")
      .required("Required")
```

```
lastName: Yup.string()
  .max(20, "Debes escribir un apellido")
  .required("Required")
```

```
email: Yup.string()
     .email("email no valido")
    .required("Required")
```

```
acceptedTerms: Yup.boolean()
      .required("Required")
      .oneOf([true], "Debe aceptar los terminos y condiciones")
```

```
jobType: Yup.string()
      .oneOf(
        ["designer", "development", "product", "other"],
        "Tipo no valido")
      .required("Required")
```

```
dateTime: Yup.date()
      .min(new Date('01-01-2021'), "La fecha tiene que ser superior a 01/01/2021")
      .max(new Date(), "La fecha tiene que ser inferior a hoy")
      .required("Required")
```
