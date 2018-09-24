import React, { Component } from 'react';
import { WORDS } from '../Form/formFields';

export default class Title extends Component {
  state = { activeIndex: 0 };

  componentDidMount() {
    setInterval(
      () =>
        this.setState(prevState => ({
          activeIndex: prevState.activeIndex + 1,
        })),
      4000
    );
  }

  render() {
    const { activeIndex } = this.state;
    const index = activeIndex % WORDS.length;
    return (
      <h1 id="title">
        Find A Partner To
        <span id="word">{WORDS[index].word}</span>
      </h1>
    );
  }
}
