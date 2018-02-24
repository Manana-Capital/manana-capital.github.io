import fetch from 'cross-fetch';

export const fetchSharePricePerDay = () => {
    return fetch('https://kotas.host/api/shares/price-per-day')
        .then(resp => resp.json());
}