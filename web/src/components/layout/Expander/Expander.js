import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import debounce from 'debounce';

import Icon, { IconMap } from 'components/layout/Icon';

const ExpanderLabel = styled(Flex) `
    z-index: 1000;
    &:hover {
        opacity: 0.75;
        cursor: pointer;
    }
`;

const TextLabel = styled.span`
    margin-right: 10px;
`;

const hiddenStyle = { display: 'none', position: 'absolute' };
const visibleStyle = { display: 'block', position: 'absolute' };

export default class extends React.Component {
    static propTypes = {
        children: PropTypes.any,
        label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
        iconName: PropTypes.any,
    }

    state = {
        visible: false,
    }

    componentDidMount() {
        document.addEventListener('touchend', this.hideExpander, false);
        document.addEventListener('click', this.hideExpander, false);
    }

    componentWillUnmount() {
        document.removeEventListener('touchend', this.hideExpander, false);
        document.removeEventListener('click', this.hideExpander, false);
    }

    hideExpander = debounce((e) => {
        if (this.state.visible) {
            this.setState({ ...this.state, visible: false });
        }
    }, 40);

    toggleExpander = debounce(visible => {
        this.setState({ ...this.state, visible, });
    }, 50);

    render() {
        const { visible } = this.state;
        const { iconName, openedColor, closedColor } = this.props

        return (
            <div>
                <ExpanderLabel onClick={e => this.toggleExpander(!visible)}>
                    {this.props.label && <TextLabel>{this.props.label}</TextLabel>}
                    {visible && <Icon name={iconName || IconMap.CaretUp} color={openedColor || 'white'} />}
                    {!visible && <Icon name={iconName || IconMap.CaretDown} color={closedColor || 'white'} />}
                </ExpanderLabel>
                <div style={visible ? visibleStyle : hiddenStyle}>
                    {this.props.children}
                </div>

            </div >);
    }
}
