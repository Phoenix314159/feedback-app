import React, {Component} from 'react';
import {connect} from 'react-redux';

class Albums extends Component {

    componentWillReceiveProps(props) {
        this.albumDetails = props.albums.map((album, i) => {
            return (
                <div key={i} className="albums">
                    <ul>
                        <li>Album Name: {album.title}</li>
                        <li> Album Artist: {album.artist}</li>
                        <li><img src={album.image} alt="" className="picture"/></li>
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

function mapStateToProps({albums}) {
    return {albums}
}
export default connect(mapStateToProps)(Albums)
