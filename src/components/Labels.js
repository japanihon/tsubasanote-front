import React from 'react';
import axios from 'axios';
import SideBar from './SideBar.js'

class Labels extends React.Component {
    constructor() {
        super();
        this.state = {
            labels: []
        };
    }
    componentDidMount() {
        const request = axios.create({
            baseURL: 'http://localhost:3000'
        })
        request.get('/labels')
            .then(res => {
                this.setState({
                    labels:res.data
                });
            })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <SideBar />
                <h2>Labels</h2>
                <p>ラベル一覧</p>
            </div>
        )
    }
}

export default Labels;
