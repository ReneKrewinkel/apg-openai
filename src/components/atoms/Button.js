const Button = ({ text, type, action }) => {

  const handler = () => {
    action(type)
  }

  return(
    <div className={"Button"} onClick={ () => handler() }>
      { text }
    </div>
  )
}

export default Button