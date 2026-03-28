import { ReactNode } from "react"

function PrivateLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateLayout
