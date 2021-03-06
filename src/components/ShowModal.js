import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { closeShow } from '../actions/showsActions';

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
        textDecoration: 'none'
    }

    if (!props.currentShow) {
        return (
            <div></div>
        )
    } else {
        return (

            <div>
                <Modal style={modalStyles} ariaHideApp={false} isOpen={!!props.currentShow} onRequestClose={() => props.dispatch(closeShow())} contentLabel="Selected Show">
                    <div className='largecard'>
                        <div className='largecard_left'>
                            {!!props.currentShow.image && <img alt="show_poster" src={props.currentShow.image.original} />}
                            {/* <img alt="show_poster" src={props.currentShow.image.original} /> */}
                        </div>
                        <div className='largecard_right'>
                            <a href="#0" onClick={() => props.dispatch(closeShow())} style={closeButtonStyles}>X</a>
                            <h1>{props.currentShow.name}</h1>
                            <div className='largecard_right__details'>
                                <ul>
                                    <li key="premiered">Premiered: {props.currentShow.premiered}</li>
                                    <li key="runtime">{props.currentShow.runtime} min</li>
                                    <li key="status">{props.currentShow.status}</li>
                                </ul>

                                <div className='largecard_right__review'>
                                    {props.currentShow.summary ? <p>{props.currentShow.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p> : <p>No summary availabe.</p>}
                                    {props.currentShow.externals.imdb && <a href={`http://www.imdb.com/title/${props.currentShow.externals.imdb}/plotsummary`} target='_blank' rel="noreferrer">Read more</a>}
                                </div>
                                <div>
                                    {/* <p>Genres:</p> */}
                                    <ul>
                                        {props.currentShow.genres.map((genre) => <li key={genre}>{genre}</li>)}
                                    </ul>
                                </div>
                                <div className='largecard_right__button'>
                                    {!!props.currentShow.officialSite ? <a href={props.currentShow.officialSite} target='_blank' rel="noreferrer">Official Website</a> : <span></span>}
                                    <a href={props.currentShow.url} target='_blank' rel="noreferrer">Full Details</a>
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

const mapStateToProps = (state) => {
    return {
        currentShow: state.showModal
    }
}

export default connect(mapStateToProps)(ShowModal);