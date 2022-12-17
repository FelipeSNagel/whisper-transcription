import { CardContentWrap } from './styles';

import type { CardContentInterface } from './interface';

const CardContent = ({ children, noBorder }: CardContentInterface) => (
    <CardContentWrap noBorder={noBorder}>{children}</CardContentWrap>
);

export default CardContent;
