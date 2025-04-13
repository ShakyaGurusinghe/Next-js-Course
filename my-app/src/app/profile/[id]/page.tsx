"use client";
import {useParams, useRouter} from'next/navigation' 

export default function ProfileID(){

    const params = useParams();
    console.log(params.id);

    const router = useRouter();
    console.log(router);

    return <div>
        <h1>Profile page id: {params.id}</h1>
        <h1 onClick={()=>router.push("/profile")}>Back to profile page</h1>
    </div>
}