import  recepiec  from "./recepiec.json"
import { Recipe } from "./Recipe/Recipe";

export function App () {
  return (
    <>
     <Recipe recipe={recepiec}/>
    </>
  );
};
