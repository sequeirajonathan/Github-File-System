import React from "react";
import Moment from "moment";

const GitRow = props => {
  
  return (
    <tr>
    <td className="collapsing">
      <i className={props.type + " icon"}/>
      {props.fileName}
    </td>
    <td>{props.commit}</td>
    <td className="right aligned collapsing">{Moment(props.uploadTime).fromNow()}</td>
  </tr>
  );
};

export default GitRow;