import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 0.5rem;
    color: ${props => props.theme['gray-100']};
    font-size: 1.115rem;
    font-weight: bold;
    flex-wrap: wrap;
`
const BaseStyleInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: none;
    border-bottom: 2px solid ${props => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1.115rem;
    padding: 0 0.5rem;
    color: ${props => props.theme['gray-100']};

    &:focus {
        box-shadow: none;
        border-color: ${props => props.theme['green-500']};
    }

    &::placeholder{
        color: ${props => props.theme['gray-500']};
    }

`

export const TaskInput = styled(BaseStyleInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator{
        display: none !important;
    }
`
export const MinutesAmountInput = styled(BaseStyleInput)`
    width: 4rem;
`