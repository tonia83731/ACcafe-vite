import { ReactComponent as Beer } from "../../assets/icon/menu/beer.svg";
import { ReactComponent as Cocktail } from "../../assets/icon/menu/cocktail.svg";
import { ReactComponent as ColdDrink } from "../../assets/icon/menu/cold_drink.svg";
import { ReactComponent as Food } from "../../assets/icon/menu/food.svg";
import { ReactComponent as HotDrink } from "../../assets/icon/menu/hot_drink.svg";
import { ReactComponent as Soup } from "../../assets/icon/menu/soup.svg";


export default function ProductIcon({prop}) {
  // const unit = prop.unit
  if(prop === 'Food'){
    return <Food/>
  } else if (prop === 'ColdDrink') {
    return <ColdDrink/>
  } else if (prop === 'HotDrink') {
    return <HotDrink/>
  } else if (prop === 'Cocktail') {
    return <Cocktail/>
  } else if (prop === 'Beer') {
    return <Beer/>
  } else if (prop === 'Soup') {
    return <Soup/>
  }
}