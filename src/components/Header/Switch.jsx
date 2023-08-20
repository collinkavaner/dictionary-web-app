import styled from 'styled-components'

const Switch = ({ isOn, handleToggle }) => {
    return (
        <Label>
            <Checkbox type="checkbox" checked={isOn} onChange={handleToggle} />
            <Span></Span>
        </Label>
    )
}

export default Switch

const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 40px;
    min-width: 40px;
    height: 20px;
    background: #757575;
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
`

const Checkbox = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
`

const Span = styled.span`
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 14px;
    height: 14px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`
