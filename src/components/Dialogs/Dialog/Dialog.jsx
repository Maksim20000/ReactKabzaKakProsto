import {Component} from "react";
import {NavLink} from "react-router-dom";

export class Dialog extends Component {
    render() {
        const path = 'dialog' + this.props.id
        return (
            <div>
                <div>
                    <NavLink to={path}>{this.props.name}</NavLink>
                </div>
            </div>
        );
    }
}