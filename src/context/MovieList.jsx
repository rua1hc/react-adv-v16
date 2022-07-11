import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

export default class MovieList extends Component {
    static contextType = UserContext;

    componentDidMount() {
        console.log("context", this.context);
    }

    render() {
        return (
            <UserContext.Consumer>
                {(user) => (
                    <div>
                        MovieList of current User - {user.name}
                        <div>
                            <MovieRow />
                        </div>
                    </div>
                )}
            </UserContext.Consumer>
        );
    }
}
