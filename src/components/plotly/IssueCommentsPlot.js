import React, { useState, useEffect } from 'react';
import axios from 'axios';
import createPlotlyComponent from 'react-plotly.js/factory';
import { useAppState } from '../../context/app-state-context';

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const IssueCommentsPlot = (props) => {

  const [data, setData] = useState({})

  const {
    state: { user },
  } = useAppState();

  useEffect(() => {
    async function getData () {
      await axios
      .get(`https://www.ghsuccessapi.com/visualization/issue-comments/${props.username}/${props.repoName}`, {
        headers: { Authorization: `${user.accessToken}`}
      })
      .then((response) => {
        setData(JSON.parse(response.data));
      })
      .catch((err) => {
        console.log("Error:", err);
      });
    }
    getData();
  }, [props.username, props.repoName, user.accessToken, user]);

  return (
    <Plot
      data={[
        {
          x: data.created_at,
          y: data.total_comments,
          type: "scatter",
          text: data.body_length,
          mode: "markers",
          marker: {
            size: 10,
            // size: props.data.body_length, 
          //   sizemode: 'area',
          //   sizeref: 2*Math.max(props.data.body_length)/(40**2),
          //   sizemin: 4
          },
          hovertemplate:
          "Date Created: %{x}<br>" +
          "Body Length: %{text}<br>" +
          "Total Comments: %{y}<br>" +
          "<extra></extra>",
        },
      ]}
      layout={{
        title: `Issue Comments for the Past 7 Days:` +
        `<br>` + 
        `${props.repoName}`,
        barmode: "stack",
        xaxis: {
          title: "Issue Date Created"
        },
        yaxis: {
          title: "Total Comments",
        },
      }}
      useResizeHandler={true}
      style={{width: "100%", height: "100%"}}
    />
  );
};

export default IssueCommentsPlot;