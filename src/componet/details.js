import { useEffect } from "react";
import { useParams } from "react-router";
import facade from "../apiFacade";


function Details() {
  let { name } = useParams();
  
  const {
    boat , setBoat
  } = useEffect ([])

  useEffect(() => {
    
      
    fetch(
      "http://localhost:8080/SP1_war_exploded/api/boat/getboatbyharbour/" + name ,
      facade.makeOptions("GET", true)
    )
      .then((response) => response.json())
      .then((data) => {
        setBoat(data);
      })
  

    }, []);

  return (
    <div>
      <div>
        <h2>Boat: {boat}</h2>
        ID: {boat.id} <br />
        Brand: {boat.brand}
        Make: {boat.make}
        Name: {boat.name}
      </div>
    </div>
  );
}

export default Details;
