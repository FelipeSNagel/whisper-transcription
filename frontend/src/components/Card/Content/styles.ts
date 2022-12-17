import styled from 'styled-components';

import type { CardContentInterface } from './interface';

interface CardContentWrapInterface
  extends Pick<CardContentInterface, 'noBorder'> {}

export const CardContentWrap = styled.div<CardContentWrapInterface>`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  word-wrap: break-word;

  padding: ${(props) => props.theme.spacing[8]}
    ${(props) => props.theme.spacing[9]};

  padding-top: ${(props) => (props.noBorder ? 0 : props.theme.spacing[8])};

  color: ${(props) => props.theme.colors.text.gray700};
  font-size: ${(props) => props.theme.fontSizes[6]};
  line-height: 160%;

  strong {
    font-weight: 700;
  }
`;
