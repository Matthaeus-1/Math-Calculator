

/* https://www.google.com/search?q=take+two+scientific+notation+inputs+and+multiply+or+divide+them+react&sca_esv=c561c885d6bff517&rlz=1C1VDKB_enUS1201US1201&sxsrf=ANbL-n6X0c5OPTS2ksaUhZKvGd9kZOA1LQ%3A1772319642536&ei=mnOjadaxIKvQkPIPpaPY0Aw&biw=1350&bih=743&ved=0ahUKEwjW5uKVpf2SAxUrKEQIHaURFsoQ4dUDCBE&uact=5&oq=take+two+scientific+notation+inputs+and+multiply+or+divide+them+react&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIkV0YWtlIHR3byBzY2llbnRpZmljIG5vdGF0aW9uIGlucHV0cyBhbmQgbXVsdGlwbHkgb3IgZGl2aWRlIHRoZW0gcmVhY3RI5PABUIwMWKPvAXAMeAGQAQOYAcABoAGhdKoBBjI5LjEwNbgBA8gBAPgBAZgCRqACjzyoAhPCAgoQABiwAxjWBBhHwgIFECEYoAHCAgUQIRifBcICBRAhGKsCwgIHECMYJxjqAsICChAjGCcY6gIYiwPCAhcQABiABBiRAhi0AhjnBhiKBRjqAtgBAcICEBAAGAMYtAIY6gIYjwHYAQHCAhAQLhgDGLQCGOoCGI8B2AEBwgIEECMYJ8ICChAjGPAFGCcYyQLCAgcQIxjwBRgnwgILEAAYgAQYkQIYigXCAg4QLhiABBixAxjRAxjHAcICCxAAGIAEGLEDGIMBwgIKEAAYgAQYQxiKBcICCxAuGIAEGLEDGIMBwgIKECMYgAQYJxiKBcICCBAAGIAEGMkDwgILEAAYgAQYkgMYigXCAggQABiABBixA8ICBRAAGIAEwgILEAAYgAQYsQMYyQPCAggQLhiABBixA8ICBRAuGIAEwgIXEC4YgAQYsQMYlwUY3AQY3gQY3wTYAQHCAgsQLhiABBjRAxjHAcICCxAuGIAEGMcBGK8BwgIGEAAYFhgewgIIEAAYFhgKGB7CAgUQABjvBcICCBAAGKIEGIkFmAME8QVF2NYKdvIf2ogGAZAGCLoGBggBEAEYAZIHBDkuNjGgB7_qB7IHBDMuNjG4B_w7wgcHOC40OS4xM8gHiwGACAA&sclient=gws-wiz-serp */

/*  https://www.google.com/search?q=react+app+to+convert+decimal+value+to+scientific+notation&rlz=1C1VDKB_enUS1201US1201&oq=react+app+to+convert+decimal+value+to+scientific+notation&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORigATIHCAEQIRigATIHCAIQIRiPAtIBCTIwMjk1ajBqN6gCCLACAfEFN886WmYWweg&sourceid=chrome&ie=UTF-8 */

/* When we normalize we are ensuring that the answer is expressed in scientific notation, meaning that if the value is >= 10, we add +1 to the exponent.  */


