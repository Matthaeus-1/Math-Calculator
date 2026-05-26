



/* Use this as a template and add my custom scripting for the calculations */


import React, { useState, useEffect } from 'react';
import '../../index.css';


/* BMI Calculator When Weight in Pounds and Height in Inches is Given */


export const BMICalc = () => {
/* set const to weight_pounds, height_inches, proportional constant of 703 */
    const [weight_pounds, setWeight] = useState(200);
    const [height_inches, setHeight] = useState(61);
    const [operation, setOperation] = useState('BMI_Calculator');
    const [result_BMI, setResultBMI] = useState(null);
    const [result_BMI2, setResultBMI2] = useState(null);
    const [result_Target_Weight, setResultTargetWeight] = useState(null);
    const [target_BMI, setBMI] = useState(0);
    const [error, setError] = useState('');
 

  const performCalculation = () => {
    setError('');
    // Use Number() to convert the string input, which supports 'e' or 'E'
    const weight_lb = Number(weight_pounds);
    const height_in = Number(height_inches);
    const targ_BMI = Number(target_BMI);
    
  

    let calculationResult;
    let calculationResult2;
    let calculationResult3;
    if (operation === 'BMI') {

      calculationResult = 703 * weight_lb / height_in**2;

      /*  https://www.google.com/search?q=i+have+a+react+component+with+three+input+text+boxes+and+a+button+that+runs+a+script+from+the+values+in+the+input+boxes+--+id+like+one+of+the+input+boxes+to+clear+when+i+click+the+calculate+button&sca_esv=2fd5b39ab3b9e7c8&biw=786&bih=556&sxsrf=ANbL-n6L_1Jkgbop0R-UgrJaxJYc-B4kqg%3A1779781878987&ei=9lAVap36O9XakPIPqcax8As&ved=0ahUKEwidzbKVvNaUAxVVLUQIHSljDL4Q4dUDCBA&uact=5&oq=i+have+a+react+component+with+three+input+text+boxes+and+a+button+that+runs+a+script+from+the+values+in+the+input+boxes+--+id+like+one+of+the+input+boxes+to+clear+when+i+click+the+calculate+button&gs_lp=Egxnd3Mtd2l6LXNlcnAixAFpIGhhdmUgYSByZWFjdCBjb21wb25lbnQgd2l0aCB0aHJlZSBpbnB1dCB0ZXh0IGJveGVzIGFuZCBhIGJ1dHRvbiB0aGF0IHJ1bnMgYSBzY3JpcHQgZnJvbSB0aGUgdmFsdWVzIGluIHRoZSBpbnB1dCBib3hlcyAtLSBpZCBsaWtlIG9uZSBvZiB0aGUgaW5wdXQgYm94ZXMgdG8gY2xlYXIgd2hlbiBpIGNsaWNrIHRoZSBjYWxjdWxhdGUgYnV0dG9uMgUQIRigATIFECEYqwIyBRAhGKsCMgUQIRifBTIFECEYnwVI5dUCUJQQWKvUAnACeAGQAQCYAX2gAaolqgEFMjYuMjS4AQPIAQD4AQGYAjOgAsMlqAIKwgIHECMY6gIYJ8ICBBAjGCfCAgsQABiABBiKBRiRAsICCxAAGIAEGLEDGIMBwgILEC4YgAQYsQMYgwHCAggQABiABBixA8ICERAuGIAEGLEDGIMBGMcBGNEDwgILEC4YgwEYsQMYgATCAgoQLhiABBiKBRhDwgIKEAAYgAQYigUYQ8ICDRAAGIAEGIoFGEMYsQPCAg4QABiABBiKBRixAxiDAcICBRAAGIAEwgIKEAAYgAQYFBiHAsICDRAuGIAEGMcBGNEDGArCAg4QLhiABBjHARivARiOBcICCBAuGIAEGLEDwgIQEC4YgAQYsQMYxwEY0QMYCsICBRAuGIAEwgIIEC4YsQMYgATCAgsQABiABBiKBRixA8ICBhAAGBYYHsICCxAAGIAEGIoFGIYDwgIFEAAY7wXCAgcQABiABBgNwgIIEAAYCBgeGA3CAgcQIRgKGKABmAMG8QU00zW2YGkQOZIHBTI0LjI3oAe32wOyBwUyMi4yN7gHuiXCBwY1LjQyLjTIB1mACAE&sclient=gws-wiz-serp */
      setBMI('');

    } else if (operation === 'Weight') {
    
      
      calculationResult2 = targ_BMI * height_in**2 / 703;
      calculationResult3 = 703 * weight_lb / height_in**2;
    }

   
    setResultBMI(calculationResult);
    setResultBMI2(calculationResult3);
    setResultTargetWeight(calculationResult2);
  };


  return (
    <div>
      <h1>BMI Calculator</h1>
      <p className='instructions'>Enter your weight and height in the fields below:</p>
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="BMI">BMI</option>
          <option value="Weight">Target Weight</option>
      </select>
       <br />

       

      <div className='user-input-flex'>

        <div className='user-input-div'>
          <label className="user-input" htmlFor="user-input">Weight in Pounds   
            <input
             type="text" // Use "text" type to allow the 'e' character
             value={weight_pounds}
             onChange={(e) => setWeight(e.target.value)}
            />
          </label>
      
        </div>

         <div className='user-input-div'>
          <label className="user-input" htmlFor="user-input">Height in Inches  
            <input
             type="text"
             value={height_inches}
             onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          
         </div>
        
        <div className='user-input-div'>
          <label className="user-input" htmlFor="user-input">Target BMI  
            <input id= "target_BMI"
              type="text" // Use "text" type to allow the 'e' character
              value={target_BMI}
              onChange={(e) => setBMI(e.target.value)}
              
            />
          </label>
        </div>
         
        <button onClick={performCalculation}>Calculate</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {(
        <div>
            <div>
                <h2>
                    Your BMI Result Calculated by Your Current Weight in Pounds and Height in Inches Entered: {result_BMI}
                </h2>
            </div>

            <div>
                <h2>
                    Target Weight in Pounds and Weight Loss in Pounds Required to Achieve Target BMI Based Upon Current Weight in Pounds and Height in Inches Entered:
                </h2>
                
                <p>
                    Your BMI Result Calculated by Your Current Weight in Pounds and Height in Inches Entered: {result_BMI2}
                </p>
                <p>
                    Target Minimum Weight in Pounds Needed to Achieve the Target BMI Based Upon Your Current Height in Inches Entered: {result_Target_Weight}
                </p>
                <p>
                    Target Weight Loss in Pounds Needed to Achieve the Target BMI Based Upon Your Current Weight in Pounds Entered: {weight_pounds - (result_Target_Weight)}
                </p>
            </div>

        </div>
         
        )}
    </div>
  );
}
