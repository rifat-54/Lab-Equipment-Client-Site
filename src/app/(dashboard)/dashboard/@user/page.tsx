
export default async function UserDashbord() {

    // const[loading,setLoading]=useState(true)

    // useEffect(()=>{
    //     const timer=setTimeout(()=>{
    //         setLoading(false)
    //     },3000)

    //     return ()=> clearTimeout(timer)
    // },[])

    // if(loading){
    //     return (<>
    //     Loading...
    //     </>)
    // }

    await new Promise((resolve)=>setTimeout(resolve,3000));
 
  return (
    <div className='border-red-500 border-2 p-5'>User Dashbord</div>
  )
}
