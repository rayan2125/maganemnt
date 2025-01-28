"use client"

import { useRouter } from "next/navigation"


const Sidebar :React.FC=()=>{
    const navigation = useRouter()
    const handleconsole=()=>{
        navigation.push("/employee")
    }
    return(
<section className="">
    <div>
        <h1>hhh</h1>
        <button onClick={handleconsole}>test</button>
    </div>
</section>
    )
}
export default Sidebar