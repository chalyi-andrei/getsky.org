import React from 'react';
import styled from 'styled-components';

const FormLabel = styled.label`
    color: ${props => props.theme.colors.grayBlue};
    display: block;
    margin-bottom: ${ props => props.theme.space[2]}px;
    font-size: ${ props => props.theme.fontSizes[0]}px;
`;

export default ({ label, isRequired }) => 
    <FormLabel>
        {label || '\u00A0'}
        {isRequired && '*'}
    </FormLabel>;
