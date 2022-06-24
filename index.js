// Add your code here
// let submitData = {
//     function (name,email){
//          fetch("http://localhost:3000/users",{
//         method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     name ,
//     email,
//   }),
//     })
//     .then( function ( response ) {
//         return response.json()
//       } )
//       .then( function ( object ) {
//         document.body.innerHTML = object[ "id" ]
//       } )
// }
//     }

function submitData(name, email){
    return fetch("http://localhost:3000/users",{
        method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name ,
    email,
  }),
    })
    .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
       document.body.innerHTML = object[ "id" ]
        // document.getelementbyid(id).innerhtml='<object>'
        // console.log(object);
      } )
       .catch( function ( error ) {
        document.body.innerHTML = error.message
    } )
} 