import { Field } from 'redux-form'
import styled from 'styled-components'

// Create an <Input> component that'll render an <input> tag with some styles

export const Input = styled(Field)`
    font-family: 'Source Sans Pro';
    font-size: 1.20em;
    padding: 0.5em;
    margin: 0.5em;
    color: #2C3E50;
    background: #E3E5E5;
    border: none;
    border-radius: 4px;

    &:hover {
        box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
    }
`

export const Label = styled.label`
    font-family: 'Source Sans Pro';
    font-size: 1.20em;
    padding: 0.5em;
    margin: 0.5em;
    color: #2C3E50;
    background: #E3E5E5;
    border: 1px;
    border-radius: 0px;
`
