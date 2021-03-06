import React, { PropType } from 'react';
import { SelectMenu } from 'troposphere-ui';
import { Sheet, Code }  from '../components';
import theme from '../theme.js';

export default React.createClass({
    getInitialState() {
        return {
            selected: 0,
        }
    },

    things: [
        {
            name: "Red Fish",
            color: "Red",
            home: "Ocean",
        },
        {
            name: "Blue Fish",
            color: "Blue",
            home: "Lake",
        },
        {
            name: "Green Fish",
            color: "Green",
            home: "Pond"
        }
    ],

    optionName(i) {
        return this.things[i].name
    },

    onSelectChange(selected) {
        this.setState({
            selected
        });
    },

    render() {

        return (
            <div>
                <Sheet mb={ 4 }>
                   <div 
                        style={{ 
                            maxWidth: "300px",
                        }}
                    >
                        <SelectMenu
                            list={ this.things }
                            optionName={ this.optionName }
                            color={ theme.color.primary }
                            selected={ this.state.selected }
                            onSelectChange={ this.onSelectChange }
                        />
                    </div>
                </Sheet>
                <Code children={
                    /* This is a string for our code snippt. It is not indented because it messes up the formating in render 
                     * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<Sheet mb={ 4 }>
   <div 
        style={{ 
            maxWidth: "300px",
        }}
    >
        <SelectMenu
            list={ this.things }
            optionName={ this.optionName }
            color={ theme.color.primary }
            selected={ this.state.selected }
            onSelectChange={ this.onSelectChange }
        />
    </div>
</Sheet>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
