// const myPromise = new Promise((resolve, reject) => {
//   if (false) {
//     setTimeout(() => {
//       resolve('I have succeeded');
//     }, 1000);
//   } else {
//     reject('I have failed');
//   }
// });

// myPromise
//   .then(value => console.log(value))
//   .catch(rejectValue => console.log(rejectValue));

  import React, { Component } from 'react';

class NameFilterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Alice', 'Bob', 'Amy', 'David', 'Alex', 'Eve'],
      filteredNames: []
    };
  }

  filterNames = (filterSubstring) => {
    const { names } = this.state;
    const filteredNames = names.filter(name => !name.includes(filterSubstring));
    this.setState({ filteredNames });
  };

  render() {
    const { names, filteredNames } = this.state;

    return (
      <div>
        <h2>Names List</h2>
        <ul>
          {filteredNames.length > 0
            ? filteredNames.map((name, index) => (
                <li key={index}>{name}</li>
              ))
            : names.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
        </ul>
        <button onClick={() => this.filterNames('an')}>Filter out names containing 'an'</button>
      </div>
    );
  }
}

export default NameFilterClass;
