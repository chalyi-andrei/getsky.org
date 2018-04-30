import styled from 'styled-components';
import { fontSize, space } from 'styled-system';

const H2 = styled.h2`
    font-size: 28px;
    line-height: 28px;
    margin: 0px;
    font-family: ${props => props.theme.fontBold};
    
    ${space}
    ${fontSize}
`;

export default H2;
