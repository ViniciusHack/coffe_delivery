import { Button } from "../Button";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <h1>Header</h1>
      <Button size="lg" variant="outline" text="Porto Alegre, RS" icon={{name: 'MapPin', weight: 'fill'}} mainColor="purple" />
    </HeaderContainer>
  )
}