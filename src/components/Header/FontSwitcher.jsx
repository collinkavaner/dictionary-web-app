import * as Popover from '@radix-ui/react-popover';
import styled from 'styled-components';
import { HiMiniChevronDown } from 'react-icons/hi2';


const FontSwitcher = ({ changeFont, font }) => (
    <Popover.Root>
        <FontSwitch>
            <FontType>{ font === 'Inter Variable' ? 'Sans Serif' : font === 'Lora' ? 'Serif' : 'Mono'}</FontType>
            <HiMiniChevronDown/>
        </FontSwitch>
    <Popover.Portal>
      <Popover.Content sideOffset={10} align='end' alignOffset={0} avoidCollisions={false}>
        <PopoverContent>

          <FontOne onClick={() => changeFont('Inter Variable')}> Sans Serif</FontOne>
          <FontTwo onClick={() => changeFont('Lora')}> Serif </FontTwo>
          <FontThree onClick={() => changeFont('Inconsolata Variable')}> Mono </FontThree>

        </PopoverContent>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

export default FontSwitcher;


const FontSwitch = styled(Popover.Trigger)`
    padding: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    cursor: pointer;
    background-color: transparent;
    border: none;
    white-space: nowrap;

    svg {
        fill: #A445ED;
        width: 100%;
        height: 24px;
    }
`;

const FontType = styled.p`
    font-weight: 700;
    font-size: 1.25rem; // 20px

    @media screen and (max-width: 442px) {
        font-size: 0.9rem; // 14px
    }
`;

const PopoverContent = styled.div`
  background-color: ${({ theme }) => theme.bgSecondary};
  border-radius: 16px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.fontFilterShadow};
  width: 184px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 442px) {
    width: 144px;
  }
`;

const ChangeFont = styled(Popover.Close)`
    width: 100%;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.textPrimary};
    font-weight: 700;
    font-size: 1.25rem; // 20px
    transition: color .1s ease-in-out;

    &:hover {
        color: #A445ED;
    }

    @media screen and (max-width: 442px) {
        font-size: 0.9rem; // 14px
    }
`;

const FontOne = styled(ChangeFont)`
    font-family: 'Inter Variable', Helvetica, sans-serif;
`;

const FontTwo = styled(ChangeFont)`
    font-family: 'Lora', serif;
`;

const FontThree = styled(ChangeFont)`
    font-family: 'Inconsolata Variable', monospace;
`;

