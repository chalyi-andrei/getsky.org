import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import { Link } from 'react-router-dom';

import { rem, rgba } from 'polished';
import disableScroll from 'disable-scroll';

import media from 'media';

import menuBlueIc from './icMenuBlue.svg';
import cancelIc from './icCancel.svg';

const ToggleButton = styled.button`
    height: 30px;
    width: 30px;
    padding: 0;
    border: 0;
    box-shadow: none;
    cursor: pointer;
    
    &:focus {
        outline: none;
    }
    
    ${media.md`
        display: none;
    `}
`;

const MenuClose = ToggleButton.extend`
    background: url(${cancelIc}) 0 0 no-repeat;
    position: absolute;
    top: 82px;
    right: 53px;
    cursor: pointer;
`;

const MenuOpen = ToggleButton.extend`
    background: url(${menuBlueIc}) 0 0 no-repeat;
`;

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: -270px;
    z-index: 2;

    ${media.md`
        position: relative;
        top: auto;
        bottom: auto;
        right: auto;
    `}
`;

const Scrollable = styled.div`
    display: block;
    width: 100%;
    height: 100%;

    overflow-y: auto;
    background: ${props => props.theme.colors.white};
    transform: translateX(${props => (props.menuVisible ? '-270px' : '0')});
    transition: transform 400ms ease-in-out;
    position: relative;
    padding-right: 17px;
    right: -17px;
    top: -60px;
    padding-top: 60px;

    ${media.md`
        top: 0;
        padding-top: 0;
        width: auto;
        height: auto;
        background: transparent;
        transform: translateX(0);
    `}
`;

const GroupWrapper = styled.div`
    display: ${props => (props.show ? 'flex' : 'none')};;
    flex-wrap: wrap;
    flex-direction: column;
    width: auto;
    margin-top: 0;
    padding: ${props => rem(props.theme.space[5])}  0;
    font-size: ${props => props.theme.fontSizes[1] + 'px'};
    text-align: left;
    ${media.sm`
        width: auto;
        margin-top: 0;
    `};
    
    ${media.md`
        display: ${props => (props.show ? 'flex' : 'none')};
        flex-direction: row;
        padding: 0;
    `}
`;

const Wrapper = styled(Flex) `
    flex-direction: column;
    width: 270px;
    min-height: 100%;
    text-align: left;
    margin-top: 20px;
    ${media.md`
        flex-direction: row;
        width: auto;
        height: auto;
        background: transparent;
    `}
    
    ${GroupWrapper} + ${GroupWrapper} {
        border-top: 2px solid ${props => props.theme.colors.darkGray};

        ${media.md`
            border-top: none;
            margin-left: ${props => rem(props.theme.space[4])};
        `}
    }
`;

const withActiveProp = (Component) => {
    const C = (props) => {
        const matched = null;
        const active = props.to && (matched != null) && matched.isExact;
        return (
            <Component
                {...props}
                active={active}
            />
        );
    };

    C.displayName = `withActiveProp(${Component.displayName || Component.name})`;
    C.WrappedComponent = Component;
    C.propTypes = {
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired,
        }).isRequired,
        to: PropTypes.string,
    };
    C.defaultProps = {
        to: undefined,
    };

    return C;
};

/* eslint-disable no-nested-ternary */
const StyledLink = withActiveProp(styled(Link) `
    display: flex;
    align-items: center;
    width: auto;
    margin: 0;
    padding-top: ${props => rem(props.theme.space[3])};
    padding-bottom: ${props => rem(props.theme.space[3])};
    padding-left: ${props => rem(props.theme.space[8])}; 
    padding-right: ${props => rem(props.theme.space[8])};
    font-family: ${props => props.theme.fontFamilies.sans};
    color: ${props => props.theme.colors.blue};
    text-decoration: none;
    border: ${props => props.border ? '1px solid white' : ''};

    &:hover {
        opacity: .8;
        text-decoration: none;
    }

    ${media.sm`
        color: ${props => props.theme.colors.blue};
        width: auto;
    `};

    ${media.md`
        margin-left: ${props => rem(props.theme.space[4])};
        padding: ${props => rem(props.theme.space[2])};
        color: ${props => props.theme.colors.white};

        &:first-child {
            margin-left: 0;
        }
    `}
  
    ${media.lg`
        margin-left: ${props => rem(props.theme.space[7])};
    `}
`);

const Overlay = styled.div`
    display: ${props => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: -60px;
    padding-top: 60px;
    height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${props => rgba(props.theme.colors.black, 0.5)};
    opacity: ${props => props.visible ? '1' : '0'};
    transition: opacity 400ms linear;
    z-index: 1;

    ${media.md`
        display: none;
    `}
`;

const NavWrapper = styled.div`
    width: auto;
`;

class Navigation extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            menuVisible: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentWillUnmount() {
        disableScroll.off();
    }

    toggleMenu() {
        const { menuVisible } = this.state;

        document.body.style.overflowY = menuVisible ? 'auto' : 'hidden';
        this.setState({ menuVisible: !menuVisible });
    }

    render() {
        const { navItems } = this.props;
        const { menuVisible } = this.state;

        return (
            <NavWrapper>
                <MenuOpen onClick={this.toggleMenu} />
                <Overlay visible={menuVisible} />
                <Container>
                    <Scrollable menuVisible={menuVisible}>
                        <Wrapper wrap>
                            <MenuClose onClick={this.toggleMenu} />
                            <GroupWrapper show>
                                {navItems.map(nv =>
                                    <StyledLink key={nv.url} border={nv.border} to={nv.url}>
                                        {nv.name}
                                    </StyledLink>
                                )}
                            </GroupWrapper>
                        </Wrapper>
                    </Scrollable>
                </Container>
            </NavWrapper>
        );
    }
}

Navigation.propTypes = {
    navItems: PropTypes.array,
};

Navigation.defaultProps = {
    navItems: PropTypes.array,
};

export default Navigation;
