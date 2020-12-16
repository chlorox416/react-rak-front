import React from 'react'
import CategoryCard from './CategoryCard'


export const CategoryContainer = (props) => {
    console.log("here", props)
    const renderKindnesses = () => {
        return props.kindnessArray.map(kindnessObj => <CategoryCard key={kindnessObj.id} kindnessObj={kindnessObj}/>)
    }


    return (
        <>
        <form>
            <input/>
        </form>
        <div className="list"> {renderKindnesses()}</div>
        </>
    )
}

export default CategoryContainer;