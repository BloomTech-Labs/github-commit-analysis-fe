import React, { useState, useEffect } from "react";
import axios from "axios";
import createPlotlyComponent from "react-plotly.js/factory";
import { useAppState } from "../../context/app-state-context";

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const YearlyCodeFrequency = (props) => {
  const [data, setData] = useState({});
  const {
    state: { user },
  } = useAppState();

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://ghsuccessapi.com/visualization/yearly-code-frequency/${props.username}/${props.repoName}`,
          {
            headers: { Authorization: `${user.accessToken}` },
          }
        )
        .then((response) => {
          setData(JSON.parse(response.data));
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [props.username, props.repoName, user.accessToken, user]);

  return (
    <Plot
      data={[
        {
          x: data.week,
          y: data.additions,
          type: "bar",
          name: "Additions",
          "marker.color": "green",
        },
        {
          x: data.week,
          y: data.deletions,
          type: "bar",
          name: "Deletions",
          "marker.color": "red",
        },
      ]}
      layout={{
        title: `<b>Yearly Code Frequency:</b>` + "<br>" + `${props.repoName}`,
        barmode: "overlay",
        titlefont: {
          size: 12,
        },
      }}
      useResizeHandler={true}
      style={{ width: "100%", height: "100%", fontSize: "3px" }}
    />
  );
};

export default YearlyCodeFrequency;
