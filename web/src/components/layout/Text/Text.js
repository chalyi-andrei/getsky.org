import styled from 'styled-components';
import { fontSize, space, color } from 'styled-system';

const Text = styled.p`
    font-size: ${props => props.theme.fontSizes[1]};
    line-height: 1.5;
    margin: 0;
    font-family: ${props => props.theme.fontLight};
    
    ${space}
    ${fontSize}
    ${color}
`;

export default Text;
