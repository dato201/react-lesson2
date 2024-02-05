import './App.css'



const App = ({name, lastName, age, id}) => {
  // const [count, setCount] = useState(0)

  return (
    <>

      <button>
        <p><span className='span_user'>name: </span>  {name}</p>
        <p><span className='span_user'>last name: </span>  {lastName}</p>
        <p><span className='span_user'>age: </span> {age}</p>
        <p><span className='span_user'>id: </span>  {id}</p>
      </button>
    </>
  )
}

export default App
