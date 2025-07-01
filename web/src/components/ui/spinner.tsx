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
  }

  return (
    <div className={cn('relative flex w-8 h-8', className)}>
      <i className="absolute w-full h-full rounded-full border-3 border-b-current animate-spinner-ease-spin border-solid border-t-transparent border-l-transparent border-r-transparent"></i>
      <i className="absolute w-full h-full rounded-full border-3 border-b-current opacity-75 animate-spinner-linear-spin border-dotted border-t-transparent border-l-transparent border-r-transparent"></i>
    </div>
  )
}

export default Spinner