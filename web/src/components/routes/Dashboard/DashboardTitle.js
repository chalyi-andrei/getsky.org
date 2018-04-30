import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';

import { BuyButton, SellButton } from 'components/layout/Button';
import { H2 } from 'components/layout/Text';

const DashboardTitle = ({ userName }) => (
    <Flex
        flexWrap="wrap"
        flexDirection={['column', 'row', 'row']}
        justifyContent='space-between'
        my={5}
    >
        <Flex alignItems='center' >
            <H2>Hello, {userName}</H2>
        </Flex>
        <Flex flex='1 1 auto' mt={['10px', '0px', '0px']} justifyContent={['flex-start', 'flex-end', 'flex-end']}>
            <BuyButton primary />
            <Box ml={['10px', '40px', '40px']}>
                <SellButton />
            </Box>
        </Flex>
    </Flex>
);

DashboardTitle.propTypes = {
    userName: PropTypes.string,
};

export default DashboardTitle;
