// Sending Request and getting RAW data.
var data = axios.get('http://127.0.0.1:8000/api/data').then(
    function(response){
    // console.log(response.data)
// Loop tasks (Should switch to map function.)
    let items = response.data
    function Display() {
      let components = []
      let id = []
      for (let i in items) {components.push(
      <li key={i}> Tâche : {items[i]['name']}</li>
      )} return components;}

// Render the Display.
      const root = ReactDOM.createRoot(document.getElementById('display'));
      root.render(<Display />);
})


// CRUD class
class CrudClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  addTask(event){
    axios.post('http://127.0.0.1:8000/api/insert', {
      name: this.state.value,
    })
    .then(function (response) {

      console.log(response);
    })

    event.preventDefault();
  }

  render() {
    return (
      
      <form onSubmit={this.addTask}>
        <label>
          <h2>Ajouté une Tâche :</h2>
          <br></br>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    
    );
  }
}

ReactDOM.render(<CrudClass/>, document.getElementById('root'))