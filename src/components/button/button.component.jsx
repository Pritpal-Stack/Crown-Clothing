import { BaseButton, GoogleSignInButton, InvertedButton } from  './button.style.jsx'


export const BUTTON_TYPE = {
    base: 'base',
    google : "google-sign-in",
    inverted: "inverted"
}

const getButton = (buttonType=BUTTON_TYPE.base) => ({
    [BUTTON_TYPE.base]: BaseButton, 
    [BUTTON_TYPE.google]: GoogleSignInButton, 
    [BUTTON_TYPE.inverted]: InvertedButton, 
}[buttonType])

const Button = ({ children, buttonType, ...additionalProps }) => {

    const CustomButton = getButton(buttonType);

    return (
        <CustomButton {...additionalProps} >{children}</CustomButton>
    )
}


export default Button