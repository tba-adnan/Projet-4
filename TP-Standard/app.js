import React, { useState, useEffect } from 'react';



ReactDOM.render(<h1>demo</h1>, document.getElementById('mydiv'))



useEffect(() => {fetch('http://127.0.0.1:8000/api/data').then((response) => console.log(response));}, []);