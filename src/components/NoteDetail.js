import React from 'react';

const NoteDetail = props => {
    const { id } = props.match.params;
    console.log(id);
    return (
        <div>
            <h2>Note</h2>
            <p>ノート{id}</p>
        </div>
    )
}

export default NoteDetail;
