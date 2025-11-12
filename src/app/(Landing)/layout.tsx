import Menu from "./menu"
import Footer from "./footer"

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  )
}