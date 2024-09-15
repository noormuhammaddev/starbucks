import BlogModel from "../Model/BlogModel.js"
//import { v4 as uuidv4 } from "uuid"; 
const BlogSpotController = {
    getAll : async(req,res) => {
        try {
            const AllBlogs = await BlogModel.find();
            if(!AllBlogs) {
                return res.status(404).json({Warning : "Not Found"})
            }
            res.status(200).json({Success:"All blogs", Blogs : AllBlogs})
        } catch (error) {
            res.status(500).json({Error:"Internal server Error",details : error.message})
        }
    },
    getSingle: async (req, res) => {
        try {
            const id = req.params.id;
            const singleBlog = await BlogModel.findOne({ id: id }); // Check if 'id' matches schema
    
            if (!singleBlog) {
                return res.status(404).json({ Warning: `Blog with id ${id} not found` });
            }
    
            res.status(200).json({ Success: "Blog is here!", Blog: singleBlog });
        } catch (error) {
            console.error('Error fetching blog:', error);
            res.status(500).json({ Error: "Internal server error", Details: error.message });
        }
    },
    
    
    Create : async(req,res)=>{
      try {
        const payload = req.body;
        const newBlog = await BlogModel.create({
            ...payload
        })
        res.status(200).json({Success:"Successfully created new Blog", new : newBlog})
      } catch (error) {
        res.status(500).json({Error:"Internal server Error",details : error.message}) 
      }   
    },
    Update: async (req, res) => {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const updatedBlog = await BlogModel.findOneAndUpdate({ id: id }, updateData, { new: true });
        
            if (!updatedBlog) {
                return res.status(404).json({ Warning: "Blog not found" });
            }
        
            res.status(200).json({ Success: "Successfully updated the Blog", Blog: updatedBlog });
        } catch (error) {
            console.error('Update error:', error); 
            res.status(500).json({ Error: "Internal server error", Details: error.message });
        }
    }, 
    UpdateNecessary : async (req,res) => {
        try {
            const id = req.params.id;
            const payload = req.body;
            const patchWise = await BlogModel.findOneAndUpdate({id:id},payload, {new:true} )
            if(!patchWise) 
            {
                return res.status(404).json({Warning : "Not Found"})
            }
            res.status(200).json({Success:"Updated Necessary parts successfully", PatchUpdation : patchWise})
        } catch (error) {
            console.error('Update error:', error); 
            res.status(500).json({ Error: "Internal server error", Details: error.message });
        }
    } , 
    
    Delete: async (req, res) => {
        try {
            const { id } = req.params;
            console.log("Deleting blog with ID:", id);  // Log the id received
            const DropBlog = await BlogModel.findOneAndDelete({ id });
            if (!DropBlog) {
                return res.status(404).json({ Warning: "Not Found" });
            }
            res.status(200).json({ Success: "Successfully deleted the blog", Drop: DropBlog });
        } catch (error) {
            console.error("Error in deleting blog:", error);  // Log the error
            res.status(500).json({ Error: "Internal server Error", details: error.message });
        }
    },
    
    
    BriefContent: async (req, res) => {
        try {
            const max_length = 50;
            // Fetch blogs, ensure correct field selection
            const blogs = await BlogModel.find({}, 'title content createdAt');
    
            // Map through blogs and handle undefined content
            const briefBlog = blogs.map((blog) => ({
                id: blog.id,
                title: blog.title,
                content: blog.content 
                    ? (blog.content.length > max_length 
                        ? blog.content.substring(0, max_length) + '...' 
                        : blog.content)
                    : 'No content available', // Handle missing content
            }));
    
            res.status(200).json({ Success: "Content is displaying", breifing: briefBlog });
        } catch (error) {
            res.status(500).json({ Error: "Internal server Error", details: error.message });
        }
    },
    
}

export default BlogSpotController