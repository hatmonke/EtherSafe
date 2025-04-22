import { classNames } from '@/utils/styling'
import React from 'react'

interface DotsProps {
  children?: any
  className?: string
}

export default function Dots({ children = <span />, className }: DotsProps) {
  return (
    <>
    {/** @ts-ignore */}
      <style jsx>
        {`
          .dots::after {
            content: '.';
          }
        `}
      </style>
      <span
        className={classNames('after:inline-block dots after:animate-ellipsis after:w-4 after:text-left', className)}
      >
        {children}
      </span>
    </>
  )
}
