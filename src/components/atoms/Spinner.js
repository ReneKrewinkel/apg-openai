import BarLoaded from 'react-spinners/BarLoader'

const Spinner = () => {
  return(
    <div className={"Spinner"}>
      <BarLoaded loading={true} />
    </div>
  )
}

export default Spinner