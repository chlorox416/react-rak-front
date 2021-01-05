import React from "react";
import CategoryCard from "./CategoryCard";
import { Card, Divider } from "semantic-ui-react";

const CategoryContainer = (props) => {
  const renderKindnesses = () => {
    return props.kindnessArray.map((kindnessObj) => (
      <CategoryCard
        key={kindnessObj.id}
        kindnessObj={kindnessObj}
        removeHandler={props.removeHandler}
        createUserKindness={props.createUserKindness}
      />
    ));
  };
  console.log(props.kindnessArray);

  return (
    <>
      <Divider horizontal>RAKs</Divider>

      {/* <div class="ui container" className="list"> {renderKindnesses()}</div> */}
      <Card.Group itemsPerRow={4}>{renderKindnesses()}</Card.Group>
    </>
  );
};

export default CategoryContainer;
