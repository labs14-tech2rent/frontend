import axios from "axios";

// axios.get('https://labstech2rentstaging.herokuapp.com/api/users/userIDS')
//                  .then(res => { 
//                      //filter through data and pull out all the auth0_user_id values from their objects
//                      res.data.filter(res => {
                        
//                         //grab all the above values and push them inside users array
//                         users.push(res.auth0_user_id)
                        
                       
//                      })

async function checkUser() {
    const users = []
    
    await axios.get('https://labstech2rentstaging.herokuapp.com/api/users/userIDS')
            
      .then(res => { 
         
         //filter through data and pull out all the auth0_user_id values from their objects
         res.data.filter(res => {
            
            //grab all the above values and push them inside users array
            users.push(res.auth0_user_id)
          
         })
   
      })
      .catch(err => console.log(err)) 

      
   console.log(users)
   
   //   let exist = false
   //    //check against our db to see if it includes the userId that was just logged in
   //  if (users.includes(localStorage.getItem('user_id'))) {
   //    console.log('exits')
   
   //    exist = false
   //    //if they exists in our db, then reroute them to the home page
      
   // } else {
   //    console.log('does not')
   //    exist = false
   //    //if they do not exist reroute them to finish registration
   
   // }
   // return exist
    
    return users.includes(localStorage.getItem('user_id'))
}

export default checkUser