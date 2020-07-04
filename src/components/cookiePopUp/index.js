import React from 'react'

export default class App extends React.PureComponent{
    render(){
        const { isCookieOpen, onClick } = this.props
        return(
        <React.Fragment>
            <div className={`cookie-container ${isCookieOpen ? '' : 'closed'}`}>
            <div className="row cookie-pop-up">   
            <div className="col-lg-5 col-md-12 ml-4 mt-1">
                <p className="cookie-text">
                By accessing and using this website, 
                you acknowledge that you have read and understand our <a href="a">Cookie Policy, 
                Privacy Policy</a>, and our <a href="a">Terms of Service.</a>
                </p>
            </div>
            <div className="col-lg-1 col-md-12 ml-4 mt-1">
             <button 
             onClick={onClick} 
             className="btn btn-primary btn-md btn-cookie">
             Got It
             </button>
            </div>
            </div>            
        </div>
        <div className={`empty-cookie ${isCookieOpen ? '' : 'closed'}`} />
        </React.Fragment>
        )
    }
}