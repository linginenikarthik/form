import React, { useState } from 'react';

function App() {
  let [user, setUser] = useState({});
  let [data, setData] = useState([]);

  let fun = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  let add = () => {
    setData([...data, user]);
  };

  return (
    <div>
      <input type='text' placeholder='enter name' name='name' onChange={fun} />
      <input type='date' placeholder='dob' name='dob' onChange={fun} />
      <input type='phno' placeholder='enter phno' name='phno' onChange={fun} />
      <button onClick={add}>add</button>
      <table border={1}>
        <tr>
          <th>name</th>
          <th>dob</th>
          <th>phno</th>
        </tr>
        {data.map((item) => (
          <tr key={item.phno}>
            <td>{item.name}</td>
            <td>{item.dob}</td>
            <td>{item.phno}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
