const convertToCurrency = (number: number, currency: string): string | undefined => {
    if (currency === "brl")
        return number.toLocaleString(
            'pt-br', { style: 'currency', currency: 'BRL' }
        )

    else if (currency === "usd")
        return number.toLocaleString(
            'en-us', { style: 'currency', currency: 'USD' }
        )

    else 
        throw new Error("Currency expects a currency string");
}

export default convertToCurrency