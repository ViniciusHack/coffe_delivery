import * as phosphor from 'phosphor-react'
import { AvailableIcons } from '../../@types/AvailableIcons'
import { ThemeType } from '../../@types/styles'
import { FeatureContainer, IconBox } from './styles'

interface FeatureItemProps {
  text: string[]
  icon: AvailableIcons
  color: keyof ThemeType
  boldText?: string
}

export function FeatureItem({ icon, text, color, boldText }: FeatureItemProps) {
  const DynamicIcon = phosphor[icon]

  return (
    <FeatureContainer>
      <IconBox color={color}>
        <DynamicIcon size={16} weight="fill" />
      </IconBox>
      <div>
        {text.map((line) => {
          const [splicedLine] = boldText ? line.split(boldText) : [line]

          return (
            <p key={line}>
              {splicedLine || (line !== boldText && line)}
              {<b>{splicedLine !== line && boldText}</b>}
            </p>
          )
        })}
      </div>
    </FeatureContainer>
  )
}
