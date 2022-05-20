import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <html>
      <head>
          <title>Isaac</title>
          <meta name="viewport" content="width=device-width ,initial-scale=1"></meta>

      </head>

      <body>
      <div class="head">
          <h1 id="home">Isaac Pearson</h1>
          <h1 id="jobDescription">SOFTWARE DEVELOPER</h1>
          <p id="REACT">MADE IN REACT</p>
          <p id="AWS">HOSTED BY AWS</p>
          <p id="DEPLOYMENT">USES CONTINUOUS DEPLOYMENT</p>


      </div>
      <div class="main">
          <div class="introParagraph">
              <p>Hello, and welcome to my website! Here, I will showcase projects that I am currently working on as well as this website<br></br>
                  Below, will be a mixture of school projects, agricultural analysis and other random things I find interesting.<br></br>
                    <br></br>
                  This static website is stored in Github and deployed through AWS' Amplify service and the DNS is provided by GoDaddy. Each commit triggers a series of events. <br></br>
                  A test will be through Github's Actions for Node.js. After that, the product is sent to AWS and it automatically rebuilt and deployed.

              </p>
          </div>
      <div class="grid">
          <h1>PORTFOLIO</h1>
          <div class="item1">
            <p>Pirate Adventure</p>
              <img src="https://static-assets.codecademy.com/Courses/Learn-CSS/Variables/Lesson/band1.jpg" alt=""
                   className="featured-img"></img>
              <p>Text Describing</p>
          </div>
          <div className="item2">
              <p>Bug Tracker</p>
              <img src="https://static-assets.codecademy.com/Courses/Learn-CSS/Variables/Lesson/band1.jpg" alt=""
                   className="featured-img"></img>
              <p>Text Describing</p>
          </div>
          <div className="item3">
              <p>Lead Sigma Onboarding</p>
              <img src="https://static-assets.codecademy.com/Courses/Learn-CSS/Variables/Lesson/band1.jpg" alt=""
                   className="featured-img"></img>
              <p>Text Describing</p>
          </div>
          <div className="item4">
              <p>MySQL database</p>
              <img src="https://static-assets.codecademy.com/Courses/Learn-CSS/Variables/Lesson/band1.jpg" alt=""
                   className="featured-img"></img>
              <p>Text Describing</p>
          </div>
          <div className="item5">
              <p>Itunes API</p>
              <img src="https://static-assets.codecademy.com/Courses/Learn-CSS/Variables/Lesson/band1.jpg" alt=""
                   className="featured-img"></img>
              <p>Text Describing</p>
          </div>
          <div className="item6">
              <p>Machine Learning</p>
              <img src="https://static-assets.codecademy.com/Courses/Learn-CSS/Variables/Lesson/band1.jpg" alt=""
                   className="featured-img"></img>
              <p>Text Describing</p>
          </div>
      </div>
      <div class= "section1" id="summary">
          <h2>ABOUT ME</h2>
          <p>
              sldmfhnldksjfhlkjdshfjkl
              sdkjhfgbjdkshfgdkjhsfgkjh
              skjnhgbdfvbjkhdsgfjkhdsgfkjhdsgkjhfgdshjkfgjhkdsfgkjhdsfgkjhfgdehukjg
              dl;ksfhjlkjdshfkljsdhkjdshklfhjklsdfh=
              dskjfhlkjdshflkdshlfkjhdsjklfhds
              dskjfhlkjdshflkdshlfkjhdsjklfhds
          </p>
      </div>

      <footer>
          footer
      </footer>
      </div>
      </body>
      </html>
  );
}

export default App;
