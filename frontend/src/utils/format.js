/**
 * Formats a integer price into a price with decimals with a preceding $ sign.
 * @params {string} - priceWithDecimals Integer representation of price.
 */


export const formatPrice = (priceWidthDecimal) => {
    const realPrice = parseInt(priceWidthDecimal) / 100 
    return realPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

(2500).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
}) /* $2,500.00 */