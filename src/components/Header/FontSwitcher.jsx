import * as Popover from '@radix-ui/react-popover';
import styled from 'styled-components';
import { HiMiniChevronDown } from 'react-icons/hi2';


const FontSwitcher = ({ changeFont }) => (
    <Popover.Root>
        <FontSwitch>
            <FontType>Serif</FontType>
            <HiMiniChevronDown/>
        </FontSwitch>
    <Popover.Anchor />
    <Popover.Portal>
      <Popover.Content sideOffset={25} align='end' alignOffset={30} avoidCollisions={false}>
        <PopoverContent>

          <ChangeFont onClick={() => changeFont('Arial')}> Sans Serif</ChangeFont>
          <ChangeFont onClick={() => changeFont('Lora')}> Serif </ChangeFont>
          <ChangeFont onClick={() => changeFont('Courier')}> Mono </ChangeFont>

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

    svg {
        fill: #A445ED;
        width: 100%;
        height: 24px;
    }
`;

const FontType = styled.p`
    font-weight: 700;
`;

const PopoverContent = styled.div`
  background-color: ${({ theme }) => theme.bgPrimary};
  border-radius: 16px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.fontFilterShadow};
  width: 184px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ChangeFont = styled(Popover.Close)`
    width: 100%;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.textPrimary};
    font-weight: 700;
    transition: color .2s ease-in-out;

    &:hover {
        color: #A445ED;
    }
`;

