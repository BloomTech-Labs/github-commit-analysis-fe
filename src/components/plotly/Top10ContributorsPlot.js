import React, { useState, useEffect } from 'react';
import axios from 'axios';
import createPlotlyComponent from 'react-plotly.js/factory';
import { useAppState } from '../../context/app-state-context';

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);
const Top10ContributorsPlot = (props) => {
  const [data, setData] = useState({})

  const {
    state: { user },
  } = useAppState();

  useEffect(() => {
    axios
    .get(`https://www.ghsuccessapi.com/visualization/top-10-contributors/${props.username}/${props.repoName}`, {
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
            x: data.user,
            y: data.total_commits,
            text: data.followers,
            type: "scatter",
            mode: "markers",
            marker: {
              size: 20,
              color: data.followers,
              showscale: true,
            },
            hovertemplate:
              "<b>%{x}</b><br>" +
              "Followers: %{text}<br>" +
              "<extra></extra>",
          },
        ]}
        layout={{
          title: `Top 10 All-Time Contributors:` +
          `<br>` + 
          `${props.repoName}`,
          xaxis: {
            tickangle: 45,
          },
          yaxis: {
            title: "Total Commits",
          },
        }}
        useResizeHandler={true}
        style={{width: "100%", height: "100%"}}
      />
    );
  };

export default Top10ContributorsPlot;