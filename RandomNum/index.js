class Hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    rndNum = () => {
        return this.setState({ num: Math.floor(Math.random() * 10) })
    }

    render() {
        return (
            <div>
                <h1>Number is {this.state.num}</h1>
                {this.state.num !== 7 && <button onClick={this.rndNum}>Generate</button>}
            </div>
        );
    }
}


ReactDOM.render(<Hello />, document.getElementById("root"));
