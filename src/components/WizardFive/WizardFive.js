import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateRealEstateAgent } from './../../ducks/reducer' 

class WizardFive extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={() => this.props.updateRealEstateAgent("True")}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={() => this.props.updateRealEstateAgent("False")}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        realEstateAgent: state.realEstateAgent,
    }
}

export default connect(mapStateToProps, {updateRealEstateAgent})(WizardFive);