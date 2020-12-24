// function to get search results from API and call getShows when done
export const getShowsAsync = (searchKeyword) => {
    return (dispatch) => {
        // dispatch(setLoading(true));
        const apiUrl = 'https://api.tvmaze.com/search/shows?q=' + encodeURI(searchKeyword);
        fetch(apiUrl)
            .then((response) => response.json())
            .then((searchResults) => {
                if (searchResults.length > 0) {
                    // console.log("Keyword: ", searchKeyword);
                    // console.log(searchResults);
                    dispatch(getShows(searchKeyword, searchResults));
                    // dispatch(setLoading(false));
                } else {
                    dispatch(setError("Now shows found. Try another keyword."))
                    // dispatch(setLoading(false));
                }
            })
            .catch((err) => {
                dispatch(setError("Couldn't fetch search resluts. Check network connection."))
                console.log("ERROR: ", err);
            })
    }
}


// action generator to get shows based on keyword 
export const getShows = (keyword, showsData) => {
    return {
        type: "GET_SHOWS",
        keyword: keyword,
        shows: showsData
    }
}

export const setLoading = (loading) => {
    return {
        type: "SET_LOADING",
        loading: loading
    }
}

export const setError = (error) => {
    return {
        type: "SET_ERROR",
        error: error
    }
}

// action generator to display a single show modal
export const displayShow = (showData) => {
    // console.log("Running display show on ", showData)
    return {
        type: "DISPLAY_SHOW",
        show: showData
    }
}

// action generator to close show modal
export const closeShow = () => {
    return {
        type: "CLOSE_SHOW"
    }
}
