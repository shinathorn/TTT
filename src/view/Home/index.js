

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Counter() {
  
  const [clicks, setClicks] = useState([]);

  const redclick = () => {

    setClicks([...clicks, { color: 'red' }]);
  };

  const blueclick = () => {

    setClicks([...clicks, { color: 'blue' }]);
  };

  const greemclick = () => {

    setClicks([...clicks, { color: 'green' }]);
  };

  return (
    <>
      <div>color button</div>
      <div className="flex justify-center ">
        <button style={{ backgroundColor: 'red', borderRadius: 30 }} onClick={redclick}>R</button>
        <button style={{ backgroundColor: 'blue', margin: 30, borderRadius: 30 }} onClick={blueclick}>B</button>
        <button style={{ backgroundColor: 'green', borderRadius: 30 }} onClick={greemclick}>G</button>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">color</th>
          </tr>
        </thead>
        <tbody>
          {clicks.map((click, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{click.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Counter;


// function Homepage(params) {


//   return (<>
//       <div className="row">
//         <label>Test 001</label>
//       </div>
//     </>);
// }

// export default Homepage;
