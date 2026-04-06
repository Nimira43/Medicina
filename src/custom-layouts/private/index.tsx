import { IUser } from '@/interfaces'
import { getUserDataFromMongoDB } from '@/server-actions/users'
import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

function PrivateLayout({
  children
}: {
  children: ReactNode
  }) {
  const [ userData, setUserData ] = useState<IUser | null>(null)
  const [ error, setError ] = useState<string | null>(null)
  const [ loading, setLoading ] = useState<boolean>(false)

  const getUserData = async () => { 
    try {
      setLoading(true)
      const response: any = await getUserDataFromMongoDB()

      if (response.success) {
        setUserData(response.data)
      } else {
        console.log(response.message)
        setError(response.message)
      }

    } catch (error: any) {
      setError(error.message)
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div>
      <div className='flex justify-between items-center py-5 px-10 bg-main shadow-md'>
        <Link href='/' className='logo-text text-light text-3xl font-medium tracking-wide'>
          Medicina Healthcare
        </Link>
        <div className='flex gap-4 items-center'>
          <span
            className='text-light hover:text-main-light transitioning font-medium uppercase'
          >
            {userData?.name}
          </span>
          <button>
            <RxHamburgerMenu
              size={20}
              className='text-light hover:text-main-light transitioning uppercase'
            />
          </button>
        </div>       
      </div>
      <div className='p-5'>
        {children}
      </div>
    </div>
  )
}

export default PrivateLayout
