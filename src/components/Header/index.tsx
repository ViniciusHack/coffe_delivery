import { Link } from 'react-router-dom';
import CoffeeLogo from '../../assets/coffee_logo.svg';
import { Button } from "../Button";
import { ButtonGroup, HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/"><img src={CoffeeLogo} /></Link>
      <ButtonGroup>
        <Button size="md" variant="outline" text="Porto Alegre, RS" icon={{name: 'MapPin', weight: 'fill'}} mainColor="purple" />
        <Link to="/checkout"><Button size="md" variant="outline" icon={{name: 'ShoppingCart', weight: 'fill'}} mainColor="yellow" /></Link>
      </ButtonGroup>
    </HeaderContainer>
  )
}