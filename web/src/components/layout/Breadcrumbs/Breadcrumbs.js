import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'components/layout/Container';

export const BreadcrumbLink = styled(Link) `
font-size: 12px;
color: ${props => props.theme.colors.grayBlue};
`;
export const BreadcrumbLabel = styled.span`
font-size: 12px;
color: ${props => props.theme.colors.grayBlue};

&:before {
    content: '/';
    margin-left: ${props => props.theme.space[2]}px;
    margin-right: ${props => props.theme.space[2]}px;
}
`;

export default props => (
    <Container flex="1 0 auto" flexDirection="row" py={4}>
        <BreadcrumbLink to="/">Home</BreadcrumbLink>
        <BreadcrumbLabel>{props.page}</BreadcrumbLabel>
    </Container>
);
