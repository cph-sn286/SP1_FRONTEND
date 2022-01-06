import { Link, Switch, Route } from "react-router-dom";
import Details from "./details";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import facade from "../apiFacade";
import URL from "../apiFacade";




    
const Harbour = () => {
    const [harbour, setHarbour] = useState([]);

  useEffect(() => {
    
      
        fetch(
          "http://localhost:8080/SP1_war_exploded/api/harbour/all" ,
          facade.makeOptions("GET", true)
        )
          .then((response) => response.json())
          .then((data) => {
            setHarbour(data);
          })
      
    
        }, []);
  return (
    <div>
        {harbour &&
         harbour.map((harbour) => (
         <div>
          <ul>
          <li>
            Id: {harbour.id}, name: {harbour.name}, capacity: {harbour.capacity}, address {harbour.address},
            <Link to={`/harbour/${harbour.name}`}>Details</Link>{" "}
          </li>        
         </ul>
        </div>
     ))}

     <Switch>
        <Route path={"/harbour/:name"}>
          <Details/>
        </Route>
      </Switch>
    </div>
  );
};

export default Harbour;
