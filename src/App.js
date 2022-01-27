import React from "react";
// JSON
import users from "./users.json";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Box.css";
// JS
import Counter from "./components/Counter.js";
import UserInfo from "./components/Userinfo.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 1,
      arrayLength: 0,
    };

    this.addCount = this.addCount.bind(this);
    this.removeCount = this.removeCount.bind(this);
  }

  addCount = () => {
    if (this.state.count >= 0 && this.state.count <= 9) {
      users.push(users[this.state.arrayLength]);
      this.setState({
        count: this.state.count + 1,
        arrayLength: this.state.count,
      });
    }
    console.log(this.state.arrayLength);
  };

  removeCount = () => {
    if (this.state.count >= 1 && this.state.count <= 10) {
      users.pop();
      this.setState({
        count: this.state.count - 1,
        arrayLength: this.state.count,
      });
    }
    console.log(this.state.arrayLength);
  };

  render() {
    const userNumber = this.state.count;

    // USERLIST
    let userList = users.map((data, i) => {
      if (i < userNumber) {
        return (
          <UserInfo
            name={data.name}
            email={data.email}
            website={data.website}
          />
        );
      }
    });

    return (
      <div>
        <Counter
          count={this.state.count}
          addCount={this.addCount}
          removeCount={this.removeCount}
        />
        <p>{userList}</p>
      </div>
    );
  }
}

export default App;
