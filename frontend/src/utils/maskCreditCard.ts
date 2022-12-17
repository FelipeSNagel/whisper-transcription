import checkEmpty from './checkEmpty';

export default function maskCreditCard(value: string): string {
    if (checkEmpty(value)) {
        return '';
    }

    let newValue = value;
    newValue = newValue.replace(/\D/g, '');
    newValue = newValue.replace(/(\d{4})(\d)/, '$1 $2');
    newValue = newValue.replace(/(\d{4})(\d)/, '$1 $2');
    newValue = newValue.replace(/(\d{4})(\d)/, '$1 $2');
    newValue = newValue.replace(/(\d{4})(\d)/, '$1 $2');

    return newValue;
}
