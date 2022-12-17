import checkEmpty from './checkEmpty';

export default function maskCellphone(value: string): string {
    if (checkEmpty(value)) {
        return '';
    }

    let newValue = value;

    newValue = newValue.replace(/\D/g, '');
    newValue = newValue.replace(/^(\d)/, '($1');
    newValue = newValue.replace(/(.{3})(\d)/, '$1) $2');

    if (newValue.length === 9) {
        newValue = newValue.replace(/(.{1})$/, '-$1');
    } else if (newValue.length === 10) {
        newValue = newValue.replace(/(.{2})$/, '-$1');
    } else if (newValue.length === 11) {
        newValue = newValue.replace(/(.{3})$/, '-$1');
    } else if (newValue.length === 12) {
        newValue = newValue.replace(/(.{4})$/, '-$1');
    } else if (newValue.length > 12) {
        newValue = newValue.replace(/(.{4})$/, '-$1');
    }

    return newValue;
}
