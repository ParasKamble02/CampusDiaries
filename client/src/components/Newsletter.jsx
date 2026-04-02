import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
      <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog!</h1>
      <p className='md:text-lg text-[#2B2B2B]-500/70 pb-8'>Subscribe to get the latest updates regarding upcoming events.</p>
      <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
        <input className='border border-[#2B2B2B]-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-nonr px-3 text-[#2B2B2B]' type='text' placeholder='Enter your email id'required/>
        <button type='submit' className='md:px-12 px-8 h-full text-white bg-[#FF7A00]/80 hover:bg-[#FF7A00] transition-all cursor-pointer rounded-md rounded-l-none'>Submit</button>
      </form>
    </div>
  )
}

export default Newsletter
