const convertToCurrency = (
    number: number,
    locale: string,
    currency: string
): string | undefined => {

    if (locale && currency)
    
        try {
            return number.toLocaleString(
                locale, { style: 'currency', currency: 'BRL' }
            );
        } catch (e) {
            throw new Error(String(e));
        }

    else
        throw new Error("Currency expects a locale and currency string");
};

export default convertToCurrency;