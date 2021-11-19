import React from "react";
import "./Countdown.css";

export class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0
    };
  }

  weddingTime = new Date(2022, 11, 28, 16, 0);

  componentDidMount() {
    this.getTimeUntil();
    this.interval = setInterval(() => this.getTimeUntil(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTimeUntil = () => {
    const currentTime = new Date();
    const weddingTime = new Date(2022, 11, 28, 16, 0);
    const timeUntil = weddingTime - currentTime;

    // const seconds = Math.floor((timeUntil / 1000) % 60);
    // const minutes = Math.floor((timeUntil / 1000 / 60) % 60);
    // const hours = Math.floor((timeUntil / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
    this.setState({ days });
  };

  render() {
    return (
        <div id="countdown">
          <span>{this.state.days} days</span>
          <span id="until"> until </span>
          <span id="ido">María del Mar and Robert Edward Burton get married</span>
          <span id="ido">December 28th, 2022</span>
      </div>
    );
  }
}

