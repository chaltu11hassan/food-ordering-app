import React, { Fragment } from "react";

import MealsSummary from "./MealsSummary";

import AvaialableMeals from "./AvaialableMeals";

const Meals = () => {
    
  return (
    <Fragment>
      <MealsSummary />
      <AvaialableMeals />
    </Fragment>
  );
};

export default Meals;
