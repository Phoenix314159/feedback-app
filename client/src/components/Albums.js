import React, { Component } from 'react';
import { connect } from 'react-redux';

class Albums extends Component {
    constructor(props) {
        super(props)
    }

     componentWillReceiveProps(props) {
         this.albumDetails = props.albums.map((album, i) => {
            return (
                <div key={i}>
                    <ul >
                        <li>Album Name: {album.title}
                            Album Artist: {album.artist}
                            Album Image: <img src={album.image} alt="" />
                        </li>
                    </ul>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.albumDetails}
            </div>
        )
    }
}

function mapStateToProps({ albums }) {
    return { albums }
}
export default connect(mapStateToProps)(Albums)
