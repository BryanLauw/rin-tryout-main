export default function PageMessage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="text-center text-2xl font-bold h-screen flex justify-center items-center">
      {children}
    </div>
  )
}
