var data = axios.get('http://127.0.0.1:8000/api/data').then(
    function(response){
    // console.log(response.data)

    response.data.forEach(function (item, index) {
        var data_json = JSON.stringify(item["student"])
        console.log(data_json)
      });

    console.log(response.data)
    var datax = JSON.stringify(response.data[0].student)

    
    // console.log(datax)
    function Display() {
        return <p> Tâche : {datax}</p>;
      }
      
      const root = ReactDOM.createRoot(document.getElementById('display'));
      root.render(<Display />);

    })
