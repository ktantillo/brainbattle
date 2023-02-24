import React from 'react'; 

function NavBar(){
    return(
  
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary text-light">
        <a className="navbar-brand text-light" >Brain Battle</a>
        <button className="navbar-toggler text-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" id="homeLink"><a href="/" className="nav-link text-light" title="Return to the home screen">Home</a>
         </li>
          <li className="nav-item" id="aboutLink"> <a href="/about/" className="nav-link text-light" title="Background on the podcast">About the Brain Battle</a>
          </li>
          <li className="nav-item" id="timelineLink"><a href="/timeline/" className="nav-link text-light" title="Follow the Eras and Evolution of the Pod">One True Timeline</a>
          </li>
          <li className="nav-item" id="quizLink"><a href="/quiz/" className="nav-link text-light" title="Fancy Yourself a Raptor Princess? Test your Knowledge Fight knowledge">Ultimate Wonk-off</a>
          </li>
          <li className="nav-item" id="altarLink"><a href="/altar/" className="nav-link text-light" title="Come kneel at the altar">Altar of Celine</a>
          </li>
          <li className="nav-item" id="gameLink"><a href="/game/" className="nav-link text-light" title="What, think you can do better? Come live a day in the life of Jones">Choose Your Own Add Pivot</a>
          </li>  
        </ul>
        </div>
      </nav>
  
    );
  
  };

  export default NavBar;