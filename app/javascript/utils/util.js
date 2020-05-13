export default {
    formatCurrency: function (price) {
        return Number(price.toFixed(2)).toLocaleString();
    }
}
