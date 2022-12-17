/* eslint-disable */
import { format } from 'date-fns-tz';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
/* eslint-enable */

export const convertDateENToBR = (value?: string | Date): string => {
    if (!value || value === undefined) {
        return '';
    }

    if (value instanceof Date) {
        return format(value, 'dd/MM/y', {
            timeZone: 'America/Sao_Paulo',
            locale: pt,
        });
    }

    return format(parseISO(value), 'dd/MM/y', {
        timeZone: 'America/Sao_Paulo',
        locale: pt,
    });
};

export const distanceToNow = (value: string): string => {
    if (!value) {
        return 'Data inválida';
    }

    return formatDistance(parseISO(value), new Date(), {
        addSuffix: true,
        locale: pt,
    });
};