/* adding the text / number fields to accept user input that we may then pass it on to the component for evaluation */
/*  https://www.google.com/search?q=ok+so+i+have+the+component+working+but+now+how+to+add+fields+to+accept+values+to+work+with+the+component+react&sca_esv=aacf70bb308dc659&rlz=1C1VDKB_enUS1201US1201&sxsrf=ANbL-n7gsnp2dZx30ewfwAq5skTe9g3gOw%3A1772501613180&ei=bTqmadDDCv7LvMcP7Pim2QE&biw=963&bih=862&ved=0ahUKEwiQrpGIy4KTAxX-Je8CHWy8KRsQ4dUDCBE&uact=5&oq=ok+so+i+have+the+component+working+but+now+how+to+add+fields+to+accept+values+to+work+with+the+component+react&gs_lp=Egxnd3Mtd2l6LXNlcnAibm9rIHNvIGkgaGF2ZSB0aGUgY29tcG9uZW50IHdvcmtpbmcgYnV0IG5vdyBob3cgdG8gYWRkIGZpZWxkcyB0byBhY2NlcHQgdmFsdWVzIHRvIHdvcmsgd2l0aCB0aGUgY29tcG9uZW50IHJlYWN0SLPIAVAAWPzGAXAAeAGQAQCYAeEBoAH_P6oBBjguNTUuMbgBA8gBAPgBAZgCPKAC9D7CAgQQIxgnwgIOEC4YgAQYsQMY0QMYxwHCAggQLhiABBixA8ICDhAAGIAEGLEDGIMBGIoFwgIIEAAYgAQYsQPCAgUQABiABMICEBAAGIAEGLEDGEMYgwEYigXCAgoQABiABBhDGIoFwgIWEC4YgAQYsQMY0QMYQxiDARjHARiKBcICCxAuGIAEGLEDGIMBwgILEAAYgAQYsQMYgwHCAg0QABiABBixAxhDGIoFwgIKEAAYgAQYFBiHAsICBxAuGIAEGArCAg4QLhiABBixAxiDARiKBcICBRAuGIAEwgILEAAYgAQYhgMYigXCAgUQABjvBcICCBAAGKIEGIkFwgIGEAAYFhgewgIIEAAYFhgKGB7CAgUQIRigAcICBRAhGKsCwgIFECEYnwWYAwCSBwYyLjU3LjGgB_6QA7IHBjIuNTcuMbgH9D7CBwYzLjQ4LjnIB4MBgAgA&sclient=gws-wiz-serp  */


/* need to modify to process multiplication and division
/* https://www.google.com/search?q=react+capture+user+input+for+to+multiply+and+divide+in+scientific+notation+and+display+on+screen&sca_esv=aacf70bb308dc659&rlz=1C1VDKB_enUS1201US1201&biw=963&bih=862&sxsrf=ANbL-n4VY4RpjgNnhcfGXpILDrw1ygQUgw%3A1772502188457&ei=rDymaeTKG-3RkPIPy7Tn2AI&ved=0ahUKEwjk0LmazYKTAxXtKEQIHUvaGSsQ4dUDCBE&uact=5&oq=react+capture+user+input+for+to+multiply+and+divide+in+scientific+notation+and+display+on+screen&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCImByZWFjdCBjYXB0dXJlIHVzZXIgaW5wdXQgZm9yIHRvIG11bHRpcGx5IGFuZCBkaXZpZGUgaW4gc2NpZW50aWZpYyBub3RhdGlvbiBhbmQgZGlzcGxheSBvbiBzY3JlZW5InJEDUP4gWN6OA3APeACQAQCYAZQBoAG-PqoBBDguNjC4AQPIAQD4AQGYAk2gAq08qAIKwgINECMYJxj4BRjqAhiLA8ICBxAjGCcY6gLCAgoQIxgnGOoCGIsDwgIEECMYJ8ICCxAAGIAEGJECGIoFwgILEAAYgAQYsQMYgwHCAggQABiABBixA8ICCxAuGIAEGLEDGIMBwgIIEC4YgAQYsQPCAg4QLhiABBixAxjRAxjHAcICChAAGIAEGEMYigXCAhEQLhiABBixAxjHARiOBRivAcICEBAAGIAEGLEDGEMYgwEYigXCAg0QABiABBixAxhDGIoFwgIOEAAYgAQYkQIYsQMYigXCAg0QABiABBixAxgUGIcCwgIKEAAYgAQYFBiHAsICCxAuGIAEGMcBGK8BwgIFEAAYgATCAggQLhiABBjlBMICBxAAGIAEGArCAggQABgWGAoYHsICBhAAGBYYHsICCxAAGIAEGIYDGIoFwgIFEAAY7wXCAggQABiABBiiBMICBRAhGKABwgIFECEYqwLCAggQABiiBBiJBcICBRAhGJ8FmAME8QUS_ordYM_EWJIHBTE2LjYxoAf3tQSyBwQxLjYxuAfvO8IHBzAuNTEuMjbIB8UBgAgA&sclient=gws-wiz-serp  */

import React, { useState } from 'react';
import './SciCalc.css';
import '../../index.css';

