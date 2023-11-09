import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Home() {
  return (
    <main>
      <div className="bg-whitesmoke text-black">
        <div className="w-4/5 mx-auto grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-2 lg:h-screen">
          <div className="flex flex-col justify-center">
            <h1 className='text-4xl font-bold md:text-6xl lg:text-7xl lg:font-extrabold py-4'>
              Hello I'm Leah.<br/>
              A Freelance Copywriter.
            </h1>
            <p className='text-base font-medium py-4'>
              Molestie fringilla in id velit ullamcorper enim in diam nulla 
              felis lorem ut nec et nibh nam aliquam sed mauris sed orci.
            </p>
            <div className='flex gap-3 items-center text-lg font-semibold pt-10'>
              <button className="bg-black text-white px-8 py-2 rounded-lg hover:bg-cyan-green hover:text-white">Lets Talk</button>
              <button className="bg-whitesmoke text-black px-8 py-2 rounded-lg hover:text-cyan-green flex items-center gap-2">Learn More <FaLongArrowAltRight/></button>
            </div>
          </div>
          <div className='flex justify-center'>
            <Image
              src="/images/image1.png"
              alt="Image of Leah"
              width={1000}
              height={700}
              layout='responsive'
              className="hidden lg:block "
            />
            <Image
              src="/images/image1.png"
              alt="Profile Image of Leah"
              width={400}
              height={300}
              className="rounded-full lg:hidden py-0" 
            />
          </div>
        </div> 
      </div>
      <div className="bg-cyan-green ">
        <div className='py-6 w-4/5 mx-auto'>
          <p className="text-white text-xl font-semibold text-center py-4">Some of the Amaizing Clients I have Worked With</p>
          <div className="grid grid-flow-col">
            <Image 
              src="/images/logo1.png"
              alt="Logo1"
              width={200}
              height={200}
              className="py-4"
            />
            <Image 
              src="/images/logo2.png"
              alt="Logo2"
              width={200}
              height={200}
              className="py-4"
            />
            <Image 
              src="/images/logo3.png"
              alt="logo3"
              width={200}
              height={200}
              className="py-4"
            />
            <Image 
              src="/images/logo4.png"
              alt="Logo4"
              width={200}
              height={200}
              className="py-4"
            />
            <Image 
              src="/images/logo5.png"
              alt="Logo4"
              width={200}
              height={200}
              className="py-4"
            />
          </div>
        </div>
      </div>
      <div className="bg-whitesmoke text-black">
        <div className='w-4/5 mx-auto'>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>

            </div>
          </div>
        </div>
      </div>       
    </main>
  )
}
