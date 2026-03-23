import Menu from "./menu";

export default function ConvivenciaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}
