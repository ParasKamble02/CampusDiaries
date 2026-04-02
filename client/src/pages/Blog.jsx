import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blog_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';
import Moment from 'moment';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { useAppContext } from '../context/AppContext';
import toast from "react-hot-toast";


const Blog = () => {
  const { id } = useParams();

  const {axios} = useAppContext()

  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    try {
      const {data} = await axios.get(`/api/blog/${id}`)
      data.success ? setData(data.blog) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [id]);

  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-20 -z-10 opacity-30"
      />
      <Navbar />

      {/* Blog Header Section */}
      <div className="text-center mt-4 text-[#2B2B2B]">
        <p className="text-[#FFA700] font-medium">
          Published on – {Moment(data.createdAt).format('MMMM Do YYYY')}
        </p>
        <h1 className="text-3xl sm:text-5xl font-semibold max-w-3xl mx-auto mt-2">
          {data.title}
        </h1>
        <h2 className="my-3 max-w-xl mx-auto text-sm sm:text-base text-[#2B2B2B]/80">
          {data.subTitle}
        </h2>
        <p className="inline-block py-1 px-4 rounded-full mb-4 border text-sm border-[#FFA700]/35 bg-[#FFA700]/5 font-medium text-[#FFA700]">
          {data.Author}
        </p>
      </div>

      {/* Blog Image + Content */}
      <div className="mx-4 max-w-4xl md:mx-auto my-8">
        <img
          src={data.image}
          alt=""
          className="rounded-2xl mb-6 w-full md:w-[90%] mx-auto"/>

        <div
          className="rich-text max-w-3xl mx-auto text-[#2B2B2B]/90 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.description }}>
        </div>
      </div>
      <Footer/>
    </div>
  ) : (
    <Loader/>
  );
};

export default Blog;
