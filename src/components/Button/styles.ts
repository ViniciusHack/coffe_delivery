import styled from 'styled-components'

interface ButtonStyleProps {
  variant: 'default' | 'base' | 'outline'
  size: 'sm' | 'md' | 'lg'
  mainColor: 'yellow' | 'purple'
}

const buttonSizes = {
  sm: {
    height: '2rem',
    'font-size': '0.75rem',
  },
  md: {
    height: '2.375rem',
    'font-size': '0.875rem',
  },
  lg: {
    height: '2.875rem',
    'font-size': '0.875rem',
  },
}

const buttonVariants = {
  default: {
    'text-decoration': 'uppercase',
    'font-weight': '700',
    yellow: {
      bg: 'primary-400',
      icon: 'base-0',
      text: 'base-0',
      hover: {
        bg: 'primary-700',
        icon: 'base-0',
        text: 'base-0',
      },
    },
    purple: {
      bg: 'secondary-400',
      icon: 'base-0',
      text: 'base-0',
      hover: {
        bg: 'secondary-700',
        icon: 'base-0',
        text: 'base-0',
      },
    },
  },
  base: {
    'text-decoration': 'uppercase',
    'font-weight': '400',
    yellow: {
      bg: 'base-400',
      text: 'base-700',
      icon: 'primary-400',
      hover: {
        icon: 'primary-700',
        bg: 'base-500',
        text: 'base-800',
      },
    },
    purple: {
      icon: 'secondary-400',
      bg: 'base-400',
      text: 'base-700',
      hover: {
        icon: 'secondary-700',
        bg: 'base-500',
        text: 'base-800',
      },
    },
  },
  outline: {
    'text-decoration': 'none',
    'font-weight': '400',
    yellow: {
      bg: 'primary-100',
      icon: 'primary-700',
      text: 'primary-700',
      hover: {
        bg: 'primary-100',
        icon: 'primary-700',
        text: 'primary-700',
      },
    },
    purple: {
      bg: 'secondary-100',
      icon: 'secondary-400',
      text: 'secondary-400',
      hover: {
        bg: 'secondary-100',
        icon: 'secondary-400',
        text: 'secondary-400',
      },
    },
  },
} as const

export const ButtonStyle = styled.button<ButtonStyleProps>`
  text-transform: ${(props) =>
    buttonVariants[props.variant]['text-decoration']};
  border: 0;

  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 6px;
  transition: 0.2s;

  width: 100%;
  height: ${(props) => buttonSizes[props.size].height};
  font-size: ${(props) => buttonSizes[props.size]['font-size']};

  background-color: ${(props) =>
    props.theme[buttonVariants[props.variant][props.mainColor].bg]};
  font-weight: ${(props) => buttonVariants[props.variant]['font-weight']};
  color: ${(props) =>
    props.theme[buttonVariants[props.variant][props.mainColor].text]};

  svg {
    color: ${(props) =>
      props.theme[buttonVariants[props.variant][props.mainColor].icon]};
  }

  &:not(:disabled):hover {
    background-color: ${(props) =>
      props.theme[buttonVariants[props.variant][props.mainColor].hover.bg]};
    color: ${(props) =>
      props.theme[buttonVariants[props.variant][props.mainColor].hover.text]};

    svg {
      color: ${(props) =>
        props.theme[buttonVariants[props.variant][props.mainColor].hover.icon]};
    }
  }

  &:disabled {
    opacity: 0.6;
  }
`
