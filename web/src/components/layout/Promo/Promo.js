import React from 'react'
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import Container from 'components/layout/Container';
import { H2, Text } from 'components/layout/Text';
import { SellButton, BuyButton } from 'components/layout/Button';
import bg from './bg.jpg';

const SellBtn = styled(SellButton) `
    height: 70px;
    font-size: 18px;
    line-height: 18px;
    background: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.fontBold};
    
    &:hover {
        background: ${props => props.theme.colors.lightBlue};
        border-color: ${props => props.theme.colors.lightBlue};
    }
`;

const BuyBtn = styled(BuyButton) `
    height: 70px;
    font-size: 18px;
    line-height: 18px;
`;

const Tip = styled.p`
    margin-top: 12px;
    font-size: 18px;
`;

const ActionText = styled(Text)`
    text-transform: uppercase;
`;

const Promo = styled.section`
    min-height: 400px;
    padding-left: ${props => props.theme.space[6]}px;
    padding-right: ${props => props.theme.space[6]}px;
    padding-bottom: ${props => props.theme.space[8]}px;
    color: ${props => props.theme.colors.white};
    text-align: center;
    z-index: 2;
    background: url(${bg}) 50% 50% no-repeat;
    background-size: cover;
`;

export default () => (
    <Container flexDirection="column" width={[1, 0.9]}>
        <Promo>
            <H2 mt={[7, 9, 11]} fontSize={[3, 4]}>Can't find the advert for you?</H2>
            <Tip>If you can't see a buyer or seller that is offering what you want, you can post your own advert.</Tip>
            <ActionText mt={[6, 8, 10]} color="grayBlue" fontSize={[1, 2]}>I want to advertise to</ActionText>
            <Flex justifyContent={'center'} flexWrap="wrap" flexDirection={['column', 'row']}>
                <Box mx={3} mt={5}>
                    <BuyBtn text={'Buy Skycoin'} primary width={[1, '280px']} />
                </Box>
                <Box mx={3} mt={5}>
                    <SellBtn text={'Sell Skycoin'} width={[1, '280px']} />
                </Box>
            </Flex>
        </Promo>
    </Container>
);
