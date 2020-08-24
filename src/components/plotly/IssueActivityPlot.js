import React, { useState, useEffect } from 'react';
import axios from 'axios';
import createPlotlyComponent from 'react-plotly.js/factory';
import { useAppState } from '../../context/app-state-context';
// import { Spinner } from '../../components';
import { GoGitCommit } from "react-icons/go";

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const Spinner = () => <GoGitCommit className="spinnerPlot" />;

const IssueActivityPlot = (props) => {
  const [data, setData] = useState()
  const {
    state: { user },
  } = useAppState();

  useEffect(() => {
    async function getData () {
      await axios
      .get(`https://www.ghsuccessapi.com/visualization/issue-activity/7/${props.username}/${props.repoName}`, {
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
    <div className="issue-activity-container">
    {data ? 
    <Plot
      data={[
        {
          x: data.open_issues.created_at,
          y: data.open_issues.issue_count,
          type: "bar",
          name: "Open Issues",
          marker_color: "green"
        },
        {
          x: data.closed_issues.created_at,
          y: data.closed_issues.issue_count,
          type: "bar",
          name: "Closed Issues",
          marker_color: "red"
        },
      ]}
      layout={{
        title: `Issue Activity for the Past 7 Days:` +
        `<br>` + 
        `${props.repoName}`,
        barmode: "stack",
        xaxis: {
          title: "Date Created"
        },
        yaxis: {
          title: "Count",
        },
      }}
      useResizeHandler={true}
      style={{width: "100%", height: "100%"}}
    /> :
    <div className="spinnerPlot-container">
      <Spinner />
    </div> }
    </div>
  );
};

export default IssueActivityPlot;