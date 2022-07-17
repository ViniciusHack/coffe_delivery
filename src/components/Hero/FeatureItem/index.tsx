import * as phosphor from 'phosphor-react';
import { AvailableIcons } from "../../../@types/AvailableIcons";
import { ThemeType } from '../../../@types/styles';
import { FeatureContainer, IconBox } from "./styles";

interface FeatureItemProps {
  text: string;
  icon: AvailableIcons;
  color: keyof ThemeType;
}

export function FeatureItem({ icon, text, color }: FeatureItemProps) {
  const DynamicIcon = phosphor[icon]

  return (
    <FeatureContainer>
      <IconBox color={color}>
        <DynamicIcon size={16} weight="fill"/>
      </IconBox>
      <span>{text}</span>
    </FeatureContainer>
  )
}