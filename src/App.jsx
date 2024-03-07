/* eslint-disable react/prop-types */
import './App.css';
import { Skillset } from './Components/title';
import profile from './assets/react.svg';

function App() {
  return (
    <div className='profilContainer'>
      <Avatar />

      <div className='data'>
        <Introduction />

        <Skillset />
      </div>
    </div>
  );
}

// ? Avatar Components
function Avatar() {
  return (
    <>
      <img src={profile} alt='Profile' className='profile' />
    </>
  );
}

// ? add Introductions
function Introduction() {
  return (
    <div className='intro'>
      <h1>Viyas</h1>

      <p className='selfIntro'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore autem facilis illo fuga et obcaecati, soluta
        nulla ullam porro nostrum ratione cupiditate harum at facere omnis repudiandae quidem consequatur impedit.
      </p>
    </div>
  );
}

export default App;

