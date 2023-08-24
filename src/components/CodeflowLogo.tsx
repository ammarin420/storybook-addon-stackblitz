import * as React from "react"
import { SVGProps } from "react"

const CodeflowLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" {...props}>
    <defs>
      <linearGradient id="a">
        <stop offset="5%" stopColor="#c563ff" />
        <stop offset="95%" stopColor="#fb1fcd" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M27.77 7.038A7.62 7.62 0 0 1 29.6 12a7.1 7.1 0 0 1-7.1 7.1c-1.419 0-2.82-.291-4.137-1.376-1.27-1.046-2.356-2.745-3.384-5.316-.972-2.429-1.886-3.73-2.74-4.434C11.43 7.31 10.58 7.1 9.5 7.1A4.9 4.9 0 0 0 4.6 12c0 1.38.522 2.628 1.295 3.524.783.906 1.75 1.376 2.605 1.376.127 0 .259-.008.392-.021l-.625-1.666a.4.4 0 0 1 .472-.528l4.732 1.183a.4.4 0 0 1 .244.597l-2.662 4.337a.4.4 0 0 1-.715-.068l-.655-1.746c-.37.065-.776.112-1.183.112-1.644 0-3.178-.873-4.27-2.139A7.62 7.62 0 0 1 2.4 12a7.1 7.1 0 0 1 7.1-7.1c1.419 0 2.82.291 4.137 1.376 1.27 1.046 2.356 2.745 3.384 5.316.972 2.429 1.886 3.73 2.74 4.434.809.665 1.658.874 2.739.874a4.9 4.9 0 0 0 4.9-4.9 5.42 5.42 0 0 0-1.295-3.524 4.553 4.553 0 0 0-.878-.79 3.602 3.602 0 0 1-7.077-.936 3.6 3.6 0 0 1 6.816-1.62c1.074.34 2.045 1.03 2.804 1.908ZM21.75 5.35a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z"
    />
  </svg>
)
export default CodeflowLogo
