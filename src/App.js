
import './App.css';

import pirate1 from './photos/Studio-Project.png'
import pirate2 from './photos/pirate1.jpg'

import SQL from './photos/SQLDatabase.jpg'

import leadSigma from './photos/leadSigma1.png'

import dsm from './photos/dsm.png'
import gli from './photos/gli.png'
import ortho from './photos/ortho.png'


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
              <p>As a Sophomore, myself and a team of three others decided to build a game, despite the professor advising heavily against it. With JavaFX, we were able to create a 'Pirate Adventure Game'. The objective was to find the treasure and get
                past a bunch of obstacles on the way. We integrated random events like giant squids, whirlpools, and other classy piratey things. A player would was able to traverse a map, and read an interesting story along the way while struggling to keep resources
                  and crewmates from dissapearing.
              </p>
              <img id="pirate2" src={pirate2} />
              <a href={'https://github.com/isaacmichael/Adventure-Game/tree/main/TeamEPirateAdventure2.0'} target={'_blank'}>
                  <button>Github Link</button>
              </a>
              <p>
                  By the end of the semester, it turned out much better than I had expected considering the groups experience level.
              </p>
          </div>

          <div className="item2">
              <p>Bug Tracker</p>
              <img src="https://th.bing.com/th/id/R.95307d1659e1cb5122fe2d28b0d12ea8?rik=%2fPxCJe%2bFcVTfdg&riu=http%3a%2f%2fwww.sjcnet.co.uk%2fcontent%2fimages%2f2016%2f05%2fAspDotNet.png&ehk=P8aHZ9bIBsD%2fFRmwr%2f703h4YC6KiMAo9DZquYS%2fpzbY%3d&risl=&pid=ImgRaw&r=0" alt=""
                   loading="lazy" className="featured-img"></img>
              <p>Created a bug tracker with the ASP.net web application. There were three types of users, Testers, Developers and Managers. Testers could submit bug tickets which would then be evaluated
                by the manager. If the manager deemed the bug as an issue, it could be set to high, medium, or low severity levels. From there the Manager would send the bug ticket to a developer
                  of their choosing. The developer can login and see the issue and once it is solved, the dev can submit a report on how it was solved and other factors. All passwords used in the database were encrypted.

              </p>
              <a href={'https://github.com/isaacmichael/Web-Programming-Midterm/tree/master/MidtermProject'} target={'_blank'}>
                <button>Github Link</button>
              </a>
          </div>

          <div className="item3">
              <p>Lead Sigma Onboarding</p>
              <img id="leadSigma1" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/i2z8uizotory1rtc3nay" alt=""
                   loading="lazy" className="featured-img"></img>
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
                   loading="lazy" className="featured-img"></img>
              <p>Created a database Sophomore year to keep track of a factory's inventory</p>
              <img id="sql1" src={SQL} width='500px'/>
              <p>
                  The database was made using Oracle's DBMS in a team of three.
              </p>

          </div>

          <div className="item5">
              <p>Itunes API</p>
              <img src="https://th.bing.com/th/id/R.95307d1659e1cb5122fe2d28b0d12ea8?rik=%2fPxCJe%2bFcVTfdg&riu=http%3a%2f%2fwww.sjcnet.co.uk%2fcontent%2fimages%2f2016%2f05%2fAspDotNet.png&ehk=P8aHZ9bIBsD%2fFRmwr%2f703h4YC6KiMAo9DZquYS%2fpzbY%3d&risl=&pid=ImgRaw&r=0" alt=""
                   loading="lazy" className="featured-img"></img>
              <p>Created a Web application in ASP.net to search and retrieve data from Itunes' API
                A user could enter any search term and modify the search category through a dropdown list. Categories are Movies, Music, or Software. From there all search results from the Itunes API would be displayed.

              </p>
              <a href={'https://github.com/isaacmichael/Itunes-search/tree/master/Project4'} target={'_blank'}>
                  <button>Github Link</button>
              </a>
          </div>

          <div className="item6">
              <p>Machine Learning</p>
              <img src="https://th.bing.com/th/id/R.9a8bd0fa820cc069f049829e093c016e?rik=NvH0xe7mTUlgvQ&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f289-2896071_python-logo-png-165709.png&ehk=aW7Pb2gc%2bysSZQp61jQfl77%2fq7MPVUC%2fFeEA%2bQt0R5I%3d&risl=&pid=ImgRaw&r=0" alt=""
                   loading="lazy" className="featured-img"></img>
              <p>I am currently diving into machine learning applications with jupiter notebook. Looking into tensor operations
                  to speed up the calculation of large datasets. I hope to gain a functional understanding of data Analysis and apply them to business and personal applications.
                  My knowledge is surface level at the moment, but through Codecademy and my handy Kindle, I'm sure that I will make it far.
              </p>
              <a href={'https://github.com/isaacmichael/PythonMachineLearning'} target={'_blank'}>
                  <button>Github Link</button>
              </a>
          </div>

          <div className="item7">
              <p>Drone Photogrammetry</p>
              <img src="https://th.bing.com/th/id/R.9a8bd0fa820cc069f049829e093c016e?rik=NvH0xe7mTUlgvQ&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f289-2896071_python-logo-png-165709.png&ehk=aW7Pb2gc%2bysSZQp61jQfl77%2fq7MPVUC%2fFeEA%2bQt0R5I%3d&risl=&pid=ImgRaw&r=0" alt=""
                   loading="lazy" className="featured-img"></img>
              <p>I am currently diving into machine learning applications with jupiter notebook. Looking into tensor operations
                  to speed up the calculation of large datasets. I hope to gain a functional understanding of data Analysis and apply them to business and personal applications.
                  My knowledge is surface level at the moment, but through Codecademy and my handy Kindle, I'm sure that I will make it far.
              </p>
              <a href={'https://github.com/isaacmichael/PythonMachineLearning'} target={'_blank'}>
                  <button>Github Link</button>
              </a>
          </div>

          <div className="item8">
              <p>CNC</p>
              <img src="https://th.bing.com/th/id/R.9a8bd0fa820cc069f049829e093c016e?rik=NvH0xe7mTUlgvQ&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f289-2896071_python-logo-png-165709.png&ehk=aW7Pb2gc%2bysSZQp61jQfl77%2fq7MPVUC%2fFeEA%2bQt0R5I%3d&risl=&pid=ImgRaw&r=0" alt=""
                   loading="lazy" className="featured-img"></img>
              <p>I am currently diving into machine learning applications with jupiter notebook. Looking into tensor operations
                  to speed up the calculation of large datasets. I hope to gain a functional understanding of data Analysis and apply them to business and personal applications.
                  My knowledge is surface level at the moment, but through Codecademy and my handy Kindle, I'm sure that I will make it far.
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
