
import Menu from "./menu"


export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Menu />
      {children}
    </>
  )
}