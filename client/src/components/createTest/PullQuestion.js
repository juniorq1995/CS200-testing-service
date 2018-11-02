import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PullingOptions from './PullingOptions';
import QuestionList from './QuestionList';
// pull question page from CreateTest component
export default class PullQuestion extends Component {
  render() {
    return (
      <div>
        <PullingOptions shuffleQuestionList={this.props.shuffleQuestionList} />
        <QuestionList questionList={this.props.questionList} />
      </div>
    );
  }
}

PullQuestion.propTypes = {
  shuffleQuestionList: PropTypes.func.isRequired,
  questionList: PropTypes.array.isRequired,
};