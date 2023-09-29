import { styled } from 'styled-components';
import book from '../../assets/book_logo.svg';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import FontSwitcher from './FontSwitcher';

import Switch from './Switch';

function Header({ theme, toggleTheme, changeFont, font }) {
  return (
    <StyledHeader>
        <Logo src={book} alt="Book logo" />
        <HeaderContent>
            <FontSwitcher changeFont={changeFont} font={font} />
            <Divider />
            <ThemeSwitcher>
                <Switch theme={theme} toggleTheme={toggleTheme} />
                { theme === 'dark' ? <HiOutlineSun style={{ stroke: '#ffffff' }}/>
                : <HiOutlineMoon style={{ stroke: '#757575' }}/> }
            </ThemeSwitcher>
        </HeaderContent>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 52px 0;

    @media screen and (max-width: 442px) {
        padding: 0 0 32px 0;
    }
`;

const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`;

const Logo = styled.img`
    width: 32px;
    height: 36px;
`;

const Divider = styled.div`
    width: 1px;
    height: 32px;
    background-color: #ccc;
`;

const ThemeSwitcher = styled.div`
    max-width: 80px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    background-color: transparent;
    border: none;

    svg {
        stroke: #757575;
        width: 100%;
        height: 20px;
    }
`;


export default Header;