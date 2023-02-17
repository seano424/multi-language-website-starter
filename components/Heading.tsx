import clsx from 'clsx'

interface HeadingProps {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
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
        'font-semibold tracking-tighter',
        Element === 'h1' && 'text-5xl md:text-[5rem]',
        Element === 'h2' && 'text-4xl md:text-6xl',
        Element === 'h3' && 'text-2xl',
        className
      )}
    >
      {children}
    </Element>
  )
}
