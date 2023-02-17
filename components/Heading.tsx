import clsx from 'clsx'

interface HeadingProps {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: import('react').ReactNode
  className: string
}

export const Heading = ({
  size: Element = 'h1',
  children,
  className,
}: HeadingProps) => {
  return (
    <Element
      className={clsx(
        'tracking-tighter',
        Element === 'h1' && 'text-5xl md:text-7xl',
        Element === 'h2' && 'text-3xl md:text-5xl',
        Element === 'h3' && 'text-2xl md:text-4xl',
        Element === 'h4' && 'text-xl md:text-3xl',
        className
      )}
    >
      {children}
    </Element>
  )
}
