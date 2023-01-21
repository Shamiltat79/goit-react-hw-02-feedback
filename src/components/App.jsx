import React from "react";
import { Component } from "react";
import styled from "styled-components";

import { SectionTittle } from "./Section title/SectionTittle";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOption";
import { Notification } from "./Notification/Notification";
import { Statistics } from "./Statistics/Statistics";

const Container = styled.div`
  width: 400px;
  text-align: center;
  margin: auto;
`

export class App extends Component {
 state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
  countTotalFeedback = ({ good, neutral, bad } = this.state) => {
        return (good + neutral + bad)
  }
  
  countPositiveFeedbackPercentage = ({ good, neutral, bad } = this.state) => {
    return (`${good / (good + neutral + bad) * 100}%`);
  }

  handleClick = (choice) => {
    this.setState(prevState => ({
      [choice]: prevState[choice] + 1
    }));
  }




  render() {
    return (
      <Container>
        <SectionTittle
          tittle="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
        </SectionTittle>
        <SectionTittle
          tittle="Statistic">
          {this.countTotalFeedback() > 0
          ? <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()} />
              :
              <Notification notification="There is no feedback" />}
        </SectionTittle>
      </Container>
    
  )
  }
 
};
