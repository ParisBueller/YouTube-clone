import axios from 'axios';

const KEY = 'AIzaSyCjGaVMJsf4G6YxwVOuzZOUGIS0aBqPQoI';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY
   }
});