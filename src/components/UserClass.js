import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Deepak S G",
                location: "Default Location",
                avatar_url: "Dummy Avatar",
            },
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/deepaksg-0210");
        const jsonData = await data.json();
        // console.log(jsonData);
        this.setState({ userInfo: jsonData });
    } 
    render() {
        const { name, location, avatar_url, email } = this.state.userInfo;
        return (
            <div className="user-card">
                <img src = {avatar_url} alt = "Avatar" style = {{ width: "100px", height: "100px" }}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Email: {}</h3>
                <h4>Phone: 1234567890</h4>
            </div>
        );
    }
}

export default UserClass;