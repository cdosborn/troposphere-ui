import React from 'react';
import toJsx from 'react-element-to-jsx-string';
import { Button, Code } from '../../src';
import { Warning } from '../../src/icons';


const Example = () => {
    return (
        <div style={{marginBottom: "20px"}}>
            <Button
                children="Default"
                color="#EEEEEE"
            />
            <Button
                children="Primary"
                color="#0971ab"
            />
            <Button
                children="Danger"
                color="#EA5050"
            >
                <Warning size={15} style={{position: "relative", top: "-2px"}} /> Danger
            </Button>
        </div>
    )
};

export default React.createClass({
    render() {
        return (
            <div>
                { Example(this.onTouch) }
                <Code children={
                    /* This is a string for our code snippt. It is not indented because it messes up the formating in render 
                     * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<div style={{marginBottom: "20px"}}>
    <Button
        children="Default"
        color="#EEEEEE"
    />
    <Button
        children="Primary"
        color="#0971ab"
    />
    <Button
        children="Danger"
        color="#EA5050"
    >
        <Warning 
            size={15} 
            style={{
                position: "relative", 
                top: "-2px"
            }} 
        /> 
        Danger
    </Button>
</div>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
