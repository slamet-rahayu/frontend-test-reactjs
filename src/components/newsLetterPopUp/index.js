import React from 'react'

export default class App extends React.PureComponent{
    render(){
        const { isnlOpen, onClick } = this.props
        return(
        <div className={`nl-container ${isnlOpen ? '' : 'closed'}`}>
          <div className="row">
            <div className="nl-content col-lg-5 col-md-12 col-sm-12">
             <div className="nl-close-button mt-2 mr-3">
                <button 
                onClick={onClick}
                className="nl-btn">
                 <i className="fa fa-close"></i>
                </button>
             </div>
             <div className="nl-inner">
              <p className="p6">Get latest updates in web technologies</p>
              <p className="nl-desc mb-3">
                I write articles related to web technologies, 
                such as design trends, development tools, 
                UI/UX case studies and reviews, and more. 
                Sign up to my newsletter to get them all.
              </p>
              <div className="row mb-3">
                <div className="col-lg-9 col-md-12 col-sm-12 mt-2 nl-input-container">
                 <input type="text" placeholder="Email address" className="nl-input" />
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 mt-2 btn-nl-container">
                  <button className="btn btn-sm btn-warning btn-nl btn-block">count me in!</button>
                </div>
              </div>
             </div>
            </div>
          </div>
         </div>
        )
    }
}