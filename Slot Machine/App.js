function App() {
    return (
        <div>
            <h1>Slot Machine</h1>
            <Machine s1="👽" s2="👽" s3="👽" />
            <Machine s1="1" s2="X" s3="3" />
            <Machine s1="X" s2="X" s3="X" />
        </div>
    );
}

function Machine(props) {
    const { s1, s2, s3 } = props
    const msg = (s1 === s2) && (s1 === s3) ? "Win!" : "Lose!"
    return (
        <div>
            <h3>{s1 + " " + s2 + " " + s3}</h3>
            <h2>You {msg} </h2>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
