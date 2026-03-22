import { getUserDataFromMongoDB } from '@/server-actions/users'
import { UserButton } from '@clerk/nextjs'

async function DashboardPage() {
  const mongoUserResponse = await getUserDataFromMongoDB()
  
  if (!mongoUserResponse?.success) {
    console.log(mongoUserResponse?.message)
  }

  return (
    <div className='p-5 flex flex-col gap-5'>
      <h1 className=''>Dashboard Page</h1>
      <UserButton />
      <h1>
        Name: {mongoUserResponse?.data.name}
      </h1>
      <h2>
        ID: {mongoUserResponse?.data._id}
        </h2>
      <h2>
        Email: {mongoUserResponse?.data.email}
      </h2>
    </div>
  )
}

export default DashboardPage
