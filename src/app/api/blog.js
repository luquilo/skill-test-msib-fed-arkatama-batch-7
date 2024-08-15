import axios from "axios"
import { useDispatch } from "react-redux";
const API_URL = 'https://pmb.alkautsar.ponpes.id/api/cms/blog';
import { fetchBlog } from '../store/apiDataSlice'

const dispatch = useDispatch()

axios.get(API_URL)
  .then(response => {
    const data
    dispatch(fetchBlog())
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
