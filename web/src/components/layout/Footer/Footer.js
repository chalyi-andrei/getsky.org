import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import Promo from 'components/layout/Promo';
import Container from 'components/layout/Container';
import Brand from 'components/layout/Brand';
import { Link } from 'components/layout/Links';
import SocialLinks from 'components/layout/SocialLinks';

const Background = styled(Box) `
    background: ${props => `linear-gradient(${props.theme.colors.darkBlue}, ${props.theme.colors.black})`};
    margin-top: -200px;
    padding-top: 260px;
`

const LinksContainer = styled(Container) `
    border-bottom: 1px solid #979797;
    padding-bottom: 61px;
`;

const MicroText = styled(Box) `
    color: ${props => props.theme.colors.grayBlue};
    font-size: ${props => props.theme.fontSizes[1]}px;
`;

export default () => (
    <Box mt={'125px'}>
        <Promo />
        <Background>
            <LinksContainer
                flexDirection={['column', 'row', 'row']} justifyContent={'space-around'}>
                <Flex flex='1 1 auto' justifyContent={'space-around'}>
                    <Link path={'/'} text={'Home'} />
                    <Link path={'/why-skycoin'} text={'Why Skycoin'} />
                    <Link path={'/search'} text={'Search'} />
                </Flex>
                <Flex flex='1 1 auto' justifyContent={'space-around'} mt={['30px', '0px', '0px']}>
                    <Link path={'/faq'} text={'FAQ'} />
                    <Link path={'/contact-us'} text={'Contact'} />
                    <Link path={'/privacy'} text={'Privacy'} />
                    <Link path={'/terms'} text={'Terms'} />
                </Flex>
            </LinksContainer>
            <Container justifyContent={'center'} my={'76px'}>
                <Brand />
            </Container>
            <Container justifyContent={'space-between'} alignItems={'center'} height={'74px'} >
                <MicroText>Have you heard yet? Skycoin is the new Benjamin</MicroText>
                <Box>
                    <SocialLinks />
                </Box>
                <MicroText>©2018 GetSky.com. All rights reserved.</MicroText>
            </Container>
        </Background>
    </Box>
);
