import {useField} from "formik";


export function MyTextInput({ label, ...props }) {
    const [field, meta] = useField(props);
    const showError = meta.touched && meta.error;

    return (
      <div className="container-input">
        <label htmlFor={props.id || props.name}>{label}</label>
        <div className="subcontainer-input">
            <input className={`input-field ${showError && 'input-error'}`} {...field} {...props} />
            {showError && <div className='input-error-label'>{meta.error}</div>}
        </div>
      </div>
    );
  };


export const MySelect = ({children, label, ...props }) => {
    const [field, meta] = useField(props);
    const showError = meta.touched && meta.error;

    return (
      <div className="container-input">
        <div htmlFor={props.id || props.name}>{label}</div>
        <select {...field} className={`input-field ${showError && 'input-error'}`}>
            {children}
        </select>
        {showError && <div className='input-error-label'>{meta.error}</div>}
      </div>
    );
  };


 export const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    const showError = meta.touched && meta.error;

    return (
      <div className="container-input">
        <label className="checkbox">
          <input {...field} {...props} type="checkbox" />
          {children}
        </label>
        {showError && <div className='input-error-label'>{meta.error}</div>}
      </div>
    );
  };


export const MyDate = ({ ...props }) => {
    const [field, meta] = useField(props);
    const showError = meta.touched && meta.error;

    return (
      <div className="container-input">
        <input {...field} {...props} type="date" className={`input-field ${showError && 'input-error'}`}/>
        {showError && <div className='input-error-label'>{meta.error}</div>}
      </div>
    );
  };