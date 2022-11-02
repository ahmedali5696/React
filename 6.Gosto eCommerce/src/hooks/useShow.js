import { useState, useEffect, useRef } from "react"

function useShow() {
  const [showed, setElementShow] = useState(false)
  const ref = useRef(null)

  function clickElement() {
    setElementShow(prev => !prev)
  }

  useEffect(() => {
    ref.current.addEventListener("click", clickElement)
  }, [])

  return [showed, ref]
}

export default useShow