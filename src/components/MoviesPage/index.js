import {useState,useEffect} from "react"
import "./index.css"
import MovieItem from "../MovieItem"

const MoviesPage=()=>{
    const [apiData,setData]=useState([])
    const [isClick,setClick]=useState(false)
    const isButton=()=>{
        setClick((prevState)=>!prevState)
    }
    const forData=async()=>{
    
        const url="https://hoblist.com/api/movieList?category=movies&language=kannada&genre=all&sort=voting"
      
      var formdata = new FormData();
    formdata.append("category", "movies");
    formdata.append("language", "kannada");
    formdata.append("genre", "all");
    formdata.append("sort", "voting");
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(results => setData(results.result))
      .catch(error => console.log('error', error));
      
    }
    useEffect(()=>{
        forData()
    },[])
    return(
        <div>
       <navbar className="navbar">
       <div className="nav-sub">
       <button className="button" onClick={isButton}>Company Info</button>
        {isClick?<div>
            Company: Geeksynergy Technologies Pvt Ltd<br/>
Address: Sanjayanagar, Bengaluru-56<br/>
Phone: XXXXXXXXX09<br/>
Email: XXXXXX@gmail.com<br/>
        </div>:null}
       </div>
       
       </navbar>
       {apiData.map(each=><MovieItem each={each}/>)}
       </div>
    )
    
}
export default MoviesPage