import checkEmpty from './checkEmpty';

export default function justNumber(value: string): string {
    if (checkEmpty(value)) {
        return '';
    }

    return value.replace(/[^0-9]/g, '');
}
