import "./NormalStyle.css"
import SearchInpput from "../SearchInput/SearchInput"
function NormalMenu() {
    return (
      
        <div className="normalHeader">
            <div className="TitleSpace"></div>
            <img src="" alt="Logo picture here" className="Logo"></img>
            <h1 className="Title">Write your MONO</h1>
            <ul>
                <li>Home</li>
                <li>Library</li>
                <li>Authors</li>
                <li>Rank</li>
            </ul>
            <SearchInpput/>
        </div>
        

    )
}
export default NormalMenu