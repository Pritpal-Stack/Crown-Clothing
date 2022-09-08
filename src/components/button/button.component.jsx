import './button.style.scss'


const BUTTON_TYPE = {
    google : "google-sign-in",
    inverted: "inverted"
}

const Button = ({ children, buttonType, ...additionalProps }) => {
    return (
        <button className={`button-container ${BUTTON_TYPE[buttonType]}`} {...additionalProps} >{children}</button>
    )
}


export default Button