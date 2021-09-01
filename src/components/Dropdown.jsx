import React, { Component } from 'react'
import '../styles/Dropdown.scss'
import dropdown_arrow from "../assets/dropdown-arrow.svg"

export default class Dropdown extends Component {
    render() {
        const {dropDownTitle,dropDownContent} = this.props;

        return (
            <div className="dropdown">
                <div className="dropdownClick">
                    <h2 className="dropdownTitle">{dropDownTitle}</h2>
                    <img className="dropdownArrow" src={dropdown_arrow} alt='arrow'/>
                </div>
                <div className="dropdownContent">{dropDownContent}</div>
            </div>
        )
    }
}
