import React, {Component} from 'react';

class Albums extends Component {
    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(props) {
        this.albumDetails = props.info.map((album, i) => {
            return (
                <div>
                    <img src={album.thumbnail_image}/>
                    <ul key={i}>
                        <li>Album Name: {album.title}
                            Album Artist: {album.artist}
                            Album Image: <img src={album.image}/>
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

export default Albums;
