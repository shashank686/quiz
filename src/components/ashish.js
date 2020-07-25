import React from "react";
import ReactHtmlParser from "react-html-parser";

const parseUTF3 = (encodedStr) =>
  new DOMParser().parseFromString(encodedStr, "text/html").body.textContent;

class Ashish extends React.Component {
  constructor() {
    super();
    this.state = {
      background: "blue",
      alignItem: "center",
      data: [],
    };
  }

  componentWillMount() {
    fetch("http://admin.bharatrath.tech/rx/vendors")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
        });
      });
    console.log(this.state.data);
    this.state.data.forEach((ele) => {
      ele.description = parseUTF3(ele.description);
    });
  }
  render() {
    return (
      <div>
        {this.state.data.map((ele) => {
          {
            return ReactHtmlParser(ele.description);
          }
        })}
      </div>
    );
  }
}
export default Ashish;
