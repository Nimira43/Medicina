import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

function PublicLayout({
  children
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  const isAuthRoute = pathname.includes('/sign')

  return (
    <div>
      {!isAuthRoute && (
        <div className='flex justify-between items-center py-5 px-10 bg-main shadow-md'>
          <Link href='/' className='logo-text text-light text-3xl font-medium tracking-wide'>
            Medicina Healthcare
          </Link>
          <div className='flex gap-4'>
            <Link
              href='/sign-in'
              className='text-light hover:text-main-light transitioning font-medium uppercase'
            >
              Login
            </Link>
            <Link
              href='/sign-up'
              className='text-light hover:text-main-light transitioning font-medium uppercase'
            >
              Register
            </Link>  
          </div>       
        </div>
      )}
      { children }
    </div>
  )
}

export default PublicLayout
