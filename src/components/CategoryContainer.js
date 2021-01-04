import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryContainer = (props) => {
  const renderKindnesses = () => {
    return props.kindnessArray.map((kindnessObj) => (
      <CategoryCard
        key={kindnessObj.id}
        kindnessObj={kindnessObj}
        removeHandler={props.removeHandler}
      />
    ));
  };
  console.log(props.kindnessArray);
  
  
  return (
    <>
  
      <div class="ui divider"></div>
      <div class="ui container" className="list"> {renderKindnesses()}</div>
    </>
  );
};

export default CategoryContainer;
