import React from 'react';
import { styles, variables } from './styles';
import tinyColor from "tinycolor2";

export default React.createClass({
    getInitialState() {
        let isToggled = this.props.defaultToggled ?
            true : false;
        let isDisabled = this.props.disabled ?
            true : false;

        return {
            isToggled,
            isDisabled,
        }
    },  

    onToggle() {
        let isToggled = !this.state.isToggled;
        if (!this.state.isDisabled) {
            if (this.props.onChange) {
                this.props.onChange(isToggled);
            }
            this.setState({
                isToggled
            });
        }
    },

    render() {
        return (
            <fieldset 
                style={{
                    ...this.style().fieldset,
                }}
            >

            <label
                style={this.style().label}
                for={ this.props.id }
            > 
                { this.props.label }
            </label>
            <input
                style={styles.u.kHide}
                id={ this.props.id }
                type="checkbox"
                checked={ this.state.isToggled } 
                onChange={ this.onToggle }
            />

            <span 
                style={{
                    ...this.style().toggleSlide,
                    ...this.style().isToggledSlide,
                    ...this.style().isDisabled,
                }}
                onClick={this.onToggle}
            >
                <span
                    style={{
                        ...this.style().toggleSwitch,
                        ...this.style().isToggledSwitch,
                    }}
                />     
                </span>
            </fieldset>
        )
    },

    style() {
        let size = 20;

        let switchColor = this.props.color;

        let slideColor =  tinyColor(switchColor).
            lighten(50).toString();

        let isDisabled = !this.state.isDisabled ?
            { 
                opacitiy: 1,
                cursor: "pointer",
            } : 
            { 
                opacity: .3,
                cursor: "not-allowed",
            };

        let label = this.props.showLabel ? 
            styles.t.label :
            styles.u.kHide;


        let isToggled = !this.state.isToggled;

        let isToggledSwitch = isToggled ?
            {
                left: "0%",
                background: variables.grey.xXLight,
            } :
            {
                left: `calc(100% - ${size}px)`,
                background: switchColor,
            };

        let isToggledSlide = isToggled ? 
            {
                background: "lightgrey",
            } :
            {
                background: slideColor,
            };

        return {
            fieldset: {
                border: "none",
                margin: "0px",
                padding: "10px",
            },

            label,

            toggleSlide: {
                display: "block",
                position: "relative",
                height: `${size - size * .33}px`,
                width: `${size * 2}px`,
                borderRadius: "999px",
            },

            toggleSwitch: {
                transition: "all 0.2s ease",
                display: "block",
                position: "absolute",
                top: `-${size * .15}px`,
                height: `${size}px`,
                width: `${size}px`,
                borderRadius: "999px",
                ...styles.boxShadow.sm
            },
            isDisabled,
            isToggledSwitch,
            isToggledSlide,
        }
    },
})