var data = axios.get('http://127.0.0.1:8000/api/data').then(
    function(response){
    console.log(response.data)

    let items = response.data
    function Display() {
      let components = []
      let id = []
      for (let i in items) {
        components.push(<p key={i}> Tâche : {items[i]['name']}</p>)
      }
      
        return components;
      }
      const root = ReactDOM.createRoot(document.getElementById('display'));
      root.render(<Display />);
})



