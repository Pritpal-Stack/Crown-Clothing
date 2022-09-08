import './button.style.scss'


const BUTTON_TYPE = {
    google : "google-sign-in",
    inverted: "inverted"
}

const Button = ({ children, buttonType }) => {
    return (
        <button className={`button-container ${BUTTON_TYPE[buttonType]} `} >{children}</button>
    )
}


export default Button