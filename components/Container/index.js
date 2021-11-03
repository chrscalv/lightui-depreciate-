export default function Container({ children })
{
  return (
    <div className="container mx-auto px-3 py-6 md:px-0 space-y-4">
      {children}
    </div>
  )
}