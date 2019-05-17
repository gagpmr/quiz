import React from "react";
import MDSpinner from "react-md-spinner";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "100%",
        position: "absolute"
      }}
    >
      <div style={{ margin: "auto" }}>
        <MDSpinner />
      </div>
    </div>
  );
};

export default Loading;
