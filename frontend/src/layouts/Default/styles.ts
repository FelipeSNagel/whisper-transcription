import styled from 'styled-components';

export const DefaultWrap = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  padding: ${(props) => props.theme.spacing[4]}
    ${(props) => props.theme.spacing[4]};

  background-color: ${(props) => props.theme.colors.base.primary};

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: ${(props) => props.theme.spacing[60]};
    height: ${(props) => props.theme.spacing[18]};
    margin-bottom: ${(props) => props.theme.spacing[4]};
  }

  main {
    padding: ${(props) => props.theme.spacing[4]};
    max-width: 800px;
    width: 100%;
  }

  footer {
    margin-top: ${(props) => props.theme.spacing[4]};

    span {
      display: block;
      margin-bottom: ${(props) => props.theme.spacing[2]};
      text-align: center;
      color: ${(props) => props.theme.colors.base.gray400};
    }
  }
`;
