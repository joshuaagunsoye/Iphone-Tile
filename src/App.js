import './App.css';
import React from 'react';
import Comments from './Comments/Comments';
import Followers from './SocialMedia/SocialMedia';
import PhoneTitle from './PhoneTitle/PhoneTitle';
import { title, desc, price,shipping,rating } from './PhoneTitle/title';

function App() {

  return (
    <div className="App">
      <header className="App-header">
    <div class="root-heading"><span>iPhone 12 </span>Model Description</div>

        {console.log(title)}
        {/* {<Comments/>}  */}
        {/* {<Followers/>} */}
        <section>

        {title.map((tit, index) => {
          return <PhoneTitle title={tit} desc={desc[index]} price={price[index]} shipping={shipping[index]} rating={rating[index]} />
        })}

        </section>
        
      </header>
    </div>
  );
}

export default App;
