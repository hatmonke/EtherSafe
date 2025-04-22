import { classNames } from '@/utils/styling'
import React, { FC, ReactNode } from 'react'

import Dots from '../Helpers/Dots'
import Loader from '../Helpers/Loader'

export type ButtonColor = 'info' | 'red' | 'blue' | 'pink' | 'purple' | 'gradient' | 'gray' | 'primary' | 'secondary' | 'machine' | 'text' | 'neutral' | 'theOneIWantRn'
export type ButtonSize = 'ball' | 'xs' | 'sm' | 'lg' | 'default' | 'none' | 'transition'
export type ButtonVariant = 'outlined' | 'filled' | 'empty'

const DIMENSIONS = {
  ball: 'w-8 h-8',
  transition: 'w-fit h-fit',
  xs: 'px-2 h-[28px] !border',
  sm: 'px-3 h-[36px]',
  md: 'px-4 h-[52px]',
  lg: 'px-6 h-[60px]',
}

const SIZE = {
  ball: 'text-xs rounded-full',
  transition: 'text-sm rounded',
  xs: 'text-xs rounded-full',
  sm: 'text-sm rounded-full',
  md: 'rounded',
  lg: 'text-lg rounded',
}

const FILLED = {
  default:
    'disabled:pointer-events-none disabled:brightness-[40%]',
  blue: 'bg-blue border-blue',
  red: 'bg-red',
  primary: 'border-2 bg-primary border-text text-text hover:text-primary hover:bg-text hover:border-primary focus:text-primary focus:bg-text focus:border-primary active:text-primary active:bg-text active:border-primary',
  secondary: 'border-2 bg-secondary border-text text-text hover:text-secondary hover:border-secondary focus:text-secondary hover:bg-text focus:bg-text focus:border-secondary active:text-secondary active:bg-text active:border-secondary',
  neutral: 'border-2 bg-neutral border-text text-text hover:text-neutral  hover:bg-text hover:border-neutral focus:text-neutral focus:bg-text focus:border-neutral active:text-neutral active:bg-text active:border-neutral',
  info: 'border-2 bg-info border-accent text-accent hover:text-info  hover:bg-text hover:bg-accent hover:border-info focus:text-info focus:bg-accent focus:border-info active:text-info active:bg-accent active:border-info',
  pink: 'bg-pink',
  purple: 'bg-purple',
  machine: 'bg-slate-800 border border-slate-300 hover:bg-slate-300 hover:border-slate-800 focus:bg-slate-300 focus:border-slate-800 active:bg-slate-300 active:border-slate-800',
  gradient:
    '!bg-gradient-to-r from-blue to-pink-600 hover:from-blue/80 hover:to-pink-600/80 focus:from-blue/80 focus:to-pink-600/80 active:from-blue/70 active:to-pink-600/70 focus:border-blue-700',
  gray: 'bg-dark-700',
  text: 'border-2 bg-text border-text text-primary hover:text-text hover:bg-primary hover:border-text active:text-text active:bg-primary active:border-text',
}

const OUTLINED = {
  default: 'border-2 disabled:pointer-events-none disabled:opacity-40',
  blue: 'border-none bg-blue/20 hover:bg-blue/40 active:bg-blue/60 text-blue focus:bg-blue/40',
  red: 'border-none bg-red/20 hover:bg-red/40 active:bg-red/60 text-red focus:bg-red/40',
  secondary: 'border-none bg-secondary/20 hover:bg-secondary/40 active:bg-secondary/60 text-secondary focus:bg-secondary/40',
  pink: 'border-none bg-pink/20 hover:bg-pink/40 active:bg-pink/60 text-pink focus:bg-pink/40',
  primary: 'border-none bg-primary/20 hover:bg-primary/40 active:bg-primary/60 text-primary focus:bg-primary/40',
  purple: 'border-none bg-purple/20 hover:bg-purple/40 active:bg-purple/60 text-purple focus:bg-purple/40',
  gradient: 'border-none bg-purple/20 hover:bg-purple/40 active:bg-purple/60 text-purple focus:bg-purple/40',
  gray: 'border-dark-700 hover:bg-dark-700/30 active:bg-dark-700/50 focus:bg-dark-700/30',
  text: 'border-text hover:bg-text/30 active:bg-text/50 focus:bg-text/30 text-text',
  theOneIWantRn: 'border-basebg text-basebg hover:bg-basebg hover:text-text hover:border-text active:bg-basebg active:text-text active:border-text focus:bg-basebg focus:text-text focus:border-text'
}

const EMPTY = {
  default:
    'bg-transparent hover:brightness-[90%] focus:brightness-[90%] active:brightness-[80%] disabled:pointer-events-none disabled:opacity-40',
  blue: 'text-blue',
  red: 'text-red',
  secondary: 'text-secondary',
  pink: 'text-pink',
  primary: 'text-primary',
  purple: 'text-purple',
  gray: 'text-higher-emphesis',
  text: 'text-text',
  gradient:
    '!bg-gradient-to-r from-blue to-pink-600 hover:from-blue/80 hover:to-pink-600/80 focus:from-blue/80 focus:to-pink-600/80 active:from-blue/70 active:to-pink-600/70',
}

const VARIANT = {
  outlined: OUTLINED,
  filled: FILLED,
  empty: EMPTY,
}

type Button = React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>> & {
  Dotted: FC<DottedButtonProps>
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactNode
  endIcon?: ReactNode
  color?: ButtonColor
  size?: ButtonSize
  variant?: ButtonVariant
  fullWidth?: boolean
  loading?: boolean
  square?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      color = 'primary',
      size = 'md',
      variant = 'filled',
      square = false,
      startIcon = undefined,
      endIcon = undefined,
      fullWidth = false,
      loading,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        {...rest}
        ref={ref}
        disabled={disabled || loading}
        className={classNames(
          VARIANT[variant]['default'],
          // @ts-ignore TYPE NEEDS FIXING
          VARIANT[variant][color],
          // @ts-ignore TYPE NEEDS FIXING
          SIZE[size],
          // @ts-ignore TYPE NEEDS FIXING
          variant !== 'empty' ? DIMENSIONS[size] : '',
          fullWidth ? 'w-full' : '',
          square ? 'rounded-none' : '',
          'cursor-none font-bold flex items-center justify-center gap-1 duration-300 active:scale-95',
          className
        )}
      >
        {loading ? (
          <Loader stroke="currentColor" />
        ) : (
          <>
            {startIcon && startIcon}
            {children}
            {endIcon && endIcon}
          </>
        )}
      </button>
    )
  }
)

export function ButtonError({
  error,
  disabled,
  ...rest
}: {
  error?: boolean
  disabled?: boolean
} & ButtonProps) {
  if (error) {
    return <Button color="red" size="lg" disabled={disabled} {...rest} />
  } else {
    return <Button color="gradient" disabled={disabled} size="lg" {...rest} />
  }
}

interface DottedButtonProps extends ButtonProps {
  pending: boolean
}

export const ButtonDotted: FC<DottedButtonProps> = ({ pending, children, ...rest }) => {
  const buttonText = pending ? <Dots>{children}</Dots> : children
  return (
    <Button {...rest} {...(pending && { disabled: true })}>
      {buttonText}
    </Button>
  )
}

export default Button
