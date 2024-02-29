import React from "react";

const Akasa = () => {
  return (
    <>
      <div
        id="parent"
        style={{
          margin: "50px",
          textAlign: "center",
        }}
      >
        {/* first line  */}
        <div id="firstLine" style={{ display: "flex", margin: "0 0 10px 0" }}>
          <div>Tue, 13 Apr, 2021</div>
          <div style={{ margin: "0 20px" }}>
            <div
              style={{
                width: "25px",
                borderRadius: "25px",
                background: "red",
                border: "1px solid black",
                height: "25px",
              }}
            ></div>
          </div>
          <div>jon snow removed association</div>
        </div>
        {/* second line */}
        <div id="secondLine" style={{ display: "flex", margin: "0 0 10px 0" }}>
          <div>Tue, 13 Apr, 2021</div>
          <div style={{ margin: "0 20px" }}>
            <div
              style={{
                width: "25px",
                borderRadius: "25px",
                background: "red",
                border: "1px solid black",
                height: "25px",
              }}
            ></div>
          </div>
          <div>jon snow removed association</div>
        </div>
      </div>
    </>
  );
};

export default Akasa;

// import React, { useState } from "react";

// const Akasa = () => {
//   const [first, setFirst] = useState({ value: "", isEq: "" });
//   const [second, setSecond] = useState({ value: "", isEq: "" });
//   const [third, setThird] = useState({ value: "", isEq: "" });

//   //to set the values initially
//   function handleChange({ target }) {
//     const { name, value } = target;

//     switch (name) {
//       case "first":
//         setFirst({ value: value, isEq: "" });
//         break;

//       case "second":
//         setSecond({ value: value, isEq: "" });
//         break;

//       case "third":
//         setThird({ value: value, isEq: "" });
//         break;

//       default:
//         break;
//     }
//   }

//   //to handle the blur event
//   function handleBlur({ target }) {
//     const { name, value } = target;
//     const arr = [first, second, third];

//     if (value.startsWith("=")) {
//       const [tempf, s] = value.split("+");
//       const f = tempf.split("=")[1];
//       const computedValue = Number(arr[f].value) + Number(arr[s].value);
//       //f=first value of the formula & s=second value of the formula

//       switch (name) {
//         case "first":
//           // if the user enters wrong formula then treat it as invalid formula and set the value as 0
//           f === "0" || s === "0"
//             ? setFirst({
//                 value: 0,
//                 isEq: "",
//               })
//             : setFirst({
//                 value: computedValue,
//                 isEq: value, // setting the value with the formula
//               });
//           break;

//         case "second":
//           // if the user enters wrong formula then treat it as invalid formula and set the value as 0
//           f === "1" || s === "1"
//             ? setSecond({
//                 value: 0,
//                 isEq: "",
//               })
//             : setSecond({
//                 value: computedValue,
//                 isEq: value, // setting the value with the formula
//               });
//           break;

//         case "third":
//           // if the user enters wrong formula then treat it as invalid formula and set the value as 0
//           f === "2" || s === "2"
//             ? setThird({
//                 value: 0,
//                 isEq: "",
//               })
//             : setThird({
//                 value: computedValue,
//                 isEq: value, // setting the value with the formula
//               });
//           break;

//         default:
//           break;
//       }
//     }
//   }

//   function handleFocus({ target }) {
//     const { name, value } = target;

//     switch (name) {
//       case "first":
//         setFirst({
//           value: first.isEq ? first.isEq : first.value, //checks if it's a formula, then replaces it with the formula or else the value
//           isEq: value,
//         });
//         break;

//       case "second":
//         setSecond({
//           value: second.isEq ? second.isEq : second.value,
//           isEq: value,
//         });
//         break;

//       case "third":
//         setThird({
//           value: third.isEq ? third.isEq : third.value,
//           isEq: value,
//         });
//         break;

//       default:
//         break;
//     }
//   }

//   return (
//     <div style={{ margin: "100px 0", textAlign: "center" }}>
//       <input
//         name="first"
//         type="text"
//         value={first.value}
//         onFocus={handleFocus}
//         onChange={handleChange}
//         onBlur={handleBlur}
//       />
//       <input
//         name="second"
//         type="text"
//         value={second.value}
//         onFocus={handleFocus}
//         onChange={handleChange}
//         onBlur={handleBlur}
//       />
//       <input
//         name="third"
//         type="text"
//         value={third.value}
//         onFocus={handleFocus}
//         onChange={handleChange}
//         onBlur={handleBlur}
//       />
//     </div>
//   );
// };

// export default Akasa;

// // ### spreadsheet app , enter numbers and simple formula (=A1+B1)
// // - Show a list of cells
// // - a cell can contain a number or an equation
// // - if cell contains an equation (=A+B) then show the result of the equation beside the input cell
// // - On change of any cell content the equation cells should update
