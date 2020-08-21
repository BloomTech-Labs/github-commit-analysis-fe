import React, { useState, useEffect } from "react";
import axios from "axios";
import createPlotlyComponent from "react-plotly.js/factory";
import { useAppState } from "../../context/app-state-context";
import { Spinner } from "../../components";

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

const IssueActivityPlot = (props) => {
  const [data, setData] = useState();

  const {
    state: { user },
  } = useAppState();

  useEffect(() => {
    async function getData() {
      await axios
        .get(
          `https://ghsuccessapi.com/visualization/issue-activity/7/${props.username}/${props.repoName}`,
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
    getData();
  }, [props.username, props.repoName, user.accessToken, user]);

  return (
    <div>
      {data ? (
        <Plot
          data={[
            {
              x: data.open_issues.created_at,
              y: data.open_issues.issue_count,
              type: "bar",
              name: "Open Issues",
              marker_color: "green",
            },
            {
              x: data.closed_issues.created_at,
              y: data.closed_issues.issue_count,
              type: "bar",
              name: "Closed Issues",
              marker_color: "red",
            },
          ]}
          layout={{
            title:
              `<b>Issue Activity for the Past 30 Days:</b>` +
              "<br>" +
              `${props.repoName}`,
            barmode: "stack",
            xaxis: {
              title: "Date Created",
            },
            yaxis: {
              title: "Count",
            },
            titlefont: {
              size: 12,
            },
          }}
          useResizeHandler={true}
          style={{ width: "100%", height: "100%", font: "3px" }}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default IssueActivityPlot;
