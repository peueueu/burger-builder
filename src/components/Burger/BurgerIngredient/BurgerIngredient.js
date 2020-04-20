import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const burgerIngredient = props => {
  let ingredient = null;
  switch (props.type) {
    case ('bread-bottom'):
      ingredient = <S.BreadBottom></S.BreadBottom>;
      break;
    case ('bread-top'):
      ingredient = (
        <S.BreadTop>
          <S.Seeds1 />
          <S.Seeds2 />
        </S.BreadTop>
      );
      break;
    case ('meat'):
      ingredient = <S.Meat />
      break;
    case ('salad'):
      ingredient = <S.Salad />
      break;
    case ('cheese'):
      ingredient = <S.Cheese />
      break;
    case ('bacon'):
      ingredient = <S.Bacon />
      break;
    default:
      ingredient = null;
  }
  return ingredient;

};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default burgerIngredient;