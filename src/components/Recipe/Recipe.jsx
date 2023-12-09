import { RecipeInfo } from "./RecipeInfo";

export function Recipe ({recipe}) {
    return(
        <ul>
           {recipe.map(({name, time, serving, colories, image, difficulty}) => {
            return <RecipeInfo 
            key={name}
            name={name}
            time={time}
            serving={serving}
            colories={colories}
            img={image}
            difficulty={difficulty}
            />
           })}
        </ul>
    )
}