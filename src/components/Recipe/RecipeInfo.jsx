import PropTypes from 'prop-types';
import { Recipe } from ".//Recipe.jsx"

export function RecipeInfo({name, time, serving, calories, img, difficulty, iconTime: IconTime, iconCalories: IconCalories, iconPie: IconPie}) {
    return(
      <li>
        <img width="300" src={img} alt={name} />
        <h2>Назва блюда: {name}</h2>
        <p><IconPie />Кількість порцій: {serving}</p>
        <p><IconTime /> Час приготування: {time} хв</p>
        <p><IconCalories />Кількість калорій: {calories} ккал</p>
        <p>Складність приготування: {difficulty}</p>
      </li>
    )
}

RecipeInfo.propTypes = {
	name: PropTypes.string,
	time: PropTypes.string,
	servings: PropTypes.number,
	calories: PropTypes.number,
	difficulty: PropTypes.number,
	image: PropTypes.string
}