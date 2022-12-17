import { forwardRef } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

import { CardWrap } from './styles';

import type { CardInterface } from './interface';

const Card = (
    {
        backgroundColor,
        children,
        footer,
        headerTitle,
        headerSubTitle,
        headerToolbar,
        noBorder = false,
        style,
    }: CardInterface,
    ref: any
) => (
    <CardWrap backgroundColor={backgroundColor} ref={ref} style={style}>
        {(headerTitle || headerToolbar) && (
            <Header
                noBorder={noBorder}
                title={headerTitle}
                subTitle={headerSubTitle}
                toolbar={headerToolbar}
            />
        )}
        <Content noBorder={noBorder}>{children}</Content>

        {footer && <Footer noBorder={noBorder}>{footer}</Footer>}
    </CardWrap>
);

export default forwardRef(Card);
