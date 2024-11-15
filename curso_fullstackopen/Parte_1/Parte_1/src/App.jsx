const Felicitacion = (props) => {
  return (
    <div>
      <p>Muchas gracias {props.nombre}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1 id="cosa" >Greetings</h1>

      <Felicitacion nombre='George' />
      <Felicitacion nombre='Daisys' />
    </div>
  )
}


export default App

