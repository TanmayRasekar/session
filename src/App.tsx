import { useState } from "react";


const App = () => {
  const[number1, setNumber1] = useState<number>(0);
  const[number2, setNumber2] = useState<number>(0);
  const[operator, setOperator] = useState<string>("");
  const[result, setResult] = useState<number | string>(0);

  const handleNumber1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber1(Number(e.target.value));
  };
  const handleNumber2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber2(Number(e.target.value));
  };
  const handleOperatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOperator(e.target.value);  
  }
let array = ["ruzul","divya","yash","joshua","tanmay","samarth"];
// let a = [<div></div>, <div></div>, <div>yash</div>, <div>joshua</div>, <div>tanmay</div>, <div>samarth</div>];
   const printResult = () => {
    let array = ["ruzul","divya","yash","joshua","tanmay","samarth"];
          let result = [];
          // for(let i=0; i <10; i=i+2){
          //   array.push(<div>{i}</div>);
          //   console.log(array);
          // }

          for(let i=0; i < array.length; i++){
            result.push(<div>{array[i]}</div>);
            
          }
          console.log(result);
          return result;
        }

  const handleSumbit = () => {
        // if(operator === "+"){
        //   return setResult(number1 + number2);
        // }
        // else if(operator === "-"){
        //   return setResult(number1 - number2);
        // } 
        // else if(operator === "*"){
        //   return setResult(number1 * number2);
        // } 
        // else if(operator === "/"){
        //   if(number2 != 0) {
        //     return setResult(number1 / number2);
        //   } else {
        //     return setResult("Cannot divide by zero");
        //   }
        // } 
        // else{
        //   return setResult("Invalid operator");
        // }

        switch(operator) {
          case "+":
            setResult(number1 + number2);
            console.log("Addition performed");
            break;
          case "-":
            setResult(number1 - number2);
            console.log("Subtraction performed");
            break;
          case "*":
            setResult(number1 * number2);
            console.log("Multiplication performed");
            break;
          case "/":
            if(number2 !== 0) {
              setResult(number1 / number2);
              console
            } else {
              setResult("Cannot divide by zero");
            }
            break;
          default:
            setResult("Invalid operator");
            break; 
        }

       
  }

  return (
    <>
    <div>
      <input type="number" value={number1} onChange={handleNumber1Change}/>
      <input type="text" value={operator} onChange={handleOperatorChange}/>
      <input type="number" value={number2} onChange={handleNumber2Change}/>
      <button onClick={printResult}>{result}</button>
      {/* {printResult()} */}
      {array.map((name) => (
        <div>{name} {name}</div>
        ))}
    </div>
    </>
  )
}

// i = 0
// i < 10
// i = i + 2;

export default App 