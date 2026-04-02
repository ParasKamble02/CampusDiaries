import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { useRef } from 'react'

const Header = () => {

  const {setInput, input} = useAppContext()
  const inputRef = useRef()
  const onSubmitHandler = async (e)=> {
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear = () => {
    setInput('')
    inputRef.current.value = ''
  }

  return (
  <div className='mx-8 sm:mx-16 xl:mx-24 relative -mt-8 sm:-mt-12'>
    <div className='text-center mt-10 mb-8'>
      <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-[#FF7A00]/40 bg-[#FF7A00]/10 rounded-full text-sm text-[#FF7A00] hover:bg-[#E96E00]/10 transition cursor-default">
        <p>Welcome to Campus Diaries</p>
      </div>

      <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-[4.5rem] text-[#2B2B2B]'>
        Your Own <span className='text-[#F97316]'>Blogging</span> <br /> Platform
      </h1>

      <p className='my-6 max-w-2xl mx-auto max-sm:text-xs text-[#2B2B2B] text-center'>
        This is your space to think out loud, a vibrant blogging platform designed for students to share their stories, experiences, and insights. Discover campus events, achievements, and ideas that bring your college community together all through the power of words.
      </p>

      <form onSubmit={onSubmitHandler} className='flex justify-between max-w-lg max-sm max-sm:scale-75 mx-auto border border-[#2B2B2B]-300 bg-white rounded overflow-hidden'>
        <input ref={inputRef} type='text' placeholder='Search For Blogs' required className='w-full pl-4 outline-none'/>
        <button type='submit' className='bg-[#FF7A00] text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
      </form>
    </div>

    <div className='text-center'>
      {input &&
      <button onClick={onClear} className='border font-light trxt-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer'>Clear Search</button>}
    </div>

    <img src={assets.gradientBackground} alt='' className='absolute -top-12 -z-10 opacity-50' />
  </div>
  )
}

export default Header
