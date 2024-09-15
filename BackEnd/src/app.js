import express from "express";
import moongose from "mongoose"
import AllRoutes from "./Routes/index.js";
import cors from "cors"
const myApp = express();
const port = process.env.PORT || 3000;
myApp.use(express.json())
myApp.use(cors())
myApp.use(AllRoutes);
// myApp.use(cors({
//       origin: 'http://localhost:5174', // Replace with your frontend URL if different
//       methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
//       allowedHeaders: ['Content-Type']
// }));

await moongose.connect('mongodb://localhost:27017/Blog')

myApp.listen(port,()=>{
      console.log(`server is running fine at port ${port}`)
})