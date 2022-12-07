const convertToUsd = (number: number): string => {
    return number.toLocaleString(
        'en-us', { style: 'currency', currency: 'USD' }
    )
}

export default convertToUsd