import React, { Component, useState } from "react";

import WheelComponent from "./weel";
import "react-wheel-of-prizes/dist/index.css";

import TrPortal from "./portal";
import Confetti from "react-confetti";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portal: false,
      show: false
    };
  }

  render() {
    const segments = [
      "better luck next time",
      "won 70",
      "won 10",
      "better luck next time",
      "won 2",
      "won uber pass",
      "better luck next time",
      "won a voucher",
      "How many years?",
      "better luck next time",
      "won 2",
      "won uber pass",
      "better luck next time",
      "won a voucher",
      "How many years?",
      "better luck next time",
      "won 2",
      "won uber pass",
      "better luck next time",
      "won a voucher"
    ];

    const weelColors = () => {
      let arr = [];
      let colors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
      segments.forEach((el) => {
        let color = colors.shift();
        arr.push(color);
        colors.push(color);
      });

      return arr;
    };
    const segColors = weelColors();

    // const rand = () => {
    //   return setTimeout(() => {
    //     return segments[Math.floor(Math.random() * segments.length)];
    //   }, 5000);
    // };
    const onFinished = (winner) => {
      this.setState({ portal: false, show: winner });
    };
    return (
      <div>
        {this.state.show && <Confetti width={3600} height={695} />}
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment={"won 70"}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="gray"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={true}
        />
        {this.state.portal ? <TrPortal /> : null}
        {this.state.show && (
          <div
            class="modal"
            style={{ display: "block" }}
            tabindex="-1"
            role="dialog"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-body" style={{ textAlign: "center" }}>
                  <p>Woohoo you've Won {this.state.show}</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    style={{ margin: "auto" }}
                    class="btn btn-success"
                    onClick={() => this.setState({ show: false })}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
