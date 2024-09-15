import { Router } from "express";
import BlogSpotController from "../Controller.js/BlogspotController.js";

const BlogRouter = Router();

BlogRouter.get("/AllBlogs", BlogSpotController.getAll);
BlogRouter.get("/Blog/:id", BlogSpotController.getSingle);
BlogRouter.post("/CreateBlog", BlogSpotController.Create);
BlogRouter.put("/UpdateBlog/:id", BlogSpotController.Update);
BlogRouter.delete("/DeleteBlog/:id", BlogSpotController.Delete);
BlogRouter.patch("/PatchWiseUpdation/:id", BlogSpotController.UpdateNecessary)
BlogRouter.get("/BriefBlog", BlogSpotController.BriefContent);

export default BlogRouter;