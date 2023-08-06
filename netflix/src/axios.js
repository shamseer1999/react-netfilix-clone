import axios from "axios";
import {baseUrl} from './constants/constants'
//creating an instance
const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance