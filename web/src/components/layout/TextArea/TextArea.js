import styled from 'styled-components';
import { rgba } from 'polished';
import { getBorderColor } from '../Form/helper';

const TextArea = styled.textarea`
    width: 100%;
    height: ${props => props.theme.controlHeight}px;
    padding: ${props => props.theme.space[1]}px ${props => props.theme.space[2]}px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => getBorderColor(props)};
    font-family: ${props => props.theme.fontLight};
    font-size: ${props => props.theme.fontSizes[1]}px;
    resize: vertical;

    &:focus {
        outline: none;
        border: 1px solid ${props => rgba(props.theme.colors.black, 0.5)};
    }
`;

export default TextArea;
