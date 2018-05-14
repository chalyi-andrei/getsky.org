import styled from 'styled-components';
import isUndefined from 'lodash/isUndefined';

const ControlWrapper = styled.div`
    margin-top: ${props => props.theme.space[1]}px;
    margin-bottom: ${props => props.theme.space[3]}px;
`;

export default ControlWrapper;
