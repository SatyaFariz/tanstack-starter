import cn from "@/utils/cn"

type SpinnerProps = {
  className?: string;
  classNames?: {
    root?: string;
    spinner?: string;
  }
}

const Spinner = ({
  className,
  classNames,
}: SpinnerProps) => {
  return (
    <div className={cn('relative flex w-8 h-8', classNames?.root)}>
      {[...new Array(12)].map((_, index) => (
        <i
          key={`star-${index}`}
          className={cn(
            'absolute animate-fade-out rounded-full w-[25%] h-[8%] left-[calc(37.5%)] top-[calc(46%)] spinner-bar-animation bg-primary',
            className || classNames?.spinner,
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

export default Spinner