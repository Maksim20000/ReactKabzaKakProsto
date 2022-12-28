import {Component} from "react";

export class MessageDialog extends Component {
    render() {
        return (
            <div>
                {this.props.message}
            </div>
        );
    }
}