import * as phosphor from 'phosphor-react';
import { AvailableIcons } from "../../@types/AvailableIcons";
import { ThemeType } from '../../@types/styles';
import { FeatureContainer, IconBox } from "./styles";

interface FeatureItemProps {
  text: string[];
  icon: AvailableIcons;
  color: keyof ThemeType;
  boldText?: string;
}

export function FeatureItem({ icon, text, color, boldText }: FeatureItemProps) {
  const DynamicIcon = phosphor[icon]
  console.log({boldText})

  return (
    <FeatureContainer>
      <IconBox color={color}>
        <DynamicIcon size={16} weight="fill"/>
      </IconBox>
      <div>
        {text.map(line => {
          const [splicedLine, bold] = boldText ? line.split(boldText) : [];
          console.log(boldText, bold, splicedLine, line)
          
        return (
          <p>{splicedLine ? splicedLine : line}{<b>1{bold}</b>}</p>
        )})}
      </div>
    </FeatureContainer>
  )
}