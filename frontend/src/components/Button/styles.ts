import styled, { css } from 'styled-components';

import type { ButtonInterface } from './interface';

interface ButtonWrapInterface
    extends Pick<
        ButtonInterface,
        'variation' | 'size' | 'model' | 'hoverEffect' | 'isFluid' | 'isSquare'
    > {}

const base = {
    primary: css`
        color: ${(props) => props.theme.colors.text.white};
        background-color: ${(props) => props.theme.colors.base.primary};

        svg {
            fill: ${(props) => props.theme.colors.text.white};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.active.primary};
        }
    `,
    secondary: css`
        color: ${(props) => props.theme.colors.base.primary};
        background-color: ${(props) => props.theme.colors.base.secondary};

        svg {
            fill: ${(props) => props.theme.colors.base.primary};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.active.secondary};
        }
    `,
    white: css`
        color: ${(props) => props.theme.colors.text.primary};
        background-color: ${(props) => props.theme.colors.base.white};

        svg {
            fill: ${(props) => props.theme.colors.text.primary};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.active.white};
        }
    `,
    light: css`
        color: ${(props) => props.theme.colors.text.primary};
        background-color: ${(props) => props.theme.colors.base.light};

        svg {
            fill: ${(props) => props.theme.colors.text.primary};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.active.light};
        }
    `,
    dark: css`
        color: ${(props) => props.theme.colors.text.white};
        background-color: ${(props) => props.theme.colors.base.dark};

        svg {
            fill: ${(props) => props.theme.colors.text.white};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.active.dark};
        }
    `,
    info: css`
        color: ${(props) => props.theme.colors.text.white};
        background-color: ${(props) => props.theme.colors.base.info};

        svg {
            fill: ${(props) => props.theme.colors.text.info};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.active.info};
        }
    `,
    success: css`
        color: ${(props) => props.theme.colors.text.white};
        background-color: ${(props) => props.theme.colors.base.success};

        svg {
            fill: ${(props) => props.theme.colors.text.success};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.active.success};
        }
    `,
    warning: css`
        color: ${(props) => props.theme.colors.text.white};
        background-color: ${(props) => props.theme.colors.base.warning};

        svg {
            fill: ${(props) => props.theme.colors.text.warning};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.active.warning};
        }
    `,
    danger: css`
        color: ${(props) => props.theme.colors.text.white};
        background-color: ${(props) => props.theme.colors.base.danger};

        svg {
            fill: ${(props) => props.theme.colors.text.white};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.active.danger};
        }
    `,
};

const light = {
    primary: css`
        color: ${(props) => props.theme.colors.base.primary};
        background-color: ${(props) => props.theme.colors.light.primary};

        svg {
            fill: ${(props) => props.theme.colors.base.primary};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.active.primary};
            color: ${(props) => props.theme.colors.text.white};
            svg {
                fill: ${(props) => props.theme.colors.text.white};
            }
        }
    `,
    secondary: css`
        color: ${(props) => props.theme.colors.base.secondary};
        background-color: ${(props) => props.theme.colors.light.secondary};

        svg {
            fill: ${(props) => props.theme.colors.base.secondary};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.base.secondary};
            color: ${(props) => props.theme.colors.text.white};
            svg {
                fill: ${(props) => props.theme.colors.text.white};
            }
        }
    `,
    white: css`
        color: ${(props) => props.theme.colors.text.primary};
        background-color: ${(props) => props.theme.colors.light.white};

        svg {
            fill: ${(props) => props.theme.colors.text.primary};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.active.white};
        }
    `,
    light: css`
        color: ${(props) => props.theme.colors.text.primary};
        background-color: ${(props) => props.theme.colors.light.light};

        svg {
            fill: ${(props) => props.theme.colors.text.primary};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.active.light};
        }
    `,
    dark: css`
        color: ${(props) => props.theme.colors.base.dark};
        background-color: ${(props) => props.theme.colors.light.dark};

        svg {
            fill: ${(props) => props.theme.colors.base.dark};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.base.dark};
            color: ${(props) => props.theme.colors.text.white};
            svg {
                fill: ${(props) => props.theme.colors.text.white};
            }
        }
    `,
    info: css`
        color: ${(props) => props.theme.colors.base.info};
        background-color: ${(props) => props.theme.colors.light.info};

        svg {
            fill: ${(props) => props.theme.colors.base.info};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.base.info};
            color: ${(props) => props.theme.colors.text.white};
            svg {
                fill: ${(props) => props.theme.colors.text.white};
            }
        }
    `,
    success: css`
        color: ${(props) => props.theme.colors.active.success};
        background-color: ${(props) => props.theme.colors.light.success};

        svg {
            fill: ${(props) => props.theme.colors.active.success};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.base.success};
            color: ${(props) => props.theme.colors.text.white};
            svg {
                fill: ${(props) => props.theme.colors.text.white};
            }
        }
    `,
    warning: css`
        color: ${(props) => props.theme.colors.base.warning};
        background-color: ${(props) => props.theme.colors.light.warning};

        svg {
            fill: ${(props) => props.theme.colors.base.warning};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.base.warning};
            color: ${(props) => props.theme.colors.text.white};
            svg {
                fill: ${(props) => props.theme.colors.text.white};
            }
        }
    `,
    danger: css`
        color: ${(props) => props.theme.colors.base.danger};
        background-color: ${(props) => props.theme.colors.light.danger};

        svg {
            fill: ${(props) => props.theme.colors.base.danger};
        }

        &:hover,
        &.active {
            background-color: ${(props) => props.theme.colors.base.danger};
            color: ${(props) => props.theme.colors.text.white};
            svg {
                fill: ${(props) => props.theme.colors.text.white};
            }
        }
    `,
};

const model = {
    base,
    light,
};

const hoverEffects = {
    none: css``,
    rise: css`
        &:hover,
        &.active {
            transform: translateY(-10%);
            transition: transform 0.3s ease;
        }
    `,
    scale: css`
        &:hover,
        &.active {
            transform: scale(1.1);
            transition: transform 0.3s ease;
        }
    `,
    rotate: css`
        &:hover,
        &.active {
            transform: rotate(4deg);
            transition: transform 0.3s ease;
        }
    `,
};

const sizes = {
    small: css<ButtonWrapInterface>`
        button,
        a {
            padding: ${(props) => props.theme.spacing[1]}
                ${(props) =>
                    props.isSquare
                        ? props.theme.spacing[1]
                        : props.theme.spacing[2]};
            font-size: ${(props) => props.theme.fontSizes[9]};
        }
    `,
    normal: css<ButtonWrapInterface>`
        button,
        a {
            padding: ${(props) => props.theme.spacing[3]}
                ${(props) =>
                    props.isSquare
                        ? props.theme.spacing[3]
                        : props.theme.spacing[6]};
            font-size: ${(props) => props.theme.fontSizes[6]};
            min-height: 3.11rem;
        }
    `,
};

export const ButtonWrap = styled.div<ButtonWrapInterface>`
    display: inline-flex;

    ${(props) =>
        props.isFluid &&
        css`
            display: flex;
            button,
            a {
                width: 100%;
                text-align: center;
                justify-content: center;
            }
        `}

    button,
    a {
        display: inline-flex;
        align-items: center;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        border: 0;

        border-radius: ${(props) => props.theme.borderRadius.default};
        transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
            border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        box-shadow: none !important;
        text-decoration: none;

        ${(props) =>
            model[props.model || 'base'][props.variation || 'primary']};
        ${(props) => hoverEffects[props.hoverEffect || 'none']};
    }

    ${(props) => sizes[props.size || 'normal']}
`;
