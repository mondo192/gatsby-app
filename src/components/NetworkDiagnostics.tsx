import React, { useEffect, useState } from "react";
import { Environment } from "../configs/Environment";
import { probe } from "../services/Probe";

const endpoints = Environment.data.ENDPOINTS;

export const NetworkDiagnostics: React.FC = () => {
  let promises: Promise<Response>[] = [];
  const [response, setResponse] = useState<Response>();

  useEffect(() => {
    async function goProbe(endpoints: string[]) {
      try {
        endpoints.map(endpoint => {
          promises.push(probe(endpoint));
        });
        const result = await Promise.allSettled(promises);
        console.log(result);
      } catch (error) {
        return error;
      }
    }
    goProbe(endpoints);

    // for (const endpoint of endpoints) {
    //   const result = goProbe(endpoint);
    //   promises.push(result);
    // }
    // console.log(promises);

    // const results = Promise.allSettled(promises);
    // console.log(results);
  }, []);

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </React.Fragment>
  );
};
