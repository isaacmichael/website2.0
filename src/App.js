
import './App.css';

import logo from './Studio-Project.png'

function App() {
  return (
      <body>
      <head>
          <title>Isaac</title>
          <meta name="viewport" content="width=device-width ,initial-scale=1"></meta>

      </head>


      <div class="head">
          <h1 id="home">Isaac Pearson</h1>
          <h1 id="jobDescription">SOFTWARE DEVELOPER</h1>
          <p id="REACT">MADE IN REACT</p>
          <p id="AWS">HOSTED BY AWS</p>
          <p id="DEPLOYMENT">CONTINUOUSLY DEPLOYED</p>


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
          <section>
      <div class="grid">

          <div class="item1">
            <p>Pirate Adventure</p>
              <img src={logo} alt="nothing" width="100" height="auto"
                   className="featured-img"></img>
              <p>Text Describing</p>
          </div>
          <div className="item2">
              <p>Bug Tracker</p>
              <img src="https://th.bing.com/th/id/R.98bc05b18a4eec5695a48743ed4d19d0?rik=iubQYreSbHWB3Q&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fsoftware-bug-icon-62.png&ehk=DdZ75HyCAq2DViJTdRxjkm8qC7dp3SSzQfQ5VcAg2qY%3d&risl=&pid=ImgRaw&r=0" alt=""
                   className="featured-img"></img>
              <p>Text Describing</p>
          </div>
          <div className="item3">
              <p>Lead Sigma Onboarding</p>
              <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/i2z8uizotory1rtc3nay" alt=""
                   className="featured-img"></img>
              <p>Text Describing</p>
          </div>
          <div className="item4">
              <p>MySQL database</p>
              <img src="https://th.bing.com/th/id/R.4de0f3ba21ff9e7a4a74731d7e85b066?rik=azi2%2bcqlmhgugQ&riu=http%3a%2f%2f24x7servermanagement.com%2fwp-content%2fuploads%2f2016%2f09%2fmysql-logo.jpg&ehk=1KikdiB3AYF9Nsh1Fd%2fnw1I27VDdBD9FI%2f2%2fOpVVJDM%3d&risl=&pid=ImgRaw&r=0" alt=""
                   className="featured-img"></img>
              <p>Text Describing</p>
          </div>
          <div className="item5">
              <p>Itunes API</p>
              <img src="https://th.bing.com/th/id/R.bff36f9b869fa25287ec69b06eb47224?rik=FmPo2Xqfn7fOZw&riu=http%3a%2f%2fwww.georgegaldorisi.com%2fwp-content%2fuploads%2fiTunes-Store-icon.png&ehk=4wqaFdI6mThJbegQD8oNvBCNzbkMrjdKDNNgQ4wPA88%3d&risl=&pid=ImgRaw&r=0" alt=""
                   className="featured-img"></img>
              <p>Text Describing</p>
          </div>
          <div className="item6">
              <p>Machine Learning</p>
              <img src="https://th.bing.com/th/id/R.9a8bd0fa820cc069f049829e093c016e?rik=NvH0xe7mTUlgvQ&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f289-2896071_python-logo-png-165709.png&ehk=aW7Pb2gc%2bysSZQp61jQfl77%2fq7MPVUC%2fFeEA%2bQt0R5I%3d&risl=&pid=ImgRaw&r=0" alt=""
                   className="featured-img"></img>
              <p>Text Describing</p>
          </div>
      </div>
          </section>
      <div class= "section1" id="summary">
          <h2>ABOUT ME</h2>
          <p>
              I live in Marion, IN with my Wife, Victoria.<br></br>
              I am a Ball State graduate, Class of 2022 with a B.S in Computer Science. <br></br>
              In my free time I enjoy reading how to become a better
              software developer alongside completing courses at Codecademy to sharpen my skills.<br></br>
              Aside from programming, I operate a consumer grade CNC, 3D model and print, and create high quality orthomosaics (maps) to better show
              areas of high and low elevation as well as differences in vegetation within farmland.


          </p>
      </div>

      <footer class="footer">
          <span>
              <p>Isaac Pearson</p>
              <p>5/20/21</p>
          </span>
      </footer>
      </div>
      </body>

  );
}

export default App;
