import fetch from 'cross-fetch';

export const fetchSharePricePerDay = () => {
    return fetch('https://mk-dev-server.cloudapp.net/api/shares/price-per-day')
        .then(resp => resp.json());
}