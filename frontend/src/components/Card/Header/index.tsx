import { CardHeaderWrap } from './styles';

import type { CardHeaderInterface } from './interface';

const CardHeader = ({
    noBorder,
    title,
    subTitle,
    toolbar,
}: CardHeaderInterface) => (
    <CardHeaderWrap noBorder={noBorder} haveSubTitle={!!subTitle}>
        <div className="card-titles">
            <h3 className="card-title">{title}</h3>
            <h4 className="card-sub-title">{subTitle}</h4>
        </div>

        {toolbar && <div className="card-toolbar">{toolbar}</div>}
    </CardHeaderWrap>
);

export default CardHeader;
