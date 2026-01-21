import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='p-5 flex flex-col gap-5 w-max'>
      <h1 className='logo-text text-4xl text-main'>Medicina</h1>  
      <Link href='/sign-up'>Register</Link>
      <Link href='/sign-in'>Login</Link>
    </div>
  )
}