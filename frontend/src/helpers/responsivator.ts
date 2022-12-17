import { css } from 'styled-components';

const breakpoints = [1400, 1200, 992, 768, 576, 575];

export const transformValuesInStyles = (
    values?: string | string[] | number | number[],
    style?: string
) => {
    if (!values || !style) {
        return '';
    }

    if (typeof values === 'string' || typeof values === 'number') {
        return style.replace('{{value}}', String(values));
    }

    return values.map((value) => style.replace('{{value}}', String(value)));
};

export const responsivator = (values: string | string[]) => {
    const newValues: Record<number, string> = {};

    if (typeof values === 'string') {
        return values;
    }

    let lastValueDefined = '';

    breakpoints.forEach((breakpoint, index) => {
        if (values[index]) {
            lastValueDefined = values[index];
            newValues[breakpoint] = values[index];
        } else {
            newValues[breakpoint] = lastValueDefined;
        }
    });

    return css`
        ${newValues[breakpoints[5]]};

        @media (min-width: 576px) {
            ${newValues[breakpoints[4]]};
        }

        @media (min-width: 768px) {
            ${newValues[breakpoints[3]]};
        }

        @media (min-width: 992px) {
            ${newValues[breakpoints[2]]};
        }

        @media (min-width: 1200px) {
            ${newValues[breakpoints[1]]};
        }

        @media (min-width: 1400px) {
            ${newValues[breakpoints[0]]};
        }
    `;
};
