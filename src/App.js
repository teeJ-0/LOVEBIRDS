import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  return (
    <body>
      <section class="signin">
        <div class = "si-container"> 
          <input class="si-buttonplace" type = "text" placeholder="Email"></input> 
          <input class="si-buttonplace" type = "password" placeholder="Password"></input> 
          <div class="si-r-buttoncontainer">
            <button class="sibutton"> SIGN IN </button>
            <button onclick="show()" class="rbutton"> REGISTER </button>
          </div>
        </div>
      </section>
      <section id="rdiv" class="register">
        <div class="r-container"> 
          <input class="r-buttonplace" type = "text" placeholder="Name"></input> 
          <input class="r-buttonplace" type = "text" placeholder="Email"></input> 
          <input class="r-buttonplace" type = "text" placeholder="Username"></input> 
          <input class="r-buttonplace" type = "password" placeholder="Password"></input> 
          <input class="r-buttonplace" type = "password" placeholder="Confirm Password"></input> 
            <div><i onclick="hide()" class="fa-solid fa-rectangle-xmark fa-xl"></i>
              <button class="submit-button">SUBMIT</button>
            </div>
        </div>
      </section>
    </body>
  );
}

export default App;
