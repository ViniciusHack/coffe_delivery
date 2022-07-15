import * as phosphor from 'phosphor-react';
import { AvailableIcons } from "../../@types/AvailableIcons";
import { ButtonStyle } from "./styles";

interface ButtonProps {
  text?: string;
  icon?: {
    name: AvailableIcons;
    weight: 'bold' | 'fill' | 'regular'
  }
  variant: 'default' | 'base' | 'outline',
  size: 'sm' | 'md' | 'lg'
  mainColor: 'yellow' | 'purple' 
}

const iconSize = {
  sm: '16',
  md: '22',
  lg: '22'
}

export function Button({ text, variant, icon, size, mainColor }: ButtonProps) {
  const DynamicIcon = icon ? phosphor[icon.name] : null

  return (
    <ButtonStyle variant={variant} size={size} mainColor={mainColor}>
      {DynamicIcon && <DynamicIcon weight={icon!.weight} size={iconSize[size]}/>}
      {text}
    </ButtonStyle>
  )
}