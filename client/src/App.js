import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    title: '',
    body: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (event) => {
    const { title, body } = this.state;

    event.preventDefault();

    let payload = {
      title,
      body
    }

    axios({
      url: '/blog/add',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data sent');
    })
    .catch((error) => {
      console.log('error');
    })
  }
  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-input">
          <input type="text" placeholder="Enter Title" name="title" value={title} onChange={this.handleChange}/>
        </div>
        <div className="form-input">
          <textarea name="body" placeholder="Enter Description" value={body} onChange={this.handleChange}></textarea>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
