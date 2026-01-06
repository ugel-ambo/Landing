import Menu from "./menu"

export default function GestionPedagogicaLayout({
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