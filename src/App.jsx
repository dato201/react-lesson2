import './App.css'



const App = ({ children}) => {
  // const [count, setCount] = useState(0)

  let users = [
    { name: "dato", lastName: "balxamishvili", age: 19, id: "998737473", id2: Math.floor(Math.random() * 1000)},
    { name: "guram", lastName: "otarashvili", age: 40, id: "354869498", id2: Math.floor(Math.random() * 1000)},
    { name: "soso", lastName: "ipsumoshvili", age: 20, id: "3534644869498", id2: Math.floor(Math.random() * 1000)},
  ];

  let userLogin = false

  if (users[0] === undefined) {
  userLogin = true
  }
  return (
    <>
    {children}
      <div className='user_div'>
        {users.map(user => {
          return (
            <button key={user.id2}>
              <p key={user.name}><span className='span_user'>name: </span>  {user.name}</p>
              <p key={user.lastName}><span className='span_user'>last name: </span>  {user.lastName}</p>
              <p key={user.age}><span className='span_user'>age: </span> {user.age}</p>
              <p key={user.id}><span className='span_user'>id: </span>  {user.id}</p>
            </button>
          )
        })}
        {userLogin && (
          <h1 className='users_system'>no users in the system.</h1>
        )}
      </div>

    </>
  )
}

export default App
