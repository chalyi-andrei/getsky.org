import styled from 'styled-components';
import { fontSize, space } from 'styled-system';

const H2 = styled.h2`
    font-size: 28px;
    line-height: 28px;
    margin: 0px;
    font-family: ${props => props.theme.fontBold};
    width: ${props => (props.wide ? '100%' : 'auto')};

    ${space}
    ${fontSize}
`;

export default H2;
