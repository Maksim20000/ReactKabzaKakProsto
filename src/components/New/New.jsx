import React from 'react';
import {InformationItem} from "./InformationItem/InformationItem";

function New(props) {

    const informationData = props.state.map(i => <InformationItem id={i.id} name={i.name} message={i.message} />)

    return (
        <div>
            <div>
                { informationData }
            </div>
        </div>
    )
}

export default New