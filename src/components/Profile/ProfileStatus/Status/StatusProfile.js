import React from "react";
export class StatusProfile extends React.Component{
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState( {
            editMode: false
        })
    }
    disActivateEditMode() {
        this.setState( {
            editMode: true
        })
    }

    render() {
        return(
            <>
                {this.state.editMode
                    ? <div><input autoFocus={true} onBlur={this.activateEditMode.bind(this)} value={this.props.status}/></div>
                    : <div onDoubleClick={ this.disActivateEditMode.bind(this) }>{this.props.status}</div>
                }
            </>)
    }
}