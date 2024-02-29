import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useEffect, useRef, useState } from "react";

function App() {
  const [text, setText] = useState(0);
  const ref = useRef(0);

  let t = "jkasndjk";

  function handleClick(e) {
    // setText((prev) => prev + 1);
    ref.current = ref.current + 1;
    // ref.current.style.transform = "";
    // ref.current.style.left = `${e.clientX}px`;
    // ref.current.style.top = `${e.clientY}px`;

    // ref.current.animate(
    //   [
    //     // key frames
    //     { from: { left: 0, top: 0 } },
    //     { to: { left: `${e.clientX}px`, top: `${e.clientY}px` } },
    //   ],
    //   {
    //     // sync options
    //     duration: 1000,
    //     iterations: Infinity,
    //   }
    // );
  }

  useEffect(() => {
    console.log("count useEFfect");
    console.log("upper useEFfect", ref);
    t = "jsbadja";
  }, [text]);

  useEffect(() => {
    console.log("ahbasd");
  }, [t]);

  useEffect(() => {
    console.log("current useEFfect", ref);
    if (ref.current) {
      console.log("ref useEFfect");
      // setText(1);
    }

    return () => {};
  }, [ref.current]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "yellow",
        animationTimingFunction: "linear",
      }}
      onClick={handleClick}
    >
      <div
        // ref={ref}
        style={{
          height: "100px",
          width: "100px",
          background: "red",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>
    </div>
  );
}

// function App() {
//   const [items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [interval, setInterval] = useState(null);

//   useEffect(() => {}, []);

//   const divRef = useRef(null);

//   const fetchData = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(
//         `https://reqres.in/api/unknown?page=${page}`
//       );
//       const data = await response.json();

//       setItems((prevItems) => [...prevItems, ...data.data]);
//       setPage((prevPage) => prevPage + 1);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleScroll = () => {
//     if (
//       divRef.current.innerHeight + document.documentElement.scrollTop !==
//         document.documentElement.offsetHeight ||
//       isLoading
//     ) {
//       return;
//     }

//     fetchData();
//   };

//   useEffect(() => {
//     if (divRef.current) divRef.current.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [divRef, isLoading]);

//   return (
//     <div
//       style={{
//         textAlign: "center",
//         background: "darkcyan",
//         margin: "10% 25%",
//         width: "50%",
//         height: "200px",
//         overflow: "scroll",
//       }}
//       ref={divRef}
//     >
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item.name}</li>
//         ))}
//       </ul>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//     </div>
//   );
// }

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [interval, setinterval] = useState(null);
//   const [data, setData] = useState([]);

//   function handleStart() {
//     let i = setInterval(() => {
//       setCounter((prev) => prev + 1);
//     }, 1000);
//     setinterval(i);
//   }
//   function handleStop() {
//     clearInterval(interval);
//   }

//   useEffect(() => {
//     async function callTheApi() {
//       const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await resp.json();
//       setData(data);
//     }

//     callTheApi();
//   }, []);

//   function handleChange({ target }, index) {
//     setData(
//       data.map((d, i) => {
//         if (i === index) d.address.geo.lat = target.value;
//         return d;
//       })
//     );
//   }

//   return (
//     <>
//       {/* <Routes>
//         <Route path="/" element={<Dashboard />} />
//       </Routes> */}

//       <h1>{counter}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//       {data.map((d, index) => {
//         return d.address.geo.lat > 0 ? (
//           <input
//             value={d.address.geo.lat}
//             key={d.id}
//             onChange={(e) => handleChange(e, index)}
//           />
//         ) : null;
//       })}
//     </>
//   );
// }

// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import Happlab from "./components/Happlab";
// import Form from "./components/Form";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Happlab />} />
//         <Route path="/form" element={<Form />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
// // import { useEffect, useRef, useState } from "react";
// // import "./App.css";
// // import CelebrityDetails from "./components/CelebrityDetails";
// // import Header from "./components/Header";
// // import Box from "@mui/material/Box";
// // import Akasa from "./components/Akasa";

// // function App() {
// //   const [first, setFirst] = useState([]);

// //   const ref1 = useRef();
// //   const ref2 = useRef();
// //   const ref3 = useRef();
// //   const ref4 = useRef();

// //   function handleChange({ target }) {
// //     const { name, value } = target;
// //     setFirst([...first, value]);

// //     switch (name) {
// //       case "first":
// //         ref2.current.focus();
// //         break;

// //       case "second":
// //         ref3.current.focus();
// //         break;

// //       case "third":
// //         ref4.current.focus();
// //         break;

// //       case "fourth":
// //         break;

// //       default:
// //         break;
// //     }
// //   }

// //   // function handleChangeFirst({ target }) {
// //   //   setFirst(target.value);
// //   //   ref2.current.focus();
// //   // }

// //   // function handleChangeSecond({ target }) {
// //   //   setSecond(target.value);
// //   //   ref3.current.focus();
// //   // }

// //   // function handleChangeThird({ target }) {
// //   //   setThird(target.value);
// //   //   ref4.current.focus();
// //   // }
// //   // function handleChangeFourth({ target }) {
// //   //   seFourth(target.value);
// //   // }

// //   return (
// //     // <Box className="App">
// //     //   <input
// //     //     ref={ref1}
// //     //     name="first"
// //     //     type="text"
// //     //     value={first[0]}
// //     //     onChange={handleChange}
// //     //     autoFocus={true}
// //     //   />
// //     //   <input
// //     //     ref={ref2}
// //     //     name="second"
// //     //     type="text"
// //     //     value={first[1]}
// //     //     onChange={handleChange}
// //     //   />
// //     //   <input
// //     //     ref={ref3}
// //     //     name="third"
// //     //     type="text"
// //     //     value={first[2]}
// //     //     onChange={handleChange}
// //     //   />
// //     //   <input
// //     //     ref={ref4}
// //     //     name="fourth"
// //     //     type="text"
// //     //     value={first[3]}
// //     //     onChange={handleChange}
// //     //   />

// //     //   {/* <Header />
// //     //   <Box style={{ margin: "10px 20px 0 20px" }}>
// //     //     <CelebrityDetails />
// //     //   </Box> */}
// //     // </Box>
// //     <Akasa />
// //   );
// // }

export default App;
