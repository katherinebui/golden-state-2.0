import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class Fireworks extends React.Component {
  render() {
    const { date, opp, time, tv } = this.props.schedule;
    const displayFireworks = () => {
      if (this.props.schedule.date.length == 0) {
        return <h1 className="no">NO!</h1>;
      } else {
        sendSMS();
        return (
          <div>
            <p className="details">
              <span>
                <label className="label">Date:</label> {date} PST
              </span>
              <span>
                <label className="label">Time:</label>
                {time}
              </span>
              <span>
                <label className="label">Opponent:</label> {opp}
              </span>
              <span>
                <label className="label">Channel:</label> {tv}
              </span>
            </p>
            <div className="fireworks">
              <div className="before" />
              <div className="after" />
            </div>
          </div>
        );
      }
    };

    const sendSMS = () => {
      const url = 'https://qwphv30y2e.execute-api.us-west-1.amazonaws.com/prod/sms';
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json'
      };
      var data = {
        to_number: process.env.MY_PHONE_NUMBER,
        from_number: '+18589436474',
        message: `Warriors are playing today on ${time} against ${opp} on channel ${tv}`
      };
      var JSONdata = JSON.stringify(data);
      const request = axios
        .post(url, JSONdata, headers)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    };
    return <div>{displayFireworks()}</div>;
  }
}

export default Fireworks;
