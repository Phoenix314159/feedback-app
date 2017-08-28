import React, {Component} from 'react';
import axios from 'axios';
import Albums from './Albums';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: {},
            loading: 'LOADING ...'
        };
    }

    async componentDidMount() {
        const res = await axios.get('/api/albums');
        this.setState({albums: await res.data, loading: await ''});
    }
    render() {
        return (
            <div>
                {this.state.loading}
                <Albums info={this.state.albums}/>
            </div>
        )
    }
}

export default App;