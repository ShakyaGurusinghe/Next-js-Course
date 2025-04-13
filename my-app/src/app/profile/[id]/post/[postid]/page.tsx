"use client";
import {useParams} from'next/navigation' 

export default function ProfileIDpostsId(){
    
    const params = useParams();
    console.log("id");
    console.log(params.id);
    console.log("post id")
    console.log(params.postid);

    return <div>
        my id profiles post page
    </div>
}