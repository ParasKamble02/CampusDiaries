// import fs from 'fs';
// import imagekit from '../configs/imageKit.js';
// import Blog from '../models/Blog.js';

// export const addBlog = async (req, res) => {
//     try {
//         const{title, subTitle, description, category, isPublished, Author} = JSON.parse(req.body.blog);
//         const imageFile = req.file;

//         //check if all fields are present
//         if(!title || !description || !category || !imageFile || !isPublished || !Author ){
//             return res.json({success: false, message: "misssing required fields"})
//         }
//         const fileBuffer = fs.readFileSync(imageFile.path)
//         const response = await imagekit.upload({
//             file: fileBuffer,
//             fileName: imageFile.originalname,
//             folder: "/blogs"
//         })
//         //optimization through imagekit URL url
//         const optimizedImageUrl = imagekit.url({
//             path: response.filePath, 
//             transformation: [
//                 {quality: 'auto'}, //auto compression
//                 {format: 'webp'}, //covert to modern format
//                 {width: '800'} //width resizing
//             ]
//         });

//         const image = optimizedImageUrl;
//         await Blog.create({title, subTitle, description, category, image, isPublished, Author})
//         res.json({success: true, message: "Blog added successfully"})

//     } catch (error) {
//         res.json({success: false, message: error.message})
//     }
// }

import fs from 'fs';
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';

export const addBlog = async (req, res) => {
    try {
        const { title, subTitle, description, category, isPublished, Author } =
            JSON.parse(req.body.blog);

        const imageFile = req.file;

        if (!title || !description || !category || !imageFile || !Author) {
            return res.json({ success: false, message: "Missing required fields" });
        }

        // Upload image
        const fileBuffer = fs.readFileSync(imageFile.path);
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        });

        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { quality: "auto" },
                { format: "webp" },
                { width: "1280" }
            ]
        });

        const image = optimizedImageUrl;

        await Blog.create({
            title,
            subTitle,
            description,
            category,
            image,
            isPublished,
            Author,
        });

        res.json({ success: true, message: "Blog added successfully" });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

//new
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true });
        return res.json({ success: true, blogs });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};


export const getBlogById = async (req, res) => {
    try{
        const {blogId} = req.params;
        const blog = await Blog.findById(blogId)
        if(!blog){
           return res.json({success: false, message: "Blog not found"});
        }
        res.json({success: true, blog})
    } catch (error){
        res.json({success: false, message: error.message})
    }
}

export const deleteBlogById = async (req, res) => {
    try{
        const { id } = req.body;
        await Blog.findByIdAndDelete(id);
        res.json({success: true, message: 'Blog Deleted successfully'})
    } catch (error){
        res.json({success: false, message: error.message})
    }
}

export const togglePublish = async (req, res) =>{
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id)
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({success: true, message:'Blog Status updated'})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

