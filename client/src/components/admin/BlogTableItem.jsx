
import React from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from "react-hot-toast";

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);

  const { axios } = useAppContext();

const deleteBlog = async (e) => {
  e.stopPropagation();  
  
  const confirmed = window.confirm("Are you sure want to delete this blog?");
  if (!confirmed) return;
  try {
    const { data } = await axios.post("/api/blog/delete", { id: blog._id });

    if (data.success) {
      toast.success(data.message);
      await fetchBlogs();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

  const togglePublish = async (e) => {
    e.stopPropagation();   
    try {
      const { data } = await axios.post("/api/blog/toggle-publish", { id: blog._id });

      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="border-y border-gray-300"  onClick={(e) => e.stopPropagation()} >
      <th className="px-2 py-4">{index}</th>
      <td className="px-2 py-4">{title}</td>
      <td className="px-2 py-4 max-sm:hidden">{BlogDate.toDateString()}</td>
      <td className="px-2 py-4 max-sm:hidden">
        <p className={`${blog.isPublished ? "text-green-600" : "text-red-700"}`}>
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>

      <td className="px-2 py-4 flex text-xs gap-4 items-center">
        <button
          onClick={togglePublish}
          className="border px-3 py-1 rounded cursor-pointer"
        >
          {blog.isPublished ? "Unpublish" : "Publish"}
        </button>

        <img
        src={assets.cross_icon}
        className="w-6 hover:scale-110 transition-all cursor-pointer"
        onClick={(e) => deleteBlog(e)}  
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;



