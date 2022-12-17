import styled from 'styled-components';

import type { CardFooterInterface } from './interface';

interface CardFooterWrapInterface
    extends Pick<CardFooterInterface, 'noBorder'> {}

export const CardFooterWrap = styled.div<CardFooterWrapInterface>`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: ${(props) => props.theme.spacing[8]}
        ${(props) => props.theme.spacing[9]};

    padding-top: ${(props) => (props.noBorder ? 0 : props.theme.spacing[8])};
    border-top: ${(props) =>
            props.noBorder ? 0 : props.theme.borderSize.default}
        solid ${(props) => props.theme.colors.base.gray200};
`;
