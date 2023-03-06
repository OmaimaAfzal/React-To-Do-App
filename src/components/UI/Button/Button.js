import React from "react";
//import styled from "styled-components";

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   // for suedo you can use & suppoerted by styled package thats tell the package you want to have special suedo selector
//   &:focus {
//     outline: none;
//   }

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;
//styled has method for all elements in html like p, div,a , button etc
//styled is a component and button its a method it just special type of syntax
//default js syntax supported by js

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
