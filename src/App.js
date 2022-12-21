import ReactStars from 'react-rating-stars-component';
import './App.css';

function App() {
  const ratingChanged = ( rating ) => {
    alert('you have given $ {4} star ratinng ')
  }
  return (
    <div className="App">
      <p>Rate Experience with Stars</p>
      <div className='stars'>
      <ReactStars 
      activeColor = "#ffd700"s
      size ={40}
      count= {5}
      isHalf = {true}
      onChange = {ratingChanged}
       />
       </div>
     
    </div>
  );
}

export default App;
