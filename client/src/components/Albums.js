import React, { Component } from 'react';

class Albums extends Component {
    constructor(props) {
        super(props)
    }
    componentWillReceiveProps(props) {
        this.albumDetails = props.info.map((album, i) => {
            return (
                <ul key={i}>
                    <li>Album Name: {album.title}
                        Album Artist: {album.artist}
                        Album Image: {album.image}
                    </li>
                </ul>
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

export default Albums;
