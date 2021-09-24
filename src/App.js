// import logo from './logo.svg';
import './App.css';
import Inline from './components/Inline';
//import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import Click from './components/Click';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
       {/* <Greet name="Diana" heroName="BlackWidow">
        <p>This is children props</p>
      </Greet>
      <Greet name="Susan" heroName="SuperGirl">
        <button>What!!!</button>
      </Greet> */}

      {/*<Welcome name="Diana" heroName="BlackWidow"/>
      <Welcome name="Shay" heroName="BlackPanther"/>
      <Welcome name="Georgy" heroName="BlackLikeMe"/> 
      <Message /> */}
      {/* <Click></Click> */}
      {/* <Counter /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      <StyleSheet primary={true}/>
      <Inline />
    </div>
  );
}

export default App;
