import React from 'react';
import SideBar from './SideBar.js'

const NoteDetail = props => {
    const { id } = props.match.params;
    return (
        <div>
            <SideBar />
            <h2>Note</h2>
            <p>ノート{id}</p>
        </div>
    )
}

export default NoteDetail;
