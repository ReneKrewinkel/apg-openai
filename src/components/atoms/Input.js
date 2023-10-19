const Input = ({ handler }) => {

  const inputHandler = (value) => {
    handler(value)
  }

  return(
    <div className={"Input"}>
      <input type={"text"} placeholder={"prompt"}
             onChange={ (e) => inputHandler(e.target.value) } />
    </div>
  )
}

export default Input