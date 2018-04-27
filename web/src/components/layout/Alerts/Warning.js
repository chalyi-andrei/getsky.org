import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled'

import Icon, { IconMap } from 'components/layout/Icon'

const YellowLine = styled(Box)`
    background: ${props => props.theme.colors.warning};
`;

const Warning = ({ children }) => (
    <Flex>
        <YellowLine width={4} />
        <Box p={'20px'}>
            <Icon name={IconMap.ExclamationCircle} />
        </Box>
        <Box py={'20px'}>
            {children}
        </Box>
    </Flex>
);

export default Warning;
