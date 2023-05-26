import React from "react";
export class StatusProfile extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState( {
            editMode: false
        })
        this.props.updateStatusThunk(this.state.status)
    }

    disActivateEditMode = () => {
        this.setState( {
            editMode: true
        })
        this.props.updateStatusThunk(this.state.status)
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return(
            <>
                {this.state.editMode
                    ? <div><input autoFocus={true} onChange={this.onChangeStatus} onBlur={this.activateEditMode.bind(this)} value={this.state.status}/></div>
                    : <div onClick={ this.disActivateEditMode }>{this.props.status  || 'статуса нет'}</div>
                }
            </>)
    }
}