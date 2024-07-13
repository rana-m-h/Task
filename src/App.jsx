
import React, { useEffect, useState } from 'react';
import './App.css';
import Graph from './Componets/Graph/Graph.jsx';


function App() {
  const [data, setData] = useState(null);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setTransactions(data.transactions)
        
      });
  }, []);

  const search = (e) => {
    const query = e.target.value.toLowerCase();
    setTransactions(
      data.transactions.filter((transaction) =>
        transaction.name.toLowerCase().includes(query)

      )
    );
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return <>



    <div className="App ">
    <div class=" container mb-3 w-50 ">
    <div class="con-head text-center" >
    <h1>SYSTEM</h1>
</div>

  <label for="formGroupExampleInput" class="form-label"></label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Search By Name" onChange={search}/>
</div>
      <div className="container w-50">
        <div className='row'>
        
            <table className='table table-bordered border-primary text-center table-dark mb-4'>
              <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                  <th>customer_id</th>
                  <th>date</th>
                  <th>amount</th>
                </tr>
              </thead>


              <tbody>
                {transactions.map((transaction) => (
                  <tr>
                   
                   
                    <td>{transaction.id}</td>
                    <td>{transaction.name}</td>
                    <td>{transaction.customer_id}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                ))}
              </tbody>

            </table>


          </div>






     
      </div>




    </div>


    <Graph/>

    </>

  


}

export default App;