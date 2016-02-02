import React from 'react';
import DateRangePicker from 'react-daterange-picker';

const dateFormat = 'MMMM Do YYYY';

// Styles
require ('react-daterange-picker/src/css/react-calendar.scss');
require('../../scss/style.scss');


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            range: null,
            dateRanges: []
        }
    }

    handleSelect(range){
        this.setState({
            range: range
        })
    }

    addRange(){
        this.state.dateRanges.push(this.state.range);
        this.state.range = null;

        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <DateRangePicker
                    onSelect={this.handleSelect.bind(this)}
                    value={this.state.range}
                />
                <button onClick={this.addRange.bind(this)}>Add Range</button>
                <DateList dateRanges={this.state.dateRanges} />
            </div>
        )
    }
}


function DateList( props ){
    return (
        <div>
            {props.dateRanges.map( (range, i) => {
                return <li key={i}>{`${range.start.format(dateFormat)} - ${range.end.format(dateFormat)}`}</li>
            })}
        </div>
    )
}


export default App;