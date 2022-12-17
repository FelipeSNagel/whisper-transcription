import styled from 'styled-components';

import type { CardInterface } from './interface';

interface CardWrapInterface extends Pick<CardInterface, 'backgroundColor'> {}

export const CardWrap = styled.div<CardWrapInterface>`
    position: relative;
    display: flex;

    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: ${(props) =>
        props.backgroundColor
            ? props.backgroundColor
            : props.theme.colors.base.white};
    background-clip: border-box;
    border-radius: ${(props) => props.theme.borderRadius.large};
    border: 0;
    box-shadow: 0px 0px 20px 0px ${(props) => props.theme.colors.shadow.small};
`;
