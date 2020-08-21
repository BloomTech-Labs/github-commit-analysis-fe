import React, { useState, useEffect } from 'react';
import axios from 'axios';
import createPlotlyComponent from 'react-plotly.js/factory';
import { useAppState } from '../../context/app-state-context';

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const YearlyCommitActivityPlot = (props) => {
  const [data, setData] = useState({})
  const {
    state: { user },
  } = useAppState();

  useEffect(() => {
    if (user) {
    axios
    .get(`https://www.ghsuccessapi.com/visualization/yearly-commit-activity/${props.username}/${props.repoName}`, {
      headers: { Authorization: `${user.accessToken}`}
    })
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
          y: data.total_commits,
          type: "bar",
        },
      ]}
      layout={{
        title: `Yearly Commit Activity:` +
        `<br>` + 
        `${props.repoName}`,
        // xaxis: {
        //   tickangle: 45,
        // },
        yaxis: {
          title: "Total Commits",
        },
      }}
      useResizeHandler={true}
      style={{width: "100%", height: "100%"}}
    />
  );
};

export default YearlyCommitActivityPlot;