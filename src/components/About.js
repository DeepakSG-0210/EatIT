import User from './User';
import UserClass from './UserClass';
import React from 'react';
import UserContext from '../utils/UserContext';

class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Parent Constructor");
    }
    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }
    render() {
        // console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <p>
                    About the contributors of this project
                </p>
                <UserClass name={"Deepak S G (Class)"} location={"Bangalore (class)"}/>
                <div>
                    <UserContext.Consumer>
                        { ({loggedInUser}) => <h3>{loggedInUser}</h3>}
                    </UserContext.Consumer>
                </div>
            </div>
        );
    }
}

export default About;