import { Recipe } from "./Recipe"

export function RecipeInfo({name, time, serving, colories, image, difficulty}) {
    return(
      <li>
        <img src={image} alt={name} />
        <h2>Назва блюда: {name}</h2>
        <p>Кількість порцій: {serving}</p>
        <p>Час приготування: {time} хв</p>
        <p>Кількість калорій: {colories} ккал</p>
        <p>Складність приготування: {difficulty}</p>
      </li>
    )
}

Recipe.propTypes = {

}




// Recipe - recipe: array
//  RecipeInfo - name: string; 
//               icon: element;
//               time: string;
//               servings: number;
//               calories: number;
//               img: string;
//               difficulty: number;