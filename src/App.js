import React from "react";
// JSON
import users from "./users.json";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Box.css";
// JS
import Counter from "./components/Counter.js";
import UserInfo from "./components/Userinfo.js";

// USERLIST
const userList = users.map((data) => {
  return (
    <UserInfo name={data.name} email={data.email} website={data.website} />
  );
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    };
  }

  addCount = () => {
    if (this.state.count >= 1 && this.state.count <= 9)
      this.setState({
        count: this.state.count + 1,
      });
  };

  removeCount = () => {
    if (this.state.count >= 2 && this.state.count <= 10)
      this.setState({
        count: this.state.count - 1,
      });
  };

  render() {
    return (
      <div>
        <Counter
          count={this.state.count}
          addCount={this.addCount}
          removeCount={this.removeCount}
        />
        <div>{userList}</div>;
      </div>
    );
  }
}

export default App;
