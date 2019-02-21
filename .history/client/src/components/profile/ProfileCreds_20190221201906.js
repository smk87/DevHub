import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  const {experience,education} =this.props;

  const expItems=experience.map(exp=>(
    <li key={exp._id} className="list-group-item">
<h4>
  {exp.company}
</h4>
<p>
  <Moment format="YYYY/MM/DD">
{exp.from}
  </Moment>
        <Moment format="YYYY/MM/DD">
          {exp.from}
        </Moment>
</p>
    </li>
  ))
  render() {
    return (
      <div>
        <h1>TODO: PROFILE CREDS</h1>
      </div>
    );
  }
}

export default ProfileCreds;
