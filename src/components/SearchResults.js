import Show from './Show';
import { connect } from 'react-redux';

const SearchResults = (props) => {
    console.log(props.searchResults)
    return (
        <div className="flex_container">
            {
                props.searchResults.map((result, index) => {
                    {/* return <p>{result.show.name}</p> */ }
                    return <Show key={index} show={result.show} handleDetails={() => console.log(result.show.name)} handleCloseDetails={props.handleCloseDetails} />
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchResults: state.shows
    }
}

export default connect(mapStateToProps)(SearchResults);