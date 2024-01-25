import { HeaderStyled } from './styled';

const Header = ({ title }) => (
    <HeaderStyled className="header">
        <h1 className="header__title">{title}</h1>
    </HeaderStyled>
);

export default Header;
