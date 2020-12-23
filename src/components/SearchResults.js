import Show from './Show';
import { connect } from 'react-redux';
import { displayShow, closeShow } from '../actions/showsActions';

const SearchResults = (props) => {
    console.log(props.searchResults)
    return (
        <div className="flex_container">
            {
                props.searchResults.map((result, index) => {
                    {/* return <p>{result.show.name}</p> */ }
                    return <Show key={index} show={result.show} />
                    {/* return <Show key={index} show={result.show} handleDetails={() => props.dispatch(displayShow(result.show))} handleCloseDetails={props.dispatch(closeShow())} /> */ }
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