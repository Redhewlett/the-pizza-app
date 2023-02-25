import React, { useState, useEffect } from "react"
//type def
interface Props {
  title: string
  sub?: string
}

const GutterTitle: React.FC<Props> = (props) => {
  const titleArray = props.title.split(" ")
  const [lastWord, setLastWord] = useState("")
  const [beforeLastWord, setBeforeLastWord] = useState([""])
  const currentURL = window.location.href

  useEffect(() => {
    if (currentURL.includes("create")) {
      setBeforeLastWord(titleArray.slice(0, titleArray.length - 1))
      setLastWord(titleArray[titleArray.length - 1])
    } else return
    /* eslint-disable */
  }, [])
  /* eslint-disable */

  return (
    <>
      {currentURL.includes("create") ? (
        <h2>
          {beforeLastWord.map((word) => word + " ")}
          <strong> {lastWord}</strong>
        </h2>
      ) : (
        <h2>{props.title}</h2>
      )}
      <p>{props.sub ? props.sub : ""}</p>
    </>
  )
}

export default GutterTitle
