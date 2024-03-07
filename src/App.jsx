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
        Hello, buddy! Welcome to the world of web development. I am a passionate software developer dedicated to
        creating scalable and maintainable products. I&rsquo;m not only a tech enthusiast but also a foodie 😁, always
        on the lookout for exciting culinary experiences. I believe in exploring the world through the lens of
        technology. Let&rsquo;s embark on this journey together&#33;
      </p>
    </div>
  );
}

export default App;

