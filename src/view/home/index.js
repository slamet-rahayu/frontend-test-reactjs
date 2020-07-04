import React, { Component } from 'react';
import Logo from '../../assets/images/logos.png';
import CookiePopUp from '../../components/cookiePopUp';
import NlPopUp from '../../components/newsLetterPopUp';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      isCookieOpen: true,
      isnlOpen: true
    }
  }

  closeCookiePopUp = ()=>{
    this.setState({isCookieOpen: false})    
  }

  closeNlPopUp = () =>{
    this.setState({isnlOpen: false})
  }

  componentDidMount(){
    window.scrollTo(0, 10)
  }

  render(){
    const {
      isCookieOpen,
      isnlOpen,
    } = this.state
    return(
        <div>
          <CookiePopUp isCookieOpen={isCookieOpen} onClick={this.closeCookiePopUp} />
          <div className="top">
            <div>
                <img src={Logo} alt="logo" className="logo ml-4 mt-4" />
            </div>
            <div className="outer-box">
             <div className="content-box">
                <div className="col-lg-4 content">
                 <div className="p1">Hello! I'm Slamet Rahayu</div>
                 <div className="p2">Consult, Design, and Develop Websites</div>
                 <div className="p3 mt-2">Have something great in mind? Feel free to contact me. I'll help you to make it happen.</div>
                 <button 
                 className="btn btn-outline-light ml-auto mr-auto btn-contact mt-4">
                 LET'S MAKE CONTACT
                 </button>
                </div>
              </div> 
            </div>  
            </div>
            <div className="highlight">
            <div className="hp-inner">
            <div className="content-box">
              <div className="content hc col-lg-5">
                <div className="p4">How Can I Help You?</div>
                <p className="hdt">
                Our work then targeted, 
                best practices outcomes social innovation synergy. 
                Venture philanthropy, revolutionary inclusive policymaker relief. 
                User-centered program areas scale.
                </p>
              </div>
            </div>
            <div className="row hp-container">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="hp-box">
              <div className="hp-box-inner">
                <div className="hp-title">
                 <p className="p5">Consult</p>
                 <div className="hp-icon">
                  <i className="fa fa-comments"></i>
                 </div>
                </div>
                <div className="hp-desc">
                  <p>
                  Co-create, design thinking; strengthen infrastructure resist granular. 
                  Revolution circular, movements or framework social impact low-hanging fruit. 
                  Save the world compelling revolutionary progress.
                  </p>
                </div>
              </div>
              </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="hp-box">
                <div className="hp-box-inner">
                <div className="hp-title">
                 <p className="p5">Design</p>
                 <div className="hp-icon">
                  <i className="fa fa-paint-brush"></i>
                 </div>
                </div>
                <div className="hp-desc">
                  <p>
                  Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. 
                  Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable
                  </p>
                </div>
                </div>
              </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="hp-box">
                <div className="hp-box-inner">
                <div className="hp-title">
                 <p className="p5">Develop</p>
                 <div className="hp-icon">
                  <i className="fa fa-cubes"></i>
                 </div>
                </div>
                <div className="hp-desc">
                  <p>
                  Revolutionary circular, movements a or impact framework social impact low- hanging. 
                  Save the compelling revolutionary inspire progress. 
                  Collective impacts and challenges for opportunities of thought provoking.
                  </p>
                </div>
                </div>
              </div>
             </div>
            
            
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="hp-box">
              <div className="hp-box-inner">
                <div className="hp-title">
                 <p className="p5">Marketing</p>
                 <div className="hp-icon">
                  <i className="fa fa-bullhorn"></i>
                 </div>
                </div>
                <div className="hp-desc">
                  <p>
                  Peaceful; vibrant paradigm, collaborative cities. 
                  Shared vocabulary agile, replicable, effective altruism youth. 
                  Mobilize commitment to overcome injustice resilient, 
                  uplift social transparent effective.
                  </p>
                </div>
              </div>
              </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="hp-box">
                <div className="hp-box-inner">
                <div className="hp-title">
                 <p className="p5">Manage</p>
                 <div className="hp-icon">
                  <i className="fa fa-bars"></i>
                 </div>
                </div>
                <div className="hp-desc">
                  <p>
                  Change-makers innovation or shared unit of analysis. 
                  Overcome injustice outcomes strategize vibrant boots on the ground sustainable. 
                  Optimism, effective altruism invest optimism corporate social.
                  </p>
                </div>
                </div>
              </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="hp-box">
                <div className="hp-box-inner">
                <div className="hp-title">
                 <p className="p5">Evolve</p>
                 <div className="hp-icon">
                  <i className="fa fa-clone"></i>
                 </div>
                </div>
                <div className="hp-desc">
                  <p>
                  Activate catalyze and impact contextualize humanitarian. 
                  Unit of analysis overcome injustice storytelling altruism. 
                  Thought leadership mass incarceration. Outcomes big data, fairness, 
                  social game-changer.
                  </p>
                </div>
                </div>
              </div>
             </div>
             </div>
            </div>
            </div>
           <div className="footer">
          <p>&copy; 2020 Slamet Rahayu. All Rights Reserved</p>
         </div>
          <NlPopUp isnlOpen={isnlOpen} onClick={this.closeNlPopUp} />
        </div>
    )
  }
}

export default App;