import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='flex justify-between bg-[#2392BE] py-3 px-5'>
            <h1>Predictive Maintanence</h1>
            <ul className='flex gap-4'>
                <li>About</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
        </div>
    </>
  )
}

export default Navbar