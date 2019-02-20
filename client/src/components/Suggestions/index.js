import React from "react";

const Suggestions = props => {
  const options = props.results.map(s => (
    <li key={s.resort_id}>{s.resort_name}</li>
  ));
  return <ul>{options}</ul>;
};

export default Suggestions;
