import React, { Component } from 'react';
import { setItem } from '../redux/actions/postActions';
import { connect } from 'react-redux';


class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;

    this.props.dispatch(setItem(title, message));
    this.getTitle.value = '';
    this.getMessage.value = '';
  };

  render() {
    return (
      <div className='col-md-12'>
        <div>
          <h4>Create Post</h4>
          <form className='postForm' onSubmit={this.handleSubmit}>
            <input required type="text" placeholder="Enter Post Title" ref={(input) => this.getTitle = input} />
            <textarea required rows="3" cols="28" placeholder="Enter Post" ref={(input) => this.getMessage = input} />
            <button className='btn btn-primary'>Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(PostForm);