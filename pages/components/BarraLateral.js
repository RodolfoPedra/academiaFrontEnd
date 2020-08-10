import React from 'react';
import style from '../../styles/BarraLateral.module.css';
import MenusBarraLateral from './MenusBarraLateral';

const BarraLateral = () => {
  const [dados, setDados] = React.useState([
    'Dashboard',
    'Ecommerce',
    'Crypto',
  ]);
  const [categorias, setCategorias] = React.useState(['Menu', 'APPS', 'PAGES']);

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <h2>Logo e Empresa</h2>
      </div>
      <section className={style.barraItens}>
        <ul>
          {categorias.map((categoria, index) => (
            <>
              <li className={style.categoria} key={categoria}>
                {categoria}
              </li>
              <li className={style.menus}>
                <MenusBarraLateral
                  dados={dados}
                  index={index}
                ></MenusBarraLateral>
              </li>
            </>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default BarraLateral;
