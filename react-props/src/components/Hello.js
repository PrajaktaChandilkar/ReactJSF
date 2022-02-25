import React from "react";

function Hello({greetTo, greetAlsoTo = 'india'}) {
  //destrure
  // const {greetTo, greetAlsoTo} = props 
  return (
    <div>
      {/* <h1>Hello {props.greetTo } and {props.greetAlsoTo}</h1> */}
      <h1>Hello {greetTo } and {greetAlsoTo}</h1>
      <p>
        milique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
        earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid
        culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ips
      </p>
    </div>
  );
}

export default Hello

//default rendering