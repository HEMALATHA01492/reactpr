
// function App() {

// let course='Half Stack Application Developement';
// let part1='Fundamentals of React';
// let ex1=10;
// let part2='Using props to pass data';
// let ex2=7;
// let part3='State of a compenent';
// let ex3=14;

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>{part1} {ex1}</p>
//       <p>{part2} {ex2}</p>
//       <p>{part3} {ex3}</p>
//       <p>Number of Exercises { ex1 + ex2 + ex3 }</p>
//     </div>
    
//   );
// }

// export default App;
//-------------------------
import React from 'react';
function Header(props){
  return(
    <h1>{props.course}</h1>
  )
}
function Content(props){
  return(
    <div>
    <p>{props.part1} {props.ex1}</p>
    <p>{props.part2} {props.ex2}</p>
    <p>{props.part3} {props.ex3}</p>
    </div>
  )
}
function Total(props){
  return(
<p>Number of Exercises {props.ex1 + props.ex2 + props.ex3 }</p>  )
}

function App() {
  return (
    <div>
      <Header course='Half Stack Application Developement'/>
      <Content part1='Fundamentals of React'   ex1={10}
              part2='Using props to pass data' ex2={7}
              part3='State of a compenent'     ex3={14} />
      <Total ex1={10} ex2={7} ex3={14}/>
    </div>
  )
}

export default App;
