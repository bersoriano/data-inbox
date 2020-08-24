import moment from 'moment';

function formatNumber(number) {
    return Math.floor(number)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function currencyFormatter(params) {
    return '$' + formatNumber(params.value) +".00";
}

export function dateFormatter (params) {
    return moment(params).format('MMMM DD, YYYY'); 
}