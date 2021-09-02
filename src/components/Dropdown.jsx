import React, { Component } from 'react'
import '../styles/Dropdown.scss'
import dropdown_arrow from "../assets/dropdown-arrow.svg"

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    

      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
      

    render() {
        
        const {dropDownTitle,dropDownContent} = this.props;
        
        return (
            <details className="dropdown">
                <summary className="dropdownClick" onClick={this.handleClick} >
                    <h2 className="dropdownTitle">{dropDownTitle}</h2>
                    <img className={ this.state.isToggleOn ? "dropdownArrow-active" : "dropdownArrow" } src={dropdown_arrow} alt='arrow'/>
                </summary>
                 <div className="dropdownContent">{dropDownContent}</div>
            </details>
        )
    }
}
