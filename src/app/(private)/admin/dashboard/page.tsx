import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

async function DashboardPage() {
  const user = await currentUser()

  return (
    <div className='p-5 flex flex-col gap-5'>
      <h1 className=''>Dashboard Page</h1>
      <UserButton />
      <h1>Name: {user?.firstName} {user?.lastName}</h1>
      <h2>ID: {user?.id}</h2>
      <h2>Email: {user?.emailAddresses[0].emailAddress}</h2>
    </div>
  )
}

export default DashboardPage
