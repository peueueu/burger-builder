import React from "react";
import * as S from "./styled";
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {

  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    });

  return (
    <S.Burger>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </S.Burger>
  )
}

export default burger;