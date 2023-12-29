import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { RecipeInfo } from "./RecipeInfo";
import { List } from "./Recipe.styled.jsx"

export function Recipe ({recipe}) {
    return(
        <List>
           {recipe.map(({name, time, servings, calories, image, difficulty}) => {
            return <RecipeInfo 
            key={name}
            name={name}
            time={time}
            serving={servings}
            calories={calories}
            img={image}
            difficulty={difficulty}
            iconTime={BsAlarm}
            iconCalories={HiOutlineChartBar}
            iconPie={HiOutlineChartPie}
            />
           })}
        </List>
    )
}

Recipe.propTypes = {
    recipe: PropTypes.array,
}