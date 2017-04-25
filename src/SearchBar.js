import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
    text: '',
}

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      text: INITIAL_STATE.text,
    }
  }

  _handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
    this.props._onVideoSearch(this.state.text);
  }

  render() {
    return (
      <div>
        {this.state.text}
        <form action={this._handleSubmit}>
          <input type="text" onChange={this._handleInputChange.bind(this)} value={this.state.text} placeholder="Search You Tube"/>
          <button>Search</button>
        </form>
      </div>
    )
  }
};
