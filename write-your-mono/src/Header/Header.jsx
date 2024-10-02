// import SearchInput from "./SearchInput/SearchInput";
import NormalMenu from "./NormalMenu/NormalMenu";
import SandwichMenu from "./SandwichMenu/SandwichMenu"
import "./HeaderStyle.css"
function Header() {
    return (
        <header>
            <NormalMenu/>
            <SandwichMenu/>
        </header>
    )
}
export default Header;
