import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { GiCondorEmblem } from 'react-icons/gi'

export default function HomePage() {
  return (
    <div className='min-h-screen bg-light'>
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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 h-[80vh] items-center px-10'>
        <div className='flex justify-center items-center md:order-last mt-10 md:mt-0'>
          <GiCondorEmblem className='text-[250px] text-main' />
        </div>  
        <div className='flex flex-col items-center text-center gap-6'>
          <h1 className='text-5xl text-main font-bold leading-tight'>
            Exceptional Care, Personalised.
          </h1>
          <p className='text-lg text-muted-foreground leading-relaxed max-w-125'>
            Medicina Healthcare delivers private medical care built around you. Our clinicians
            combine expertise, compassion, and modern technology to provide clear answers and
            tailored treatment at every stage of your health journey. Whether you need rapid
            diagnostics, ongoing support, or specialist guidance, we ensure your experience is
            seamless, respectful, and centred on your wellbeing.
          </p>
          <div className='flex gap-5 mt-2 mb-10'>
            <Button
              variant='main'
              className='text-sm transitioning'>
              <Link
                href='/services'
                className='font-medium'
              >
                View Services
              </Link>
            </Button>
            <Button
              variant='outline'
              className='text-sm transitioning'>
              <Link
                href='/book-appointment'
                className='font-medium'
              >
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>        
      </div>
    </div>
  )
}
