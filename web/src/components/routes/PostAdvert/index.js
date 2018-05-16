import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Helmet } from 'react-helmet';

import { getPageTitle, getAdvertTypeFromLocation, AdvertType } from 'utils';
import Container from 'components/layout/Container';
import { BackIcLink } from 'components/layout/Links';
import { setAdvertPreview, ADVERT_SELL, ADVERT_BUY } from 'components/routes/PostingsPreview/actions';

import PostingForm from './PostingForm';
import { SellTitle, BuyTitle } from './Title';

class PostAdvert extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    getAdvertType = () => getAdvertTypeFromLocation(this.props.location);

    onSubmit(form) {
        const advertType = this.getAdvertType();
        const type = advertType === AdvertType.BUY ? ADVERT_BUY : ADVERT_SELL;
        const value = form.pricePerCoin.value;
        const extraData = form.pricePerCoin.type === 'PERCENTAGE_ADJUSTMENT'
            ? { percentageAdjustment: value, fixedPrice: null, author: this.props.userInfo.username, type }
            : { percentageAdjustment: null, fixedPrice: value, author: this.props.userInfo.username, type };

        this.props.setAdvertPreview(form, extraData);
        this.props.push(`/postings/${advertType}/preview`);
    }

    render() {
        const { countries, states, userInfo, skyPrices } = this.props;
        const advertType = this.getAdvertType();
        const PostingTitle = advertType === AdvertType.BUY ? BuyTitle : SellTitle;

        return (
            <Container flex='1 0 auto' flexDirection='column' py={5}>
                <Helmet><title>{getPageTitle(`${advertType === AdvertType.SELL ? 'Sell' : 'Buy'} advert`)}</title></Helmet>
                <BackIcLink path='/dashboard' text='Dashboard' />
                <PostingTitle />
                {userInfo && <PostingForm
                    advertType={advertType}
                    countries={countries}
                    states={states}
                    onSubmit={this.onSubmit}
                    skyPrices={skyPrices}
                    initialValues={{ ...userInfo, distance: { data: '', prefix: userInfo.distanceUnits }}} 
                />}
            </Container>
        )
    }
}

const mapStateToProps = ({ app }) => ({
    countries: app.countries,
    states: app.states,
    userInfo: app.userInfo,
    skyPrices: app.skyPrices,
})

export default connect(mapStateToProps, { setAdvertPreview, push })(PostAdvert);
