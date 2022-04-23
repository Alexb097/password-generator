import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charsNumber: 12,
      symbols: true,
      numbers: true,
      uppercase: true,
      password: ''
    };
  }

  plus() {
    this.setState({ charsNumber: this.state.charsNumber + 1 });
  }

  minus() {
    if(this.state.charsNumber <= 0) {
      this.setState({charsNumber: 0});
    } else {
      this.setState({ charsNumber: this.state.charsNumber - 1 })
    }
  }

  generatePassword() {
    const characters = {
      numbers: '0 1 2 3 4 5 6 7 8 9',
      symbols: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
      uppercase: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
      lowercase: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    };

    let finalCharacters = '';
    let password = '';

    for (let property in this.state) {
      if(this.state[property] === true) {
        finalCharacters += characters[property] + ' ';
      }
    }

    finalCharacters += characters.lowercase;
    finalCharacters = finalCharacters.trim();
    finalCharacters = finalCharacters.split(' ');
    for (let i = 0; i <= this.state.charsNumber; i++) {
      password += finalCharacters[Math.floor(Math.random() * finalCharacters.length)];
    }
    
    this.setState({password: password});

  }

  render() {
    return (
      <div className="container">
          <h1 className="title">Password Generator</h1>
          <div className="group">
            <span>Number of characters</span>
            <div className="counter">
              <button type="button" onClick={() => this.minus()}>
                <i className="bx bx-minus"></i>
              </button>
              <div>{this.state.charsNumber}</div>
              <button type="button" onClick={() => this.plus()}>
                <i className="bx bx-plus"></i>
              </button>
            </div>
          </div>
          <div className="group">
            <span>Include symbols?</span>
            <div className="field">
              <button type="button" 
                      className={(this.state.symbols) ? 'btn-check':'btn-check inactive'}
                      onClick={() => this.setState({symbols: !this.state.symbols})}>
                <i className="bx bx-check"></i>
              </button>
            </div>
          </div>
          <div className="group">
            <span>Include numbers?</span>
            <div className="field">
              <button type="button" 
                      className={(this.state.numbers) ? 'btn-check':'btn-check inactive'}
                      onClick={() => this.setState({numbers: !this.state.numbers})}>
                <i className="bx bx-check"></i>
              </button>
            </div>
          </div>
          <div className="group">
            <span>Include uppercase?</span>
            <div className="field">
              <button type="button" 
                      className={(this.state.uppercase) ? 'btn-check':'btn-check inactive'}
                      onClick={() => this.setState({uppercase: !this.state.uppercase})}>
                <i className="bx bx-check"></i>
              </button>
            </div>
          </div>
          <div className="group">
            <button
                    className="btn-generate"
                    onClick={() => this.generatePassword()}>
              <span>Generate password </span>
              <span><i className='bx bxs-lock-alt'></i></span>
            </button>
            <div className="password">
              {this.state.password}
              <button onClick={() => navigator.clipboard.writeText(this.state.password)} className="copy-to-clipboard">Copy</button>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
