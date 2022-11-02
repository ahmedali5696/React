import React, { useContext } from "react"
import Image from "../components/Image"
import { picsContext } from '../context'
import { getClass } from '../utils/index'

function Photos() {
  const {allPhotos} = useContext(picsContext)
  const imagesUI = allPhotos.map((img, i) => <Image key={img.id} img={img} className={getClass(i)} />)

  return (
    <main className="photos">
      {imagesUI}
    </main>
  )
}

export default Photos