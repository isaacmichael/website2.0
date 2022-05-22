
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
          </div>
          <div className="item2">
              <p>Bug Tracker</p>
              <img src="https://th.bing.com/th/id/R.98bc05b18a4eec5695a48743ed4d19d0?rik=iubQYreSbHWB3Q&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fsoftware-bug-icon-62.png&ehk=DdZ75HyCAq2DViJTdRxjkm8qC7dp3SSzQfQ5VcAg2qY%3d&risl=&pid=ImgRaw&r=0" alt=""
                   className="featured-img"></img>
              <p>Created a bug tracker with ASP.net web application. Uses Microsoft Database and encrypted all sensitive data</p>
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
          </div>
          <div className="item4">
              <p>Oracle Database</p>
              <img src="https://th.bing.com/th/id/R.f8b2bf7eb9f8a1ee124902bdc5da87ac?rik=jhQZ7841qr8Ywg&riu=http%3a%2f%2ferpinnews.com%2fwp-content%2fuploads%2f2017%2f10%2foracle-logo.png&ehk=U2x6i5WYcgGzSdSgE3UbWdJFgqaV9UyGA6xcg5F0Ffo%3d&risl=&pid=ImgRaw&r=0" alt=""
                   className="featured-img"></img>
              <p>Created a database sophomore year to keep track of a factory's inventory</p>
              <img id="sql1" src={SQL} width='500px'/>
          </div>
          <div className="item5">
              <p>Itunes API</p>
              <img src="https://th.bing.com/th/id/R.bff36f9b869fa25287ec69b06eb47224?rik=FmPo2Xqfn7fOZw&riu=http%3a%2f%2fwww.georgegaldorisi.com%2fwp-content%2fuploads%2fiTunes-Store-icon.png&ehk=4wqaFdI6mThJbegQD8oNvBCNzbkMrjdKDNNgQ4wPA88%3d&risl=&pid=ImgRaw&r=0" alt=""
                   className="featured-img"></img>
              <p>Created a Web application in ASP.net to search and retrieve data from Itunes' API</p>
          </div>
          <div className="item6">
              <p>Machine Learning</p>
              <img src="https://th.bing.com/th/id/R.9a8bd0fa820cc069f049829e093c016e?rik=NvH0xe7mTUlgvQ&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f289-2896071_python-logo-png-165709.png&ehk=aW7Pb2gc%2bysSZQp61jQfl77%2fq7MPVUC%2fFeEA%2bQt0R5I%3d&risl=&pid=ImgRaw&r=0" alt=""
                   className="featured-img"></img>
              <p>Currently researching machine learning applications with jupiter notebook. Looking into tensor operations
                  to speed up the calculation of large datasets.
              </p>
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
