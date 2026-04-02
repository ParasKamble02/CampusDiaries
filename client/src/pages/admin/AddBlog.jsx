
import React, { useState, useRef, useEffect } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddBlog = () => {

  const { axios } = useAppContext();
  const [isAdding, setIsAdding] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  // FIXED — Correct spelling + correct function name
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsAdding(true);

      const description = quillRef.current?.root?.innerHTML;

      const blog = {
        title,
        subTitle,
        description,
        category,
        isPublished,
        Author: author      // IMPORTANT: MUST MATCH BACKEND (Author)
      };

      const formData = new FormData();
      formData.append("blog", JSON.stringify(blog));
      formData.append("image", image);

      const { data } = await axios.post("/api/blog/add", formData);

      if (data.success) {
        toast.success(data.message);

        // RESET FORM
        setImage(null);
        setTitle("");
        setSubTitle("");
        setAuthor("");
        quillRef.current.root.innerHTML = "";
        setCategory("Startup");
        setIsPublished(false);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-[#FFF8EB] text-gray-600 h-full overflow-scroll"
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">

        {/* IMAGE */}
        <p className="font-medium">Upload Thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
            className="mt-2 h-20 rounded cursor-pointer object-cover border"
          />
          <input
            type="file"
            id="image"
            hidden
            accept="image/*"
            required
            onChange={handleImage}
          />
        </label>

        {/* TITLE */}
        <p className="mt-4">Blog Title</p>
        <input
          type="text"
          placeholder="Type Here..."
          required
          className="w-full mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        {/* SUB TITLE */}
        <p className="mt-4">Sub Title</p>
        <input
          type="text"
          placeholder="Type Here..."
          required
          className="w-full mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />

        {/* AUTHOR */}
        <p className="mt-4">Author Name</p>
        <input
          type="text"
          placeholder="Author..."
          required
          className="w-full mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />

        {/* DESCRIPTION */}
        <p className="mt-4">Blog Description</p>
        <div className="h-74 pb-16 sm:pb-10 pt-2 relative">
          <div ref={editorRef}></div>
        </div>

        {/* CATEGORY */}
        <p className="mt-4">Blog Category</p>
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          name="category"
          className="mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded"
        >
          {blogCategories.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* PUBLISH */}
        <div className="flex gap-2 mt-4">
          <p>Publish Now</p>
          <input
            type="checkbox"
            checked={isPublished}
            className="scale-125 cursor-pointer"
            onChange={(e) => setIsPublished(e.target.checked)}
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isAdding}
          className="mt-8 w-40 h-10 bg-[#FF7A00] text-white rounded cursor-pointer text-sm"
        >
          {isAdding ? "Adding..." : "Add Blog"}
        </button>
      </div>
    </form>
  );
};

export default AddBlog;




