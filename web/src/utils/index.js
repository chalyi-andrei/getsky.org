// Taken from http://www.jacklmoore.com/notes/rounding-in-javascript/
export const round = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

export const getPageTitle = (postfix) => `${postfix} - Buysky`;

export const AdvertType = {
    BUY: 'buy',
    SELL: 'sell',
};

export const getAdvertTypeFromLocation = (reactLocation) => reactLocation.pathname.includes('buy') ? AdvertType.BUY : AdvertType.SELL;