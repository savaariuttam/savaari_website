"use client";
import React from "react";
import Homepage from "./home/page";
export default function Home() {
  return (
    <>
      <Homepage />
    </>
  );

}













// "use client";
// import React, { useEffect, useState } from "react";
// import Leftscreen from "./components/leftscreen";
// import Rightscreen from "./components/rightscreen";
// import Header from "./components/header";
// import Loader from "./components/Loader";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import DetailsPage from "./components/DetailsPage/DetailsPage";
// export default function Home() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = () => {
//       setTimeout(() => {
//         setLoading(false);
//       }, 500);
//     };

//     fetchData();
//   }, []);
//   const router = createBrowserRouter(
//     [
//       {
//         path: "/detailspage",
//         element: <DetailsPage />
//       },
//       {},
//     ]
//   );
//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           <Header />
//           <main className="flex justify-center p-4">
//             <Leftscreen />
//             <Rightscreen />
//           </main>
//           <RouterProvider router={router} />
//         </>
//       )
//       }
//     </>
//   );
// }
