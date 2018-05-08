import styled from 'styled-components';
import isUndefined from 'lodash/isUndefined';

const ControlWrapper = styled.div`
    margin-top: ${props => props.theme.space[1]}px;
    margin-bottom: ${props => props.theme.space[3]}px;
    padding-top: ${props => (props.noSpace ? 0 : (isUndefined(props.label) ? 21 : 0)) }px;
`;

export default ControlWrapper;
