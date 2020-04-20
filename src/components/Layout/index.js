import React from 'react';
import * as S from './styled'
import Aux from '../hoc/Auxiliary';


const Layout = (props) => (
  <Aux>
    <div></div>
    <S.styledMain>
      {props.children}
    </S.styledMain>
  </Aux>
)

export default Layout;