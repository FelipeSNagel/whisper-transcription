import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

export interface CardInterface {
    headerTitle?: string;
    headerSubTitle?: string;
    headerToolbar?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    noBorder?: boolean;
    backgroundColor?: string;
    style?: CSSProperties;
}
