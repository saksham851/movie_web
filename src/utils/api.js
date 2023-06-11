import axios from 'axios';

const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmQzOTUyYjRhNDM1MTEwYWFiMjgzMWEwOWFlYWNkNCIsInN1YiI6IjY0ODFiMDhhZTM3NWMwMDExYzdlN2ZjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KesTN9scw7YKIIaYXovl8Vt53LlZt_oNaZqi0z72tA8";


const headers={
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi=async(url,params)=>
{
 try {
    const {data}=await axios.get(BASE_URL + url,{
        headers,
        params,
    })
    return data;    
 } catch (err) {
   console.log(err);
   return err;
 }
}