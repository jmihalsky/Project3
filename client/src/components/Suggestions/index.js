import React from "react";
import {Link} from "react-router-dom";

const Suggestions = props => {
  const options = props.results.map(s => (
    <Link className="resortSearch" to={"/resort/" + s.resort_id}>
      <li key={s.resort_id}>{s.resort_name}</li>
    </Link>
  ));
  return <ul>{options}</ul>;
};

export default Suggestions;
