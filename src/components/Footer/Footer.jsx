import { BsInstagram, BsTwitterX, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { GrGithub } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
export default function Footer() {

  return (
    <>
      <div className="w-full  text-whites border-t border-gray-500">
        <div className="container max-w-6xl py-4 flex flex-col gap-8">
          <div className='flex justify-between min-h-auto'>
            <div>
              <h1 className='text-5xl font-extrabold'>MH<span className='text-green-700'>.</span></h1>
            </div>
            <div className='flex justify-between gap-5'>
              <div className='fex flex-col gap-6'>
                <h1 className='text-sm font-semibold'>RESOURCES</h1>
                <ul className='font-light'>
                  <li>
                    <NavLink
                      to='/'
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/about'
                    >
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className='fex flex-col gap-6'>
                <h1 className='text-sm font-semibold'>FOLLOW US</h1>
                <ul className='font-light'>
                  <li>
                    <a href="">Github</a>
                  </li>
                  <li>
                    <a href="">Linkedin</a>
                  </li>
                </ul>
              </div>
              <div className='fex flex-col gap-6'>
                <h1 className='text-sm font-semibold'>LEGAL</h1>
                <ul className='font-light'>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="w-full  text-whites border-t border-gray-500">
        <div className='container flex justify-between max-w-6xl py-4 '>
          <div>
            copyright &copy; 2024
          </div>
          <div className='flex gap-4 '>
            <a href=""><FaFacebook /></a>
            <a href=""> <BsInstagram /></a>
            <a href=""><BsTwitterX /></a>
            <a href=""><BsYoutube /></a>
            <a href=""><GrGithub /></a>
          </div>
        </div>
      </div>

    </>
  )
}


