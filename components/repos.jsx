import React from 'react';
import { connect } from 'react-redux';
import { getRepos } from '../actions';

import $ from 'jquery'

var Repos = React.createClass({
  getInitialState: function(){
    return {
      repos: []
    }
  },
  componentDidMount: function() {
    this.props.dispatch(getRepos())
  },
  render: function(){
    return (
      <div>
        <h1>Repos</h1>
        <ul>
        {this.props.repos.map((repo) => {
           return (<li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>)
          })
        }
        </ul>
      </div>
    )
  }
});

function mapStateToProps(data) {
  return { repos: data.repos };
}

export default connect(mapStateToProps)(Repos)