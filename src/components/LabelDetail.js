import React from 'react';

const LabelDetail = props => {
    const { id } = props.match.params;
    console.log(id);
    return (
        <div>
            <h2>Label</h2>
            <p>ラベル{id}</p>
        </div>
    )
}

export default LabelDetail;
