import  recepiec  from "./recepiec"
import { Recipe } from "./Recipe/Recipe";
import { GlobalStyle } from "./GlobalStyle.styled";

export function App () {
  return (
    <>
     <Recipe recipe={recepiec}/>
     <GlobalStyle/>
    </>
  );
};
