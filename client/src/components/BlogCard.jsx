import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({blog}) => {
    const {title, description, category, image, _id, Author} = blog;
    const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/blog/${_id}`)} className='w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-[#FF7A00]/25 duration-300 cursor-pointer'>
      <img src={image} alt='' className='aspect-video object-cover'/>
      <span className='ml-5 mt-4 px-3 py-1 inline-block bg-[#FF7A00]/20 rounded-full text-[#FF7A00] text-xs'>{category}</span>
      <div className='p-5'>
        <h5 className='mb-2 font-medium text-[#2B2B2B]-900'>{title}</h5>
        <p className='mb-3 text-xs text-[#2B2B2B]-70 leading-relaxed' dangerouslySetInnerHTML={{"__html": description.slice(0, 75)}}></p>
        <p className="text-sm text-[#2B2B2B] font-medium mt-2">- by {Author}</p>
      </div>
    </div>
  )
}

export default BlogCard
