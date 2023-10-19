import { useState } from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Image from '../atoms/Image'
import Paragraph from '../atoms/Paragraph'
import Spinner from '../atoms/Spinner'

import { generateResult } from '../../lib/API'

const Form = () => {

  const [prompt, setPrompt] = useState('')
  const [hasResult, setHasResult] = useState(false)
  const [type, setType] = useState(null)
  const [isLoaded, setLoaded] = useState(true)
  const [result, setResult] = useState(null)

  const executePrompt = async (type) => {
    setLoaded(false)
    setHasResult(false)
    setType(type)

    const [result, error] = await generateResult(type, prompt)
    if(error) {
      console.log(error)
      setLoaded(true)
      setResult(null)
    } else {
      setResult(result)
      setLoaded(true)
      setHasResult(true)
    }

  }

  const inputHandler = (value) => {
    setPrompt(value)
  }

  const renderButtonbar = () => {
    if(isLoaded) {

      return(
        <div className={"button-bar"}>
          <Button text={"Text"} action={executePrompt} type={'text'} />
          <Button text={"Image"} action={executePrompt} type={'image'} />
        </div>
      )
    }

    return(<Spinner />)
  }

  return(
    <div className={"Form"}>
      <div>
        <Input handler={inputHandler}/>
      </div>

      { renderButtonbar() }

      { (hasResult && type === 'text') && <Paragraph text={result} /> }
      { (hasResult && type === 'image') && <Image image={result} /> }

    </div>
  )
}

export default Form