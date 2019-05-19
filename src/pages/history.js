import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import React, { Fragment } from "react";
import Loading from "../components/loading";
import Navbar from "../components/navbar";
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
      return <Loading />;
    }
    return (
      <Fragment>
        <Navbar />
        {this.state.questions.map(doc => (
          <div
            key={doc._id}
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row"
            }}
          >
            <div
              style={{
                width: "70%",
                borderWidth: "1px",
                borderColor: "#DDDDDD",
                borderStyle: "solid"
              }}
            >
              <Typography variant="body1">{doc.question}</Typography>
            </div>
            <div
              style={{
                width: "10%",
                borderWidth: "1px",
                borderColor: "#DDDDDD",
                borderStyle: "solid"
              }}
            >
              <Typography variant="body1">{doc.answer}</Typography>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default withStyles(styles)(History);
