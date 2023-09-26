// 'use client'
import Data from './Data';
import Navbar from '../components/common/Navbar'
// import { useEffect, useState } from 'react'

export default async function Test() {
    // const res = await fetch(`${process.env.COUNTRIES_API}`);
    // const data = await res.json();

    return (
        <></>
        // <Data data={data} />
    )    
}

// export default function Page({ params: { lang } }) {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_API}`);
//             console.log(process.env.NEXT_PUBLIC_JSON_API)
//             const data = await res.json();
//             setData(data);
//         }
//         fetchData();
//     }, []);

//     return (
//         <>
//             <Navbar />
//             {data && data.map((item, index) => {
//                 return (
//                     <div key={index}>
//                         <h1>{item.title}</h1>
//                         <p>{item.body}</p>
//                     </div>
//                 )
//             })}
//             Success Page
//         </>
//     )
// }