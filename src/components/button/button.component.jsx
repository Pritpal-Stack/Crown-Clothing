import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from "./button.style.jsx";

export const BUTTON_TYPE = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE.base) =>
  ({
    [BUTTON_TYPE.base]: BaseButton,
    [BUTTON_TYPE.google]: GoogleSignInButton,
    [BUTTON_TYPE.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...additionalProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled={isLoading} {...additionalProps}>
      { isLoading ? <ButtonSpinner/> : children}
    </CustomButton>
  );
};

export default Button;
