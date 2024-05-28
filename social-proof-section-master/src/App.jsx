import './App.css';
import Content from './components/Content';
import Rating from "./components/Rating";
import Review from "./components/Review";

import Colton from "./assets/images/image-colton.jpg";
import Anne from "./assets/images/image-anne.jpg";
import Irene from "./assets/images/image-irene.jpg";


function App() {
  return (
    <div className="page-container">
      <Content />
      <div className="ratings-container">
        <Rating key="reviews" title="Reviews" extraClass="third" />
        <Rating key="reportguru" title="Report Guru" extraClass="second" />
        <Rating key="besttech" title="Best Tech" extraClass="" />
      </div>
      <div className="reviews-container">
        <Review key="colton" name="Colton Smith" review='"We needed the same printed design as the one we had ordered a week prior.
        Not only did they find the original order, but we also received it in time.
        Excellent!"' image={Colton} extraClass=""/>
        <Review key="irene" name="Irene Roberts" review='"Customer service is always excellent and very quick turn around. Completely
        delighted with the simplicity of the purchase and the speed of delivery."' image={Irene}  extraClass="second"/>
        <Review key="anne" name="Anne Wallace" review='""Put an order with this company and can only praise them for the very high
        standard. Will definitely use them again and recommend them to everyone!"' image={Anne} extraClass="third"/>
      </div>
    </div>
  );
}

export default App;
