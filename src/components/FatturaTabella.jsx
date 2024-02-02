import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useLocalStorage } from "../useLocalStorage";
import FattureRowComp from "./FattureRowComp";

function FatturaTabella() {
   const { getUser } = useLocalStorage("value");
   const [data, setData] = useState([]);

   useEffect(() => {
      // later update with a time interval
      fetch(process.env.REACT_APP_BE_URL + "/fatture", {
         headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + getUser().token,
         },
      })
         .then((response) => {
            if (!response.ok) {
               throw new Error("fetch data retreaving error!");
            }
            return response.json();
         })
         .then((data) => {
            console.log("data retreaved", data);
            setData(data);
         })
         .catch((err) => console.log("ERROR", err));
   }, []);

   return (
      <Table striped bordered hover>
         <thead>
            <tr>
               <th>No. Fattura</th>
               <th>Data Emissione</th>
               <th>Importo</th>
               <th>Partita IVA Cliente</th>
               <th>Ragione Sociale</th>
            </tr>
         </thead>
         <tbody>
            {Array.isArray(data.content) && (
               <FattureRowComp data={data.content} />
            )}
         </tbody>
      </Table>
   );
}

export default FatturaTabella;
