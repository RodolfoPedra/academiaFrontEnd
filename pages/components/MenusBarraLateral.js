import React from 'react';
import style from '../../styles/MenusBarraLateral.module.css';
import { Ada, Btc } from '@styled-icons/crypto';

const MenusBarraLateral = ({ dados, index }) => {
  const [submenu, setSubmenu] = React.useState([
    'Produtos',
    'Ordens de Compra',
    'Histórico',
  ]);

  return (
    <>
      {dados.map((item, indexMenu) =>
        indexMenu === index ? (
          <>
            <a key={item} className={style.menu} href="#">
              <Ada />
              <Btc />
              <span>{item}</span>
            </a>
            {submenu.map((item, indexSubMenu) =>
              indexSubMenu === indexMenu ? (
                <ul key={item}>
                  <li>
                    <a className={style.submenu} href="#">
                      {item}
                    </a>
                  </li>
                </ul>
              ) : (
                ''
              ),
            )}
          </>
        ) : (
          ''
        ),
      )}
    </>
  );
};

export default MenusBarraLateral;
