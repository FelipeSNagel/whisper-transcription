import styled, { css } from 'styled-components';

import { responsivator } from 'helpers';

import type { CardHeaderInterface } from './interface';

interface CardHeaderWrapInterface
    extends Pick<CardHeaderInterface, 'noBorder'> {
    haveSubTitle: boolean;
}

const haveSubTitleStyle = css`
    .card-title {
        font-size: ${(props) => props.theme.fontSizes[4]};
        margin-top: 0;
        margin-bottom: ${(props) => props.theme.spacing[1]};
        font-weight: 700;
    }

    .card-sub-title {
        color: ${(props) => props.theme.colors.text.muted};
        font-size: ${(props) => props.theme.fontSizes[7]};
    }
`;

export const CardHeaderWrap = styled.div<CardHeaderWrapInterface>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    min-height: ${(props) => props.theme.spacing[20]};

    ${(props) =>
        responsivator([
            `padding: 0 ${props.theme.spacing[9]}`,
            `padding: 0 ${props.theme.spacing[9]}`,
            `padding: 0 ${props.theme.spacing[9]}`,
            `padding: 0 ${props.theme.spacing[9]}`,
            `padding: ${props.theme.spacing[9]}`,
        ])}
    background-color: transparent;
    border-bottom: ${(props) =>
            props.noBorder ? 0 : props.theme.borderSize.default}
        solid ${(props) => props.theme.colors.base.gray200};

    .card-titles {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .card-title {
            display: flex;
            align-items: center;
            margin: ${(props) => props.theme.spacing[2]};
            margin-left: 0;

            font-size: ${(props) => props.theme.fontSizes[3]};
            font-weight: 400;
            color: ${(props) => props.theme.colors.text.dark};
        }

        ${(props) => props.haveSubTitle && haveSubTitleStyle}
    }

    .card-toolbar {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        ${(props) =>
            responsivator([
                `margin: ${props.theme.spacing[2]} 0`,
                `margin: ${props.theme.spacing[2]} 0`,
                `margin: ${props.theme.spacing[2]} 0`,
                `margin: ${props.theme.spacing[2]} 0`,
                `margin: ${props.theme.spacing[7]} 0 0 0`,
            ])}
    }
`;
