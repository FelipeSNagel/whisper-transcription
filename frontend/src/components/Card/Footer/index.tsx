import { CardFooterWrap } from './styles';

import type { CardFooterInterface } from './interface';

const CardFooter = ({ children, noBorder }: CardFooterInterface) => (
    <CardFooterWrap noBorder={noBorder}>{children}</CardFooterWrap>
);

export default CardFooter;
