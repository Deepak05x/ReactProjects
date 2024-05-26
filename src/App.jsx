import './App.css'
import Accordian from "../src/containers/Accordian/Accordian"
import Random from "../src/containers/RandomColor/Random"
import StarRating from "../src/containers/StarRating/StarRating"
import ImageSlider from './containers/ImageSlider/ImageSlider'
import LoadMore from './containers/LoadMore/LoadMore'

function App() {
 

  return (
    <>
      <Accordian />
      <Random />
      <StarRating noOfStars={10}/>
      <ImageSlider url={'https://picsum.photos/v2/list/'} limit={'15'}/> 
      <LoadMore url={'https://picsum.photos/v2/list?page=2'} />
    </>
  )
}

export default App
