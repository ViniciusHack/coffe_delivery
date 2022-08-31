import { Link } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';
import CoffeeLogo from '../../assets/coffee_logo.svg';
import { CartContext } from '../../contexts/CartContext';
import { Button } from "../Button";
import { ButtonGroup, CartButtonContainer, CartItemQuantityIndicator, HeaderContainer } from "./styles";

export function Header() {
  const cartItemsQuantity  = useContextSelector(CartContext, (context) => {
    return context.cartItemsQuantity
  })

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={CoffeeLogo} />
      </Link>
      <ButtonGroup>
        <Button
          size="md"
          variant="outline"
          text="Porto Alegre, RS"
          icon={{ name: 'MapPin', weight: 'fill' }}
          mainColor="purple"
        />
        
        <Link to="/checkout">
          <CartButtonContainer>
            <Button
              size="md"
              variant="outline"
              icon={{ name: 'ShoppingCart', weight: 'fill'}}
              mainColor="yellow"
            />
            <CartItemQuantityIndicator>
              <span>{cartItemsQuantity}</span>
            </CartItemQuantityIndicator>
          </CartButtonContainer>
        </Link>
      </ButtonGroup>
    </HeaderContainer>
  )
}