import Show from './Show';

const SearchResults = (props) => {
    return (
        <div className="flex_container">
            {
                props.searchResults.map((result, index) => {
                    {/* return <p>{result.show.name}</p> */}
                    return <Show key={index} show={result.show} />
                })
            }
        </div>
    )
}

export default SearchResults;