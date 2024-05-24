import './App.css'
import Accordian from "../src/containers/Accordian/Accordian"
import Random from "../src/containers/RandomColor/Random"
import StarRating from "../src/containers/StarRating/StarRating"

function App() {
 

  return (
    <>
      <Accordian />
      <Random />
      <StarRating noOfStars={10}/>
    </>
  )
}

export default App
