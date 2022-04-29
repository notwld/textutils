import React, { useState } from "react";
import "../App.css";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setbtnText] = useState("Light Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setbtnText("Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
      });
      setbtnText("Dark Mode");
    }
  };
  return (
    <div className="container" style={myStyle}>
      <h1>About Me</h1>
      <div className="aboutContainer" style={myStyle}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          ipsa hic id odit neque soluta inventore, fuga aliquid modi minima
          quibusdam iusto enim ipsum esse, repudiandae cumque repellat cum
          dolores! Voluptas quod dolorem sed recusandae neque mollitia quaerat
          impedit tenetur, molestias cumque repellendus repudiandae laboriosam
          esse error, iusto adipisci non? Voluptatem eaque quidem ipsam et
          doloribus cum enim, consequatur quas! Eum, nostrum repellendus
          consectetur nihil nisi rem natus officiis quas reprehenderit esse
          neque at accusantium aspernatur tempora nulla inventore illo impedit
          libero temporibus minus voluptatum! Explicabo debitis vitae architecto
          nesciunt. Saepe mollitia nulla eaque optio rem, dolore nam odit
          aperiam obcaecati unde et illum fugit minima voluptates reiciendis
          animi dicta voluptatum doloremque quis itaque distinctio magni. Quis
          quod accusantium unde. Autem deserunt, aliquid repellat ducimus
          aperiam repudiandae adipisci aspernatur distinctio impedit molestias
          quaerat at dolorum labore maiores tenetur voluptatibus sit quibusdam
          illum placeat sapiente iste eum iusto consequuntur! Esse, animi?
        </p>
      </div>
      <div className="btnContainer">
        <button onClick={toggleStyle} style={myStyle}>
          {btnText}
        </button>
      </div>
    </div>
  );
}
