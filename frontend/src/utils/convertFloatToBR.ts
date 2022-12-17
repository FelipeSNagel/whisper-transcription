const convertFloatToBR = (
    value?: string | number,
    precision = 2,
    prefix: string = ''
): string => {
    let newValue = value === undefined || value === '' ? 0 : value;

    let negative = false;

    if (typeof newValue === 'string') {
        newValue = parseFloat(newValue);
    }

    if (!newValue) {
        return '0';
    }

    if (newValue < 0) {
        negative = true;
        newValue *= -1;
    }

    const split = newValue.toFixed(precision).split('.');
    split[0] = split[0].split(/(?=(?:...)*$)/).join('.');

    if (negative) {
        return `- ${prefix}${split.join(',')}`;
    }

    return `${prefix}${split.join(',')}`;
};

export default convertFloatToBR;
