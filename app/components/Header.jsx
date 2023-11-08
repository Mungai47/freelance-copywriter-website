import Link from 'next/link';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { MdOutlineCancel } from 'react-icons/md'

function Header() {

  const [nav, setNav] = useState(false);
  const closeMenu = () => {
    setNav(false);
  }

  return (
    <header className="bg-whitesmoke shadow-lg text-black">
      <div className="flex justify-between items-center py-3 w-4/5 mx-auto">
        <div>
          <Link href="/">
            <h1 className='font-bold text-4xl cursor-pointer'>B</h1>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className='flex gap-6 items-center text-lg font-semibold cursor-pointer'>
            <Link href="/">
              <li className='hover:underline'>Home</li>
            </Link>
            <Link href="/work">
              <li className='hover:underline'>Work</li> 
            </Link> 
            <Link href="/testimonials">
              <li className='hover:underline'>Testimonials</li> 
            </Link>  
            <Link href="/contact">
              <li className='hover:underline'>Contact</li> 
            </Link>       
            <Link href="/talk">
              <li>
                <button className="bg-black text-white px-6 py-2 rounded-lg">Lets Talk</button>
              </li>
            </Link>
          </ul>
        </div>
        <div onClick = {()=> setNav(!nav)} className="z-10 cursor-pointer lg:hidden">
          {nav ? <MdOutlineCancel size={30} className="text-3xl text-black"/> : <HiMenu size={30} className="text-3xl text-black"/>}

          {nav && (
            <ul className='flex flex-col gap-6 justify-center items-center text-xl font-semibold cursor-pointer absolute top-0 left-0 h-screen w-screen bg-gradient-to-b from-black to-gray-800 p-4'>
            <Link href="/">
              <li onClick={closeMenu} className='hover:underline text-white my-2'>Home</li>
            </Link>
            <Link href="/work">
              <li onClick={closeMenu} className='hover:underline text-white my-2'>Work</li> 
            </Link> 
            <Link href="/testimonials">
              <li onClick={closeMenu} className='hover:underline text-white my-2'>Testimonials</li> 
            </Link>  
            <Link href="/contact">
              <li onClick={closeMenu} className='hover:underline text-white my-2'>Contact</li> 
            </Link>       
            <Link href="/talk">
              <li onClick={closeMenu} className='hover:underline text-white my-2'>
                <button className="bg-black text-white px-6 py-2 rounded-lg">Lets Talk</button>
              </li>
            </Link> 
          </ul>
          )}

        </div>
      </div>
    </header>
  )
}

export default Header
