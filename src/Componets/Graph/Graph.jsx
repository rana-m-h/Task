


import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

 export default function Graph(){

const data = [
{
    name:"Ahmed Ali",
    amount1:1000,
    amount2:2000,

},
{
    name:"Aya ElSayed",
    amount1:550,
    amount2:1300,

},
{
    name:"Mina Adel",
    amount1:500,
    amount2:1250,

},
{
    name:"Sarah Reda",
    amount1:750,
    

},
{
    name:"Mohamed Sayed",
    amount1:2500,
    amount2:875,

}

]
return<>
  <div className="container w-50 mt-5  ">
  <div className='row '>
<div className='text-info '>
<BarChart width={730} height={330} data={data}>
  <CartesianGrid strokeDasharray="" />
  <XAxis dataKey="name" />
  <YAxis />
  
  <Tooltip />
  <Legend />
  <Bar dataKey="amount1" fill="#8884d8" />
  <Bar dataKey="amount2" fill="#82ca9d" />
</BarChart>


</div>

</div>
</div>

</>

}