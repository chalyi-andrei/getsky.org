import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';

import { BuyButton, SellButton } from 'components/layout/Button';
import { H2 } from 'components/layout/Text';
import Table from 'components/layout/Table';

export const RightCornerButton = {
    BUY: <BuyButton primary />,
    SELL: <SellButton />,
    NONE: null,
};

const AdvertsList = ({ title, adverts, noAdvertsMessage, rightCorner, columns, rowComponent, rowOperations }) => (
    <Box mt={4}>
        <Flex alignItems={'center'} justifyContent={'space-between'} my={5}>
            <H2>{title}</H2>
            <Box>{rightCorner}</Box>
        </Flex>
        {adverts.length > 0 &&
            <Table columns={columns} rowComponent={rowComponent} rowData={adverts} rowOperations={rowOperations} />
        }
        {adverts.length === 0 &&
            <Box mb={4}>
                {noAdvertsMessage}
            </Box>
        }
    </Box>
);

AdvertsList.propTypes = {
    title: PropTypes.string.isRequired,
    adverts: PropTypes.array.isRequired,
    noAdvertsMessage: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    })),
    rowComponent: PropTypes.func.isRequired,
    rightCornerContent: PropTypes.node,
};

export default AdvertsList;
