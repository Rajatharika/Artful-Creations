import React from "react";
function UserComponents(){
const user={name:'Raju',age:'19'}
    return (
        <div>
               <h1>Components</h1>
             <h3>UserName:{user.name}</h3>
             <h3>UserAge:{user.age}</h3>
        </div>
    );
}
export default UserComponents;