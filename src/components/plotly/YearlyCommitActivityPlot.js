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
    .get(`http://githubsuccessapi-env.eba-8utmmuhi.us-east-1.elasticbeanstalk.com/visualization/yearly-commit-activity/${props.username}/${props.repoName}`, {
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
        width: "100%",
        title: `Yearly Commit Activity: ${props.repoName}`,
        // xaxis: {
        //   tickangle: 45,
        // },
        yaxis: {
          title: "Total Commits",
        },
      }}
    />
  );
};

export default YearlyCommitActivityPlot;