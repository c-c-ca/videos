import axios from 'axios';

const KEY = 'AIzaSyBwV0-ebRIagxpQWwalffzbBybMVA1FOZA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
