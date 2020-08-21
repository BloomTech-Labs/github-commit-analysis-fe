import React, { useState, useEffect } from 'react';
import axios from 'axios';
import createPlotlyComponent from 'react-plotly.js/factory';
import { useAppState } from '../../context/app-state-context';

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const DailyCommitsPlot = (props) => {
  const [data, setData] = useState({})

  const {
    state: { user },
  } = useAppState();

  useEffect(() => {
    axios
    .get(`https://www.ghsuccessapi.com/visualization/daily-commits/${props.username}/${props.repoName}`, {
      headers: { Authorization: `${user.accessToken}`}
    })
    .then((response) => {
      setData(JSON.parse(response.data));
    })
    .catch((err) => {
      console.log("Error:", err);
    });
  }, [props.username, props.repoName, user.accessToken, user]);

  return (
    <Plot
      data={[
        {
          x: data.day,
          y: data.commits,
          type: "bar",
        },
      ]}
      layout={{
        title: `Last Week's Daily Commits:` +
        `<br>` + 
        `${props.repoName}`,
        yaxis: {
          title: "Total Commits",
        },
      }}
      useResizeHandler={true}
      style={{width: "100%", height: "100%"}}
    />
  );
};

export default DailyCommitsPlot;