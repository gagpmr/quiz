import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import { all } from "../data/history";

const styles = theme => ({
  main: {
    width: "auto",
    display: "flex",
    alignItems: "center"
  },
  header: {
    borderWidth: "1px",
    borderColor: "#DDDDDD",
    borderStyle: "solid",
    borderRadius: "8px",
    padding: "0px"
  },
  item: {
    borderWidth: "1px",
    borderColor: "#DDDDDD",
    borderStyle: "solid",
    borderRadius: "8px",
    width: "100%",
    position: "absolute"
  },
  itemQuestion: {
    width: "70%",
    borderWidth: "1px",
    borderColor: "#DDDDDD",
    borderStyle: "solid",
    borderRadius: "8px"
  },
  itemAnswer: {
    width: "10%",
    borderWidth: "1px",
    borderColor: "#DDDDDD",
    borderStyle: "solid",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center"
  },
  itemActions: {
    width: "20%",
    borderWidth: "1px",
    borderColor: "#DDDDDD",
    borderStyle: "solid",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center"
  },
  itemOptions: {
    borderWidth: "1px",
    borderColor: "#DDDDDD",
    borderStyle: "solid",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "auto"
  },
  link: {
    fontSize: 20,
    margin: "auto"
  },
  icon: {
    marginTop: 7
  }
});

class History extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      isLoading: true,
      isError: false
    };
  }

  componentDidMount = async () => {
    await this.getQuestions();
  };

  getQuestions = async () => {
    try {
      const result = await all();
      this.setState({
        questions: result
      });
    } catch (error) {
      this.setState({
        error: true
      });
    }
    this.setState({
      isLoading: false
    });
  };

  render() {
    if (this.state.isLoading) {
      return <div> Loading ...</div>;
    }
    return <div>{console.log(...this.state.questions)}</div>;
  }
}

export default withStyles(styles)(History);
