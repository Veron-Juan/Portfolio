// import { useEffect } from "react";
// import { useState } from "react";
// import styled from "styled-components";

// const Project  = styled.div`
// width: 380px;
// height: 100%;
// border-radius: 15px;
// margin: 35px auto;
// background-image: radial-gradient(circle at 78.81% 39.51%, #ffdfff 0, #e1beff 25%, #b89aea 50%, #8c78d2 75%, #817dbf8c 100%);
// display: flex;
// flex-direction: column;

// h3{
//     text-align: center;
//     font-size: 25px;
//     margin: 8px 0;
// }
// p{
//     text-align: justify;
//     padding: 0 10px;
//     font-size: 20px;

// }
// img{
//     border-radius: 15px;
// }

// `

// function Projectxx() {

//     const [show, setShow] = useState(false)

//     useEffect(()=>{
//         const onChangue = (entries)=>{
//             console.log(entries)
//             const el = entries[0]
//             if (el.isIntersecting){
//                 setShow(true)
//             }
//         }
//         const observer = new IntersectionObserver(onChangue, {
//             rootMargin:'100px'
//         })
//         observer.observe(document.getElementById('lazy'))
//     })

//   return (
//     <>
//     {show ? <Project id="lazy" /> : null }
    
//     </>
//   )
// }

// export default Projectxx
