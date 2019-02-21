import React from "react";

const Suggestions = props => {
  const options = props.results.map(s => (
    <a className="resortSearch" href={"/resort/" + s.resort_id}>
      <li key={s.resort_id}>{s.resort_name}</li>
    </a>
  ));
  return <ul>{options}</ul>;
};

export default Suggestions;
