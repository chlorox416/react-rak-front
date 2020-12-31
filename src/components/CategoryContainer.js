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
      {/* <form>
        <input value="Seach here" /> <br></br>
      </form> */}

      <div className="list"> {renderKindnesses()}</div>
    </>
  );
};

export default CategoryContainer;
