import React from "react";
import { NavLink } from "react-router-dom";
const Links = () => {
  return (
    <div className="links">
      <NavLink activeClassName="active-menu" to="/Services/managedCloud">
        Managed Cloud Services
      </NavLink>
      <NavLink activeClassName="active-menu" to="/Services/AWSdevops">
        {" "}
        AWS Devops{" "}
      </NavLink>
      <NavLink activeClassName="active-menu" to="/Services/AWSdatamigration">
        {" "}
        AWS DataMigration{" "}
      </NavLink>
      <NavLink activeClassName="active-menu" to="/Services/securityCloud">
        Security in Cloud - AWS
      </NavLink>{" "}
    </div>
  );
};
export default Links;
