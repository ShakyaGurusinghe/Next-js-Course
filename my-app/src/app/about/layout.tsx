"use client";
import "../about.css"

export default function AboutLayout({
    children
}:{
    children: React.ReactNode;
}){
    return <div>
         <header>This is the about header</header>
         {children}
    </div>

        
}