import { responsivator } from 'helpers';
import styled from 'styled-components';

export const HomeWrap = styled.div`
  audio {
    width: 100%;
  }

  .buttons-model {
    .title {
      font-size: ${props => props.theme.fontSizes['7']};
      display: block;
      margin-top: ${props => props.theme.spacing[4]};
      margin-bottom: ${props => props.theme.spacing[2]};
    }

    button {
      margin-right: ${props => props.theme.spacing[3]};
    }
  }
`;

export const RowColumns = styled.div`
  display: flex;
  flex-direction: row;

  ${responsivator([
  `flex-direction: row`,
  `flex-direction: row`,
  `flex-direction: row`,
  `flex-direction: row`,
  `flex-direction: column`,
])}
  width: 100%;

  > div {
    width: 100%;
    flex: 1;

    ${responsivator([
  `margin-bottom: 0;`,
  `margin-bottom: 0;`,
  `margin-bottom: 0;`,
  `margin-bottom: 0;`,
  `margin-bottom: 1rem`,
])}
  }

  > div:first-child {
    margin-right: 1rem;
  }
`

export const MicrophoneWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  svg {
    font-size: ${props => props.theme.fontSizes['1']};
    color: ${props => props.theme.colors.base.danger};

    animation-name: pulse;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-play-state: running;
  }
`;

export const CardRecordFooter = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


export const ResultWrap = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .content {

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;

    
    h2 {
      font-size: ${props => props.theme.fontSizes['6']};
      font-weight: 300;

      strong {
        color: ${props => props.theme.colors.base.primary};
        text-transform: capitalize;
      }
    }
  
    h3 {
      font-size: ${props => props.theme.fontSizes['2hx']};
      line-height: 110%;
      font-weight: 300;
    }

    h4 {
      line-height: 105%;
      font-size: ${props => props.theme.fontSizes['8']};
      font-weight: 300;

      strong {
        color: ${props => props.theme.colors.base.gray900};
      }
    }
    
    h5 {
      font-size: ${props => props.theme.fontSizes['8']};
      margin-bottom: ${props => props.theme.spacing['4']};
      font-weight: 300;


      strong {
        color: ${props => props.theme.colors.base.gray900};
      }
    }
}

  img {
    height: auto;
    width: 50%;
  }

  .shake {
    animation-name: shake;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-play-state: running;
  }
`

export const WrapTranscriptions = styled.div``;
