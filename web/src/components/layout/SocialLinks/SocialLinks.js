import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Link } from 'react-router-dom';

import theme from 'components/theme';
import Icon, { IconMap } from '../Icon/Icon';

const menuItems = [
    { icon: IconMap.Facebook, url: 'https://facebook.com/getskycoin' },
    { icon: IconMap.Twitter, url: 'https://twitter.com/getskycoin' },
    { icon: IconMap.Instagram, url: 'https://www.instagram.com/getskycoin/' },
];

const TrapezoidBackground = styled(Flex) `
    height: 0px;
    box-sizing: content-box;
    border: 50px solid rgba(0,0,0,0);
    border-top: 0 solid ${props => props.theme.colors.darkBlue};
    border-bottom: 100px solid ${props => props.theme.colors.darkBlue};
    margin: auto;
`;


export default () => (
    <TrapezoidBackground justifyContent={'space-around'} width={['auto', '400px']}>
        {menuItems.map((item, i) => (
            <Box key={i} mt={'35px'}>
                <Link to={item.url}>
                    <Icon name={item.icon} color={theme.colors.blue} size={'2x'} />
                </Link>
            </Box>
        ))}
    </TrapezoidBackground>
);
