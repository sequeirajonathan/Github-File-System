import React from "react";

const GitContainer = props => {
  return (<table className="ui celled striped table">
    <thead>
      <tr>
        <th colSpan="3">Git Repository</th>
      </tr>
    </thead>
    <tbody>
        {props.children}
    </tbody>
  </table>);
};

export default GitContainer;