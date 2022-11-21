import axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: 'AIzaSyATS2mI9pGk68H280k6lf5170nzzY-Irsw',
    }
});

export default instance;