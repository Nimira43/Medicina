import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='min-h-screen bg-light'>
      <div className='flex justify-between items-center py-5 px-10 bg-main shadow-md'>
        <Link href='/' className='logo-text text-light text-3xl font-medium tracking-wide'>
          Medicina Healthcare
        </Link>

        <Link
          href='/sign-in'
          className='text-light hover:text-main-light transitioning font-medium uppercase'
        >
          Login
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-20 md:mt-32  px-10'>
        <div className='flex flex-col gap-7 max-w-xl '>
          <h1 className='text-4xl font-semibold text-main leading-tight'>
            Exceptional Care, Personalised.
          </h1>

          <p className='text-base text-grey-1 leading-relaxed'>
            Medicina Healthcare delivers private medical care built around you. Our clinicians
            combine expertise, compassion, and modern technology to provide clear answers and
            tailored treatment at every stage of your health journey. Whether you need rapid
            diagnostics, ongoing support, or specialist guidance, we ensure your experience is
            seamless, respectful, and centred on your wellbeing.
          </p>

          <div className='flex gap-5 mt-2'>
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

        <div className='flex justify-center items-center mt-16 md:mt-0'>
          <div className='p-2 rounded-full bg-gradient-to-br from-main to-main-dark shadow-xl ring-4 ring-main-light/40 flex justify-center items-center -mt-4'>
            <img
              src='/logo-4.png'
              alt='Medicina Logo'
              // className='w-80 h-80 object-contain drop-shadow-xl'
              className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-xl"

            />
          </div>

        </div>
      </div>
    </div>
  )
}
