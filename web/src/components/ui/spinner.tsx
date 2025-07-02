import cn from "@/utils/cn"

type SpinnerProps = {
  variant?: 'default' | 'ring' | 'ios' | 'dots'
  className?: string;
}

const Spinner = ({
  variant,
  className,
}: SpinnerProps) => {
  if (variant === 'ios') {
    return (
      <div className={cn('relative flex w-8 h-8 bg-primary', className)}>
        {[...new Array(12)].map((_, index) => (
          <i
            key={`star-${index}`}
            className={cn(
              'absolute animate-fade-out rounded-full w-[25%] h-[8%] left-[calc(37.5%)] top-[calc(46%)] spinner-bar-animation bg-current',
            )}
            style={
              {
                "--bar-index": index,
                animation: 'fade-out 1.2s linear 0s infinite normal none running',
                animationDelay: 'calc(-1.2s + (.1s * var(--bar-index)))',
                transform: 'rotate(calc(30deg * var(--bar-index)))translate(140%)'
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    )
  } else if (variant === 'ring') {
    return (
      <svg 
        className={cn('relative flex animate-spin w-8 h-8 text-primary', className)}
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="absolute w-full h-full rounded-full border-3 border-b-primary opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path className="absolute w-full h-full rounded-full border-3 border-b-primary opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
      </svg>
    )
  } else if (variant === 'dots') {
    return (
      <div className={cn('relative flex translate-y-2/4 w-8 h-8', className)}>
        {[...new Array(3)].map((_, index) => (
          <i
            key={`dot-${index}`}
            className="relative rounded-full mx-auto size-1.5 bg-current animate-blink spinner-dot-blink-animation"
            style={
              {
                "--dot-index": index,
                animation: 'blink 1.4s infinite both',
                animationDelay: 'calc(.2s * var(--dot-index))',
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    )
  }

  return (
    <div className={cn('relative flex w-8 h-8', className)}>
      <i className="absolute w-full h-full rounded-full border-3 border-b-current animate-spinner-ease-spin border-solid border-t-transparent border-l-transparent border-r-transparent"></i>
      <i className="absolute w-full h-full rounded-full border-3 border-b-current opacity-75 animate-spinner-linear-spin border-dotted border-t-transparent border-l-transparent border-r-transparent"></i>
    </div>
  )
}

export default Spinner