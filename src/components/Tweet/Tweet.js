import React from "react";
import { Card, CardContent } from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import moment from "moment";

import "./Tweet.scss";

export default function Tweet(props) {
  const {
    tweet: { name, tweet, time },
    index,
    deleteTweet
  } = props;

  return (
    <Card className="tweet">
      <CardContent>
        <div className="tweet-header">
          <h5>{name}</h5>
          <DeleteTwoToneIcon
            onClick={() => {
              deleteTweet(index);
            }}
          />
        </div>
        <p>{tweet}</p>
        <div className="tweet-date-add">
          {moment(time).format("DD/MM/YYYY HH:mm:ss")}
        </div>
      </CardContent>
    </Card>
  );
}
