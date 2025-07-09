import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosinstance";

const uploadImage = async (imagefile) => {
    const formData = new FormData();
    formData.append("image", imagefile);

    try {
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data; // Return respose data
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
};

export default uploadImage;
