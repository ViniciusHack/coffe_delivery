import CoffeLogo from '../../assets/coffee-logo.svg';
import { Button } from "../Button";
import { ButtonGroup, HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeLogo} />
      <ButtonGroup>
        <Button size="md" variant="outline" text="Porto Alegre, RS" icon={{name: 'MapPin', weight: 'fill'}} mainColor="purple" />
        <Button size="md" variant="outline" icon={{name: 'ShoppingCart', weight: 'fill'}} mainColor="yellow" />
      </ButtonGroup>
    </HeaderContainer>
  )
}