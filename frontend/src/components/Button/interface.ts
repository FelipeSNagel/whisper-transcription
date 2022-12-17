import { ReactNode, CSSProperties } from 'react';

export interface ButtonInterface {
    hoverEffect?: 'none' | 'rise' | 'scale' | 'rotate';
    model?: 'base' | 'light';
    isDisabled?: boolean;
    isLoading?: boolean;
    isSquare?: boolean;
    variation?:
        | 'white'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'info'
        | 'warning'
        | 'danger'
        | 'light'
        | 'dark';
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    style?: CSSProperties;
    size?: 'small' | 'normal';
    className?: string;
    id?: string;
    isFluid?: boolean;
    type?: 'submit' | 'button' | 'reset';
}
