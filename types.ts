type userdetails ={
    fname:string,
     lname:string,
     age:number,
   complexion:string,
    address:{
        location:string,
        houseNo:number,
        state:string
     }
 }



 interface user{
     fname:string,
     lname: string,
     age: number,
    complexion:string,
     married: boolean,
     address:{
         location:string,
         houseno: number,
        state:string,
    }
 }

 const user ={
     fname: "Jame",
     lname:"doe",
     age:30,
     complexion:"brown",
     married: true,
     address: {
         location:"uyo",
         houseNo:23,
        state:"AKS"
        
     }
 }

  console.log(user);