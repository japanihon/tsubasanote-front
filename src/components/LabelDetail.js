import React from 'react';
import SideBar from './SideBar.js';

const LabelDetail = props => {
    const { id } = props.match.params;
    return (
        <div>
            <SideBar />
            <h2>Label</h2>
            <p>ラベル{id}</p>
        </div>
    )
}

export default LabelDetail;
