import "./index.css"
import { IoIosArrowDropupCircle,IoIosArrowDropdownCircle } from "react-icons/io";

const MovieItem=(props)=>{
    const {each}=props

    return(
        <div className="main-item-bg">
        <div className="sub-bg">
      
        <div className="vote-div">
        <IoIosArrowDropupCircle className="scroll" />
        <p className="vote-font">{each.voting}</p>
        <IoIosArrowDropdownCircle className="scroll" />
        <p className="vote1">Votes</p>
        </div>
        <img src={each.poster} alt={each.title} className="poster-image"/>
        <div>
            <h1 className="title">{each.title}</h1>
            <p className="genre">Genre: {each.genre}</p>
            <p className="genre">Director: {each.director}</p>
            <p className="genre">Starring: {each.stars}</p>
            <div className="min-div genre">
                <p>Mins |&nbsp;</p>
                <p>{each.language}&nbsp;</p>
                <p>April</p>
            </div>
            <div className="min-div total-views">
                <p>{each.pageViews} |&nbsp;</p>
                <p>voted by {each.voting} people</p>
            </div>
        </div>
        </div>
        <button className="button2">Watch Trailer</button>
       </div>
    )
}
export default MovieItem