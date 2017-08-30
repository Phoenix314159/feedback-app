import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import Albums from './Albums';


const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/surveys" component={Dashboard}/>
                    <Route path="/surveys/new" component={SurveyNew}/>
                </div>
            </BrowserRouter>
        </div>
    )
}
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             albums: {},
//             loading: 'LOADING ...'
//         };
//     }
//
//     async componentDidMount() {
//         const res = await axios.get('/api/albums');
//         this.setState({albums: await res.data, loading: await ''});
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.loading}
//                 <Albums info={this.state.albums}/>
//             </div>
//         )
//     }
// }

export default App;