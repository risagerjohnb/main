import React from "react";

class Testing extends React.Component {

    setData() {
        localStorage.setItem('myData', true);
    }

    getData() {
        let data = localStorage.getItem('myData');
        console.log(data)
    }
 
    render() {
        return (
            <div className="teststyle">
                <button onClick={ () => this.setData() }>Set Data</button>
                <button onClick={ () => this.getData() }>Get Data</button>
            </div>
        )
    }
}

export default Testing;