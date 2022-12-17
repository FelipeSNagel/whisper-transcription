import { ReactNode } from 'react';

export interface CardHeaderInterface {
    title: ReactNode;
    subTitle?: ReactNode;
    toolbar?: ReactNode;
    noBorder: boolean;
}
