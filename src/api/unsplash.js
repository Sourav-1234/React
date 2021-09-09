import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.unsplash.com',

   headers:{
    Authorization :'Client-ID MaeUEXDUNojiotsqap9GFsxrBKfSV8Zt_fkyFQCJWCU'
   }
});
