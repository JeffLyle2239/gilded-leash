import React, { Component } from 'react';
import '../style/customerroute.css'

class NewCustomer extends Component {
  state = {
    fullname: '',
    address: '',
    email: '',
    phonenumber: '',
    plan: '',
    cost: 0,
    formError: ''
  };

  // this will handle your text inputs in their fields
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  // this will handle what the plans are and the associated cost
  handlePlanChange = (e) => {
    const selectedPlan = e.target.value;
    let cost = 0;

    if (selectedPlan === 'the Untamed Tale') cost = 5000;
    else if (selectedPlan === 'the Wild Narrative') cost = 7500;
    else if (selectedPlan === 'the Odyssey') cost = 10000;

    this.setState({
      plan: selectedPlan,
      cost: cost
    });
  };

  // form submission
  handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, address, email, phonenumber, plan } = this.state;

    // errors that will validate info put into fields
    if (!fullname || !address || !email || !phonenumber || !plan) {
      this.setState({ formError: 'All fields are required!' });
      return;
    }
    if (isNaN(phonenumber)) {
      this.setState({ formError: 'Phone number must be a valid number!' });
      return;
    }

    // passes data?
    this.props.addCustomer(this.state);

    // resets the input fields back to their original blank state
    this.setState({
      fullname: '',
      address: '',
      email: '',
      phonenumber: '',
      plan: '',
      cost: 0,
      formError: ''
    });
  };

  render() {
    const { fullname, address, email, phonenumber, plan, cost, formError } = this.state;

    return (
      <div className="NewCustomer">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            id="fullname"
            value={fullname}
            onChange={this.handleChange}
          />

          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={this.handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          />

          <label htmlFor="phonenumber">Phone Number:</label>
          <input
            type="text"
            id="phonenumber"
            value={phonenumber}
            onChange={this.handleChange}
          />

          <fieldset>
            <h3>Select a Plan:</h3>
            <label>
              <input
                type="radio"
                value="the Untamed Tale"
                checked={plan === 'the Untamed Tale'}
                onChange={this.handlePlanChange}
              />
              The Untamed Tale ($5,000)
            </label>
            <label>
              <input
                type="radio"
                value="the Wild Narrative"
                checked={plan === 'the Wild Narrative'}
                onChange={this.handlePlanChange}
              />
              The Wild Narrative ($7,500)
            </label>
            <label>
              <input
                type="radio"
                value="the Odyssey"
                checked={plan === 'the Odyssey'}
                onChange={this.handlePlanChange}
              />
              The Odyssey ($10,000)
            </label>
          </fieldset>

          <p>Selected Plan Cost: ${cost}</p>

          <button type="submit">Ready to Dream</button>

          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    );
  }
}

export default NewCustomer;
