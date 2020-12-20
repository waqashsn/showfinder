import React from 'react';
import Modal from 'react-modal';

const ShowModal = (props) => {

    const modalStyles = {
        overlay: {
            backgroundColor: 'rgba(222, 222, 222, 0.8)'
        },
        content: {
            backgroundColor: '',
            height: '400px',
            width: '800px',
            position: 'absolute',
            margin: 'auto',
            padding: '0',
            boxShadow: '0px 20px 30px 3px rgba(0, 0, 0, 0.55)',
            border: 'none'

        }
    }

    const closeButtonStyles = {
        color: 'gray',
        float: 'right',
        padding: '10px',
        fontFamily: 'sans-serif',
        textDecoration: 'none',
    }

    if (!props.ShowModal) {
        return (
            <div></div>
        )
    } else {
        const imdbSummaryLink = `http://www.imdb.com/title/${props.ShowModal.externals.imdb}/plotsummary` || 'http://www.imdb.com';
        return (

            <div>
                <Modal style={modalStyles} ariaHideApp={false} isOpen={!!props.ShowModal} onRequestClose={props.handleCloseDetails} contentLabel="Selected Show">
                    <div className='largecard'>
                        <div className='largecard_left'>
                            <img src={props.ShowModal.image.original} />
                        </div>
                        <div className='largecard_right'>
                            <a href="#" onClick={props.handleCloseDetails} style={closeButtonStyles}>X</a>
                            <h1>{props.ShowModal.name}</h1>
                            <div className='largecard_right__details'>
                                <ul>
                                    <li key="premiered">Premiered: {props.ShowModal.premiered}</li>
                                    <li key="runtime">{props.ShowModal.runtime} min</li>
                                    <li key="status">{props.ShowModal.status}</li>
                                </ul>

                                <div className='largecard_right__review'>
                                    <p>{props.ShowModal.summary.substr(0, 220).replace(/<\/?[^>]+(>|$)/g, "")}</p>
                                    <a href={imdbSummaryLink} target='_blank'>Read more</a>
                                </div>
                                <div>
                                    {/* <p>Genres:</p> */}
                                    <ul>
                                        {props.ShowModal.genres.map((genre) => <li key={genre}>{genre}</li>)}
                                    </ul>
                                </div>
                                <div className='largecard_right__button'>
                                    {!!props.ShowModal.officialSite ? <a href={props.ShowModal.officialSite} target='_blank'>Official Website</a> : <span></span>}
                                    <a href={props.ShowModal.url} target='_blank'>Full Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button onClick={props.handleCloseDetails}>Close</button> */}
                </Modal>

            </div>
        )
    }

}

export default ShowModal;