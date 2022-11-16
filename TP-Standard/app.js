var data = axios.get('http://127.0.0.1:8000/api/data').then(function(response){console.log(response.data);})
data_one = data
// console.log(data_one[0])

console.log(data_one)



function process_array(array) {
    var values_seen = {}; // for removing duplicates
    for (var i = 0; i < array.length; i++) {
        values_seen[array[i]["level"]] = true;
    }
    return Object.keys(values_seen);
}





// data_one.map(data => 
//     <p>{data}</p>
//     );

// const myElement = <p>{data_one}</p>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);