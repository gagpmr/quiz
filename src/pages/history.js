import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import React, { Fragment, useEffect, useState } from "react";
import Loading from "../components/loading";
import Navbar from "../components/navbar";
import { all } from "../data/history";
import { borderRound, flexAlignCenter } from "../jss";

const styles = theme => ({
  main: {
    ...flexAlignCenter,
    width: "auto"
  },
  header: {
    ...borderRound,
    padding: "0px"
  },
  item: {
    ...borderRound,
    width: "100%",
    position: "absolute"
  },
  itemQuestion: {
    ...borderRound,
    width: "70%"
  },
  itemAnswer: {
    ...borderRound,
    ...flexAlignCenter,
    width: "10%"
  },
  itemActions: {
    ...borderRound,
    ...flexAlignCenter,
    width: "20%"
  },
  itemOptions: {
    ...borderRound,
    ...flexAlignCenter,
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

const History = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await all();
        setQuestions(result);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }
  return (
    <Fragment>
      <Navbar />
      {questions.map(doc => (
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
              ...borderRound,
              width: "70%"
            }}
          >
            <Typography variant="body1">{doc.question}</Typography>
          </div>
          <div
            style={{
              ...borderRound,
              width: "10%"
            }}
          >
            <Typography variant="body1">{doc.answer}</Typography>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default withStyles(styles)(History);
