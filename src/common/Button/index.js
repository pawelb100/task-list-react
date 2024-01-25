import { ButtonStyled } from "./styled";

const Button = ({ title, onClick, isDisabled }) => (
    <ButtonStyled
        onClick={onClick}
        disabled={isDisabled}>
        {title}
    </ButtonStyled>
)

export default Button;