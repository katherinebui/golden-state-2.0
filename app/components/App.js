import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import firebase from '../firebase';
// import styles from '../public/scss/styles.scss';
// import fireworks from '../public/scss/fireworks.scss';
import Fireworks from './Fireworks';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      schedule: {
        date: '',
        opp: '',
        time: '',
        tv: ''
      }
    };
  }

  componentDidMount() {
    let today = new Date();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    let yyyy = today.getFullYear();

    const now = `${mm}/${dd}/${yyyy}`;

    const rootRef = firebase
      .database()
      .ref()
      .orderByChild('Date');

    rootRef.on('child_added', snap => {
      const date = snap.val().Date;
      const opp = snap.val().Opponent;
      const time = snap.val().Time;
      const tv = snap.val().TV || 'TBD';

      if (now == date) {
        this.setState({
          schedule: {
            date: date,
            opp: opp,
            time: time,
            tv: tv
          }
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Fireworks schedule={this.state.schedule} />
      </div>
    );
  }
}

export default App;
