import './App.css';
/* eslint-disable react/prop-types */
import profile from './assets/react.svg';
function App() {
  return (
    <div className='titleCard'>
      <Avatar />

      <div className='data'>
        <Introductions />

        <div className='skillset'>
          <Skillset skills='Javascript' bg='red' color='white' />
          <Skillset skills='Typescript' bg='blue' color='white' />
          <Skillset skills='HTML/CSS' bg='red' color='white' />
          <Skillset skills='ExpressJs' bg='blue' color='white' />
          <Skillset skills='NodeJs' bg='red' color='white' />
          <Skillset skills='PostgresSql' bg='blue' color='white' />
        </div>
      </div>
    </div>
  );
}

/**
 * @description Returns Avatar kutty
 */
export const Avatar = () => {
  return (
    <div>
      <img src={profile} alt='My-Profile' className='porfoliio' />
    </div>
  );
};

/**
 * @description Introductions
 */
export const Introductions = () => {
  return (
    <>
      <h1>Viyas S</h1>
      <p>
        Hello there! 👋 Meet a passionate and skilled developer who thrives on creating scalable backend applications
        using Node.js and Express.js. With a keen eye for building robust and efficient systems, this individual brings
        a wealth of experience to the table. But that &rsquo;s not all &ndash; they&apos;ve seamlessly expanded their
        expertise into the world of frontend development, harnessing the power of React components to craft engaging and
        dynamic client-side experiences. Beyond the code, you&apos;ll find a friendly and positive individual, always
        ready to tackle challenges with a smile 😁🚀
      </p>
    </>
  );
};

// ? returns the skill prototypes

export const Skillset = props => {
  return (
    <p id='skills' style={{ backgroundColor: props.bg, color: props.color }}>
      {props.skills}
    </p>
  );
};

export default App;

