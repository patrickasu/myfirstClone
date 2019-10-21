import React, { Component } from 'react';

class Contact extends Component {

  state = {
    email: {
      name: '',
      sender: '',
      subject: '',
      text: ''
    }
  }

  sendEmail = _ => {
    const { email } = this.state;
    fetch(`/api/ourcontact?sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
      .catch(err => console.error(err))
      window.location = '/';
  }

  render() {
    const { email } = this.state;
    return (
    	<div className="main-content">
        <div className="contact-section">
		      <form className="contact-form" action="POST" data-netlify="true">
          <h2>CONTACT US</h2>
            <hr/>
		        <input className="msg" value={email.name} placeholder="Enter Your Name" onChange={e => this.setState({ email: { ...email, name: e.target.value } })} /> <br/>
		        <input className="msg" value={email.sender} placeholder="Email" onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} /> <br/>
		        <input className="msg" value={email.subject} placeholder="Subject" onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} /> <br/>
		        <textarea className="msg" value={email.text} placeholder="Message" onChange={e => this.setState({ email: { ...email, text: e.target.value } })} /> <br/>
		        <button className="msg-btn" onClick={this.sendEmail}>Send Message</button>
	        </form>
      	</div>
      </div>
    );