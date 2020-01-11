import React from 'react';
import {UserCnsumer, userContext}  from './userContext';

class Additem extends React.Component {
    state = {
        value: ''
    }


    handleChange = e => {
        this.setState({ value: e.target.value })
        e.preventDefault()
    }

    addIem = () => {

        if (this.state.value) {
            this.context.addToShowCase(this.state.value)
            this.setState({ value: "" })
        }
    }


    render() {
        return (
            <div>

                <div className="form-group">
                    <input type="text"

                        value={this.state.value}
                        placeholder="Enter you showcase "
                        onChange={this.handleChange}
                        className="form-control" />
                </div>
                <button onClick={this.addIem} className="btn btn-primary">Add item</button>
            </div>
        )
    }
}

Additem.contextType = userContext

const ItemList = () => {
    return (
        <UserCnsumer>
            {({ user }) => (
                <ul className="list-group">
                    {user.language.map((item, i) => <li className="list-item-group" key={item + i}>{item}</li>)}
                </ul>
            )}
        </UserCnsumer>
    )
}

const ShowCase = () => {
    return (
        <UserCnsumer>
            {({ user }) => {
                return (
                    <div>
                        <h3>{user.name} ShowCase</h3>
                        <Additem />
                        <ItemList />
                    </div>
                )
            }}
        </UserCnsumer>

    );
};

export default ShowCase;