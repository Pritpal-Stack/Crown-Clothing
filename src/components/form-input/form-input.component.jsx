
import { FormInputStyle, FormInputLabel, Group } from './form-input.style.jsx'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputStyle { ...otherProps }  />
      { label && (<FormInputLabel shrink={otherProps.value.length ? 'shrink': ''}  >{label}</FormInputLabel>)}
    </Group>
  );
};


export default FormInput;