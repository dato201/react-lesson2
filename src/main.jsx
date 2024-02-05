import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let users = [
  { name: "dato", lastName: "balxamishvili", age: 19, id: "839583909030" },
  { name: "guram", lastName: "otarashvili", age: 40, id: "112293870095" },
  { name: "givi", lastName: "ipsumishvili", age: 27, id: "009913772763" },
  { name: "tato", lastName: "givishvili", age: 12, id: "550099392039" },
  { name: "lorem", lastName: "lorem ipsum", age: 39, id: "992388739374" },
]

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='user_div'>
    <App name={users[0].name} lastName={users[0].lastName} age={users[0].age} id={users[0].id} />
    <App name={users[1].name} lastName={users[1].lastName} age={users[1].age} id={users[1].id} />
    <App name={users[2].name} lastName={users[2].lastName} age={users[2].age} id={users[2].id} />
    <App name={users[3].name} lastName={users[3].lastName} age={users[3].age} id={users[3].id} />
    <App name={users[4].name} lastName={users[4].lastName} age={users[4].age} id={users[4].id} />
  </div>
)


//   </React.StrictMode>,<React.StrictMode>
