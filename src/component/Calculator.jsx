import React, {useState} from 'react'
import './calculate.css'


const Calculator=()=> {

 const [currentInput, setCurrentInput]=useState('');
 const [previousInput, setPreviousInput]=useState('');
 const [operator, setOperator]=useState(null);
 const [resultDisplayed, setResultDisplayed]=useState(false);

 const handleNumberClick =(value) =>{
    if(resultDisplayed){
        setCurrentInput(value);
        setResultDisplayed(false);
        
    } else {
        setCurrentInput(currentInput + value);
    }
 }; 
 const handleOperatorClick =(value)=>{
    if (currentInput !==''){
    setOperator(value);
    setPreviousInput(currentInput);
    setCurrentInput('');
    }
 };
 const handleEqualClick =()=>{
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
     let result;
     switch (operator){
        case '+': result= num1 + num2;break;
        case '-': result= num1 - num2;break;
        case '*': result= num1 * num2;break;
        case '/': result= num2!==0? num1 / num2:'Error';break;
        case '^': result= Math.pow(num1, num2);break;
        case '%': result= num1 % num2;break;
        case '!':
        default: result=num2;
     }
     setCurrentInput(result.toString());
     setPreviousInput('');
     setOperator(null);
     setResultDisplayed(true);
 };
 const handleDeleteClick =()=>{
    setCurrentInput(currentInput.slice(0,-1));
 };
 
  return (
    <div className='container'>
        <div className="display">
            <div className='previous-input'>{previousInput} {operator} {operator && currentInput}</div>
        <input type='text' className='current-input' value={currentInput || '0'} disabled />
        </div>
        <div className="row">
            <button className='btn orange' onClick={()=>handleOperatorClick('/')}>/</button>
            <button className='btn orange' onClick={()=>handleOperatorClick('!')}>!</button>
            <button className='btn orange' onClick={()=>handleOperatorClick('%')}>%</button>
            <button className='btn orange' onClick={handleDeleteClick}>X</button>
        
        </div>
        <div className="row">
            <button className='btn num' onClick={()=>handleNumberClick('7')}>7</button>
            <button className='btn num' onClick={()=>handleNumberClick('8')}>8</button>
            <button className='btn num' onClick={()=>handleNumberClick('9')}>9</button>
            <button className='btn orange'onClick={()=>handleOperatorClick('*')} >*</button>
        </div>

        <div className="row">
            <button className='btn num' onClick={()=>handleNumberClick('4')}>4</button>
            <button className='btn num' onClick={() => handleNumberClick('5')}>5</button>
            <button className='btn num' onClick={()=> handleNumberClick('6')}>6</button>
            <button className='btn orange' onClick={()=>handleOperatorClick('+')}>+</button>
        </div>

        <div className="row">
            <button className='btn num' onClick={()=>handleNumberClick('1')}>1</button>
            <button className='btn num' onClick={()=> handleNumberClick('2')}>2</button>
            <button className='btn num' onClick={()=>handleNumberClick('3')}>3</button>
            <button className='btn orange' onClick={()=>handleOperatorClick('-')}>-</button>
        </div>

        <div className="row">
            <button className='btn num' onClick={()=> handleOperatorClick('^')}>^</button>
            <button className='btn num' onClick={()=> handleNumberClick('0')}>0</button>
            <button className='btn num' onClick={()=>handleNumberClick('.')}>.</button>
            <button className='btn orange' onClick={handleEqualClick}>=</button>
        </div>
    
    </div>
  )
}

export default Calculator
