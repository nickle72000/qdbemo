import axios from 'axios';

export const fetchBlogs = async(userID) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}${process.env.REACT_APP_API_GET_BLOG.replace('{userId}', userID)}`, { retry: false });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch blogs')
    }
}


export const fetchUser = async(userID) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}${process.env.REACT_APP_API_GET_PROFILE.replace('{userId}', userID)}`, { retry: false });
        return response.data;
    } catch (error) {
        throw new Error('Failed to user details')
    }
}


export const updateBlogs = async(payload) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_SERVER_BASE_URL}${process.env.REACT_APP_API_UPDATE_BLOG}`, payload, { retry: false });
        return response.data;
    } catch (error) {
        throw new Error('Failed to save data')
    }
}