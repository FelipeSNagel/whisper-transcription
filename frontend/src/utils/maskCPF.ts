import checkEmpty from './checkEmpty';

export default function maskCPF(value: string): string {
    if (checkEmpty(value)) {
        return '';
    }
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}
