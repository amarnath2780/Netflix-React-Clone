import axios from  'axios'
import {baseUrl} from './constents/constant'


const instance = axios.create({
    baseURL: baseUrl,
  });

export default instance