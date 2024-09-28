import './SearchInput/SearchStyle'

function SearchInpput() {
  return (
    <div className='Search'>
      <div className='left-search'></div>
      <div className='middle-search'>
        <input type="text" name="input-search" id="input_search" placeholder='Search' />
      </div>
      <div className="right-search"></div>
    </div>
  )
}
export default SearchInpput