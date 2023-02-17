import clsx from 'clsx'

interface HeadingProps {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: import('react').ReactNode
  className: string
}

export const Heading = ({
  size: Comp = 'h1',
  children,
  className,
}: HeadingProps) => {
  return (
    <Comp
      className={clsx(
        'font-semibold tracking-tighter',
        Comp === 'h1' && 'text-5xl md:text-[5rem]',
        Comp === 'h2' && 'text-4xl md:text-6xl',
        Comp === 'h3' && 'text-2xl',
        className
      )}
    >
      {children}
    </Comp>
  )
}
