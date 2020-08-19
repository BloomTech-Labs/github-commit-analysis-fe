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
    .get(`http://githubsuccessapi-env.eba-8utmmuhi.us-east-1.elasticbeanstalk.com/visualization/daily-commits/${props.username}/${props.repoName}`, {
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
        width: "100%",
        title: `Last Week's Daily Commits: ${props.repoName}`,
        yaxis: {
          title: "Total Commits",
        },
      }}
    />
  );
};

export default DailyCommitsPlot;