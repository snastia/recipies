import styled from "styled-components"

export const Difficulty = styled.p`
  background-color: ${({difficulty}) => { return (difficulty === "Hard" ? "tomato" : "pink")}};
  height: 30px;
  width: 70px;
  border-radius: 5px;
  padding: 3px;
`

export const Item = styled.li`
  margin: 15px;
  padding: 15px;
`

export const List = styled.ul`
  display: flex; 
`

export const TitleH2 = styled.h2`
  margin: 10px;
`

export const IconPieStyled = styled("IconPie")`
  margin-right: 10px;
  padding-right: 10px;
`
export const Text = styled.p`
  margin: 7px;
  padding: 5px;

  svg {
    margin-right: 7px;
  }
`