export const SciCalc = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('1');
  const [operation, setOperation] = useState('multiply');
  const [result, setResult] = useState(null);
  const [result2, setResult2] = useState(null);
  const [error, setError] = useState('');


  const performCalculation = () => {
    setError('');
    // Use Number() to convert the string input, which supports 'e' or 'E'
    const num1 = Number(number1);
    const num2 = Number(number2);
    const num3 = Number(number3);
    /* https://www.google.com/search?q=react+i+have+text+input+for+number+calculation+for+3+numbers%2C+i+want+the+component+to+work+even+if+i+just+put+two+values&sca_esv=4eec6c69d14efea8&rlz=1C1VDKB_enUS1201US1201&sxsrf=ANbL-n4gi5exdAnLN4dfy8Y8KZ60NxZl1A%3A1772590388470&ei=NJWnaaK5HMysur8PgKuV6QY&biw=1380&bih=409&ved=0ahUKEwiio7_jlYWTAxVMlu4BHYBVJW0Q4dUDCBE&uact=5&oq=react+i+have+text+input+for+number+calculation+for+3+numbers%2C+i+want+the+component+to+work+even+if+i+just+put+two+values&gs_lp=Egxnd3Mtd2l6LXNlcnAieHJlYWN0IGkgaGF2ZSB0ZXh0IGlucHV0IGZvciBudW1iZXIgY2FsY3VsYXRpb24gZm9yIDMgbnVtYmVycywgaSB3YW50IHRoZSBjb21wb25lbnQgdG8gd29yayBldmVuIGlmIGkganVzdCBwdXQgdHdvIHZhbHVlc0gAUABYAHAAeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgCgAgCYAwCSBwCgBwCyBwC4BwDCBwDIBwCACAA&sclient=gws-wiz-serp */
    // this bit gives number3 a default of 1 if left blank.
    
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      setError('Invalid input. Please enter valid numbers, including scientific notation like 1.2e5.');
      setResult(null);
      return;
    }

    let calculationResult;
    if (operation === 'multiply') {
      calculationResult = num1 * num2 * num3;
    } else if (operation === 'divide') {
      if (num2 === 0 || num3 === 0) {
        setError('Cannot divide by zero.');
        setResult(null);
        return;
      }
      calculationResult = num1 / num2 / num3;
    }

    // Display the result in a readable scientific notation format (e.g., using toExponential or toLocaleString)
    setResult(calculationResult.toExponential(5)); // Displays result with 5 decimal places in exponential form
    setResult2(calculationResult.toFixed(20)); // Displays result with 20 digits in decimal form.  https://www.google.com/search?q=react+express+scientific+notation+as+a+decimal&rlz=1C1VDKB_enUS1201US1201&oq=react+express+scientific+notation+as+a+decimal&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRifBTIHCAYQIRifBTIHCAcQIRifBTIHCAgQIRifBTIHCAkQIRifBdIBCTExODk0ajBqN6gCCLACAfEFJYzkgH2G5Hw&sourceid=chrome&ie=UTF-8
  };

  return (
    <div>
      <h1>Scientific Notation Calculator</h1>
      <p className='instructions'>Enter a numerical value in the fields below:  Example: 4.2e6; 4e-4; 3<br />Number 3 has a default value of 1 should you only need to multiply or divide 2 values.</p>
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
      </select>
       <br />

       

      <div className='user-input-flex'>

        <div className='user-input-div'>
          <label className="user-input" htmlFor="user-input">Number 1   
            <input
             type="text" // Use "text" type to allow the 'e' character
             value={number1}
             onChange={(e) => setNumber1(e.target.value)}
            />
          </label>
      
        </div>

         <div className='user-input-div'>
          <label className="user-input" htmlFor="user-input">Number 2  
            <input
             type="text"
             value={number2}
             onChange={(e) => setNumber2(e.target.value)}
            />
          </label>
          
         </div>
        
        <div className='user-input-div'>
          <label className="user-input" htmlFor="user-input">Number 3  
            <input
              type="text" // Use "text" type to allow the 'e' character
              value={number3}
              onChange={(e) => setNumber3(e.target.value)}
            />
          </label>
        </div>
         
        <button onClick={performCalculation}>Calculate</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && (
        <div>
          <p>
            Scientific Notation Result: {result}
          </p>
          <p>
            Decimal Result: {result2}
          </p>
        </div>
         
      )}
    </div>
  );
}


