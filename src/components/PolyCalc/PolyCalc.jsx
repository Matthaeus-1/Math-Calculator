/* The following search result creates a single component to allow for Multiplication, Division, Addition, and Subtraction of Polynomials */

/* https://www.google.com/search?q=reaqct+component+to+multiply+divide+add+and+subtract+polynomials&rlz=1C1VDKB_enUS1201US1201&oq=reaqct+component+to+multiply+divide+add+and+subtract+polynomials&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTEyNzk5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8 */



import React, { useState, useEffect } from 'react';
import { formatPolynomial } from '../../utilities/formatPolynomial.jsx';
import { parsePolynomial } from '../../utilities/parsePolynomial.jsx';
import './PolyCalc.css';
import '../../index.css';

/* Code organization and placing helper functions in their own utilities file so that the component does'nt get too bloated.  Then import the helper function files into the component to access before the component is called as the helper functions have already been defined. */

/* I want a drop down menu for operation selection and I want to exand the capability of the component to multiplication and division */


/* Add and Subtract Polynomials*/
/* https://www.google.com/search?q=i+need+a+react+component+to+add+and+subtract+polynomials&sca_esv=fb6d0fda0b9c5d95&rlz=1C1VDKB_enUS1201US1201&biw=1506&bih=954&sxsrf=ANbL-n7WCCHeTS2oKC1WeocUX_kAGflTiA%3A1772762296844&ei=uDSqaaalM9-sur8Ph-iRgQ4&ved=0ahUKEwim4eWXloqTAxVflu4BHQd0JOAQ4dUDCBE&uact=5&oq=i+need+a+react+component+to+add+and+subtract+polynomials&gs_lp=Egxnd3Mtd2l6LXNlcnAiOGkgbmVlZCBhIHJlYWN0IGNvbXBvbmVudCB0byBhZGQgYW5kIHN1YnRyYWN0IHBvbHlub21pYWxzMggQABiiBBiJBTIFEAAY7wUyCBAAGKIEGIkFMgUQABjvBUjFltABUNmG0AFYpo_QAXACeACQAQCYAXSgAagGqgEDNC40uAEDyAEA-AEBmAIJoALTBcICCBAAGLADGO8FwgILEAAYsAMYogQYiQXCAggQABiABBiiBMICBBAhGArCAggQIRigARjDBMICChAhGKABGMMEGAqYAwCIBgGQBgKSBwM2LjOgB9YdsgcDNC4zuAfPBcIHAzIuN8gHDoAIAA&sclient=gws-wiz-serp */

export const PolyCalc = () => {
  const [poly1, setPoly1] = useState('3x^2 + 2x - 5');
  const [poly2, setPoly2] = useState('x^2 - 4x + 7');
  const [result, setResult] = useState('');

  const calculate = (operation) => {
    const p1 = parsePolynomial(poly1);
    const p2 = parsePolynomial(poly2);
    const res = { ...p1 };

    Object.keys(p2).forEach(exp => {
      res[exp] = (res[exp] || 0) + (operation === 'add' ? p2[exp] : -p2[exp]);
    });

    setResult(formatPolynomial(res));
  };

  return (
    <div className='' style={{ fontFamily: 'Georgia' }}>
      <h1>Polynomial Calculator</h1>
      <input type="text" value={poly1} onChange={e => setPoly1(e.target.value)} placeholder="Poly 1 (e.g., 3x^2+2x)" style={{width: '200px'}} />
      <br /><br />
      <input type="text" value={poly2} onChange={e => setPoly2(e.target.value)} placeholder="Poly 2" style={{width: '200px'}} />
      <br /><br />
      <button onClick={() => calculate('add')}>Add (+)</button>
      <button onClick={() => calculate('subtract')} style={{marginLeft: '10px'}}>Subtract (-)</button>
      <p>Result: {result}</p>
    </div>
  );
};



