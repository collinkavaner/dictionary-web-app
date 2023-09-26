import styled from 'styled-components'
import { useState } from 'react'

const Switch = ({ toggleTheme }) => {

    const [isOn, setIsOn] = useState(false)

    const toggle = () => {
        setIsOn(!isOn)
        toggleTheme()
    }


    return (
        <Label>
            <Toggle type="checkbox" checked={isOn} onChange={toggle} />
            <Bubble></Bubble>
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

const Toggle = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
`

const Bubble = styled.span`
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 14px;
    height: 14px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
`
