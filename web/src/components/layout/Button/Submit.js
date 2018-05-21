import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';

import { MiniSpinner } from 'components/layout/Spinner';
import { Button } from 'components/layout/Button';

const Submit = ({ disabled, showSpinner, text }) => (
    <Flex alignItems="center">
        <Button type="submit" disabled={disabled} text={text} primary />
        <Box ml={1}>
            {showSpinner && <MiniSpinner />}
        </Box>
    </Flex>
);

Submit.propTypes = {
    disabled: PropTypes.bool, 
    showSpinner: PropTypes.bool, 
    text: PropTypes.string.isRequired,
};

export default Submit;
