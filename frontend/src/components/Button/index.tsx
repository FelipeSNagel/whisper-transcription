/* eslint-disable react/button-has-type */
import { Link } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi'

import { ButtonWrap } from './styles';

import type { ButtonInterface } from './interface';

const Button = ({
    children,
    className,
    hoverEffect = 'none',
    isDisabled = false,
    isLoading = false,
    isSquare = false,
    href,
    id,
    model = 'base',
    onClick,
    size = 'normal',
    style,
    variation = 'primary',
    isFluid = false,
    type = 'button',
}: ButtonInterface) => {
    if (href) {
        return (
            <ButtonWrap
                hoverEffect={hoverEffect}
                model={model}
                variation={variation}
                style={style}
                isFluid={isFluid}
                isSquare={isSquare}
                size={size}
            >
                <Link to={href} className={className} id={id}>
                    {isLoading ? <FiLoader /> : children}
                </Link>
            </ButtonWrap>
        );
    }

    return (
        <ButtonWrap
            hoverEffect={hoverEffect}
            model={model}
            variation={variation}
            style={style}
            isFluid={isFluid}
            isSquare={isSquare}
            size={size}
        >
            <button
                className={className}
                id={id}
                onClick={isDisabled ? () => null : onClick}
                type={type}
                disabled={isDisabled}
            >
                {isLoading ? <FiLoader /> : children}
            </button>
        </ButtonWrap>
    );
};
export default Button;
