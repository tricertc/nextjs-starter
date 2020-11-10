import { forwardRef } from 'react';

interface Props {
  type: 'text' | 'email' | 'password';
  label: string;
}

const FormField = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <div className="form-group">
    <label>{props.label}</label>
    <input type={props.type} ref={ref} />
  </div>
));

FormField.displayName = 'FormField';

export default FormField;
