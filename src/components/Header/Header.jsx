import { styled } from 'styled-components';
import book from '../../assets/book_logo.svg';
import {HiOutlineMoon, HiMiniChevronDown} from 'react-icons/hi2';

import Switch from './Switch';

function Header() {
  return (
    <StyledHeader>
        <Logo src={book} alt="Book logo" />
        <HeaderContent>
            <FontSwitcher>
                <FontType>Serif</FontType>
                <HiMiniChevronDown/>
            </FontSwitcher>
            <Divider />
            <ThemeSwitcher>
                <Switch />
                <HiOutlineMoon style={{ stroke: '#757575' }}/>
            </ThemeSwitcher>
        </HeaderContent>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 1rem 0 1rem 0;
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

const FontSwitcher = styled.button`
    padding: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    cursor: pointer;
    background-color: transparent;
    border: none;

    svg {
        fill: #A445ED;
        width: 100%;
        height: 24px;
    }
`;

const FontType = styled.p`
    font-weight: 700;
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