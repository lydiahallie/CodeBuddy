import React, { Component } from 'react';
import { WORDS } from '../Form/formFields';

export default class Title extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    }
  }

  componentDidMount() {
    setInterval(() => this.setState({activeIndex: this.state.activeIndex + 1}), 4000)
  }

  render() {
    const index = this.state.activeIndex % WORDS.length;
    const style = {
      color: `${WORDS[index].color}`,
      textShadow: `${WORDS[index].color} 0px 0px 10px`,
    }
    return <h1 id="title">Find A Partner To <span id="word" style={style}>{WORDS[index].word}</span></h1>
  }
};