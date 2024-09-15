import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../axios/axios";
import moment from 'moment';

const PageDetails = () => { 
    const { id } = useParams();
    console.log('PageDetails ID:', id); // Check if ID is being retrieved correctly

    const [blog, setBlog] = useState(null);

    const fetchData = async () => {
        try {
            console.log('Fetching Blog with ID:', id);
            if (!id) {
                throw new Error('No ID provided');
            }
            const response = await axiosInstance.get(`/Blog/${id}`);
            console.log('API Response:', response.data);
            setBlog(response.data.Blog);
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchData(); 
        }
    }, [id]);

    if (!blog) return <div className="text-center text-gray-500">Loading...</div>;

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Image Section */}
                {/* <div className="relative">
                    <img 
                        src={blog.imageURL || '/default-image.jpg'} 
                        alt={blog.title} 
                        className="w-full h-80 object-cover"
                    />
                </div> */}
                {/* Text Section */}
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                    <p className="text-gray-700 mb-4">{blog.content}</p>
                    <p className="text-gray-500 text-sm">
                        Published At: {moment(blog.createdAt).format('DD MMMM YYYY, h:mm a')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PageDetails;
