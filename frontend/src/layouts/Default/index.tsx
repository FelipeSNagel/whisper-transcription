import logoUffs from 'assets/logoUFFS.png';
import { DefaultWrap } from './styles';

import type { LayoutDefaultInterface } from './interface';

const DefaultLayout = ({ children }: LayoutDefaultInterface) => {
  return (
    <DefaultWrap>
      <img
        className="logo"
        src={logoUffs}
        alt="chamas brancas com a escrita universidade federal da fronteira sul,  logo da universidade"
      />
      <main>{children}</main>

      <footer>
        <span>Discentes: Danubia W. Bueno e Felipe S. Nagel</span>
        <span>
        Trabalho de Redes Neurais Artificiais
        </span>
        <span>
          Inteligência Artificial - Noturno 2022/2 - Docente. Dr. Felipe Grando{' '}
        </span>
      </footer>
    </DefaultWrap>
  );
};

export default DefaultLayout;
