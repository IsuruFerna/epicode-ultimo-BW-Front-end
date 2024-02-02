import { useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";

function FattureRowComp({ data }) {
   return (
      <>
         {console.log(data)}
         {data.map((elem) => (
            <tr key={elem.numeroFattura}>
               <td>{elem.numeroFattura}</td>
               <td>{elem.dataEmissione}</td>
               <td>{elem.importo}</td>
               <td>{elem.partitaIvaCliente}</td>
               <td>{elem.ragioneSociale}</td>
            </tr>
         ))}
      </>
   );
}

export default FattureRowComp;
