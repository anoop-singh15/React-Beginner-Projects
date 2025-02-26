
import './App.css';
import Accordian from './components/Accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';


let url=process.env.REACT_APP_API_Image;



function App() {
  return (
    <div className="App">
     {/* Hello World!! */}

     {/* Accordian component */}
      {/* <Accordian/> */}

      {/* Random color component */}
      {/* <RandomColor/> */}

      {/* Star Rating */}
      {/* <StarRating starCount={10}/> */}

      {/* Image Slider */}
      <ImageSlider url={url} limit={'100'}/>


    </div>
  );
}

export default App;
