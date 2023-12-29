import PropTypes from 'prop-types';
import { Recipe } from ".//Recipe.jsx"
import { Difficulty, Item, TitleH2, Text } from './Recipe.styled.jsx';

export function RecipeInfo({name, time, serving, calories, img, difficulty, iconTime: IconTime, iconCalories: IconCalories, iconPie: IconPie}) {
    return(
      <Item>
        <img width="300" src={img} alt={name} />
        <TitleH2>Назва блюда: {name}</TitleH2>
        <Text><IconPie />Кількість порцій: {serving}</Text>
        <Text><IconTime /> Час приготування: {time} хв</Text>
        <Text><IconCalories />Кількість калорій: {calories} ккал</Text>
        <Difficulty difficulty={difficulty}>{difficulty}</Difficulty>
      </Item>
    )
}

RecipeInfo.propTypes = {
	name: PropTypes.string,
	time: PropTypes.string,
	servings: PropTypes.number,
	calories: PropTypes.number,
	difficulty: PropTypes.string,
	image: PropTypes.string
}