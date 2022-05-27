
import './App.css';

import pirate1 from './photos/Studio-Project.png'
import pirate2 from './photos/pirate1.jpg'

import SQL from './photos/SQLDatabase.jpg'

import leadSigma from './photos/leadSigma1.png'


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
              <h1>SOFTWARE SOLUTIONS</h1>
              <h1>PRESCRIPTION MAPPING</h1>
              <h1>CNC MACHINING</h1>
          </div>
          <h2 id="portfolio">PORTFOLIO</h2>

          <section>
      <div class="grid">

          <div class="item1">
            <p>Pirate Adventure</p>
              <img src="https://anthoncode.com/wp-content/uploads/2019/01/java-logo-png.png" alt="nothing" width="100" height="auto"
                   className="featured-img"></img>
              <p>Created during the first semester in sophomore year with a team of three. Written in Java, JavaFX for UI</p>
              <img id="pirate2" src={pirate2} />
              <a href={'https://github.com/isaacmichael/Adventure-Game/tree/main/TeamEPirateAdventure2.0'} target={'_blank'}>
                  <button>Github Link</button>
              </a>
          </div>

          <div className="item2">
              <p>Bug Tracker</p>
              <img src="https://th.bing.com/th/id/R.95307d1659e1cb5122fe2d28b0d12ea8?rik=%2fPxCJe%2bFcVTfdg&riu=http%3a%2f%2fwww.sjcnet.co.uk%2fcontent%2fimages%2f2016%2f05%2fAspDotNet.png&ehk=P8aHZ9bIBsD%2fFRmwr%2f703h4YC6KiMAo9DZquYS%2fpzbY%3d&risl=&pid=ImgRaw&r=0" alt=""
                   className="featured-img"></img>
              <p>Created a bug tracker with ASP.net web application. Uses Microsoft Database and encrypted all sensitive data</p>
              <a href={'https://github.com/isaacmichael/Web-Programming-Midterm/tree/master/MidtermProject'} target={'_blank'}>
                <button>Github Link</button>
              </a>
          </div>

          <div className="item3">
              <p>Lead Sigma Onboarding</p>
              <img id="leadSigma1" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/i2z8uizotory1rtc3nay" alt=""
                   className="featured-img"></img>
              <p>
                  Helped create and maintain a microservice for Lead Sigma in 5 iterations using an Agile Methodology.
                  Worked with Ruby on Rails to create an API with a MYSQL database for tracking
                  subscriptions and their features uses (calls, texts, emails).
                  Implemented API into existing REACT UI to track usage of a given subscription for payment
              </p>
              <img id="leadSigma2" src={leadSigma}/>
              <a href={''} target={'_blank'}>
                  <button>Github Link</button>
              </a>
          </div>

          <div className="item4">
              <p>Oracle Database</p>
              <img src="https://th.bing.com/th/id/R.f8b2bf7eb9f8a1ee124902bdc5da87ac?rik=jhQZ7841qr8Ywg&riu=http%3a%2f%2ferpinnews.com%2fwp-content%2fuploads%2f2017%2f10%2foracle-logo.png&ehk=U2x6i5WYcgGzSdSgE3UbWdJFgqaV9UyGA6xcg5F0Ffo%3d&risl=&pid=ImgRaw&r=0" alt=""
                   className="featured-img"></img>
              <p>Created a database sophomore year to keep track of a factory's inventory</p>
              <img id="sql1" src={SQL} width='500px'/>
              <a href={''} target={'_blank'}>
                  <button>Github Link</button>
              </a>
          </div>

          <div className="item5">
              <p>Itunes API</p>
              <img src="https://th.bing.com/th/id/R.95307d1659e1cb5122fe2d28b0d12ea8?rik=%2fPxCJe%2bFcVTfdg&riu=http%3a%2f%2fwww.sjcnet.co.uk%2fcontent%2fimages%2f2016%2f05%2fAspDotNet.png&ehk=P8aHZ9bIBsD%2fFRmwr%2f703h4YC6KiMAo9DZquYS%2fpzbY%3d&risl=&pid=ImgRaw&r=0" alt=""
                   className="featured-img"></img>
              <p>Created a Web application in ASP.net to search and retrieve data from Itunes' API</p>
              <a href={''} target={'_blank'}>
                  <button>Github Link</button>
              </a>
          </div>

          <div className="item6">
              <p>Machine Learning</p>
              <img src="https://th.bing.com/th/id/R.9a8bd0fa820cc069f049829e093c016e?rik=NvH0xe7mTUlgvQ&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f289-2896071_python-logo-png-165709.png&ehk=aW7Pb2gc%2bysSZQp61jQfl77%2fq7MPVUC%2fFeEA%2bQt0R5I%3d&risl=&pid=ImgRaw&r=0" alt=""
                   className="featured-img"></img>
              <p>Currently researching machine learning applications with jupiter notebook. Looking into tensor operations
                  to speed up the calculation of large datasets.
              </p>
              <a href={'https://github.com/isaacmichael/PythonMachineLearning'} target={'_blank'}>
                  <button>Github Link</button>
              </a>
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

              <p>Isaac Pearson</p>
              <p>5/20/21</p>

      </footer>
      </div>
      </body>

  );
}

export default App;
