import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import thefirmalogo from "../img/thefirma_white.png";
import turkuamklogo from "../img/turku_amk.png";


const PageAfterSendingForgotPasswordEmail = () =>{

    const history = useHistory();
  
    return ( 
      <React.Fragment >
        <main >
        <header className="thefirmaimg"><img src={thefirmalogo} alt="thefirmalogo"  height="70px"/>
        <p class="h4 mb-5 font-weight-normal text-white">Booking Computer App</p></header>
         <article style={{paddingTop: 0, paddingBottom: 0}}>
           <p className="Textupperinput">WE HAVE E-MAILED YOUR PASSWORD RESET LINK!</p>

           <button className="SendEmailInput" 
               type='button' 
               value="Login" onClick={() => history.push("/login")}>LOGIN
               </button>
               
          
           
  
         </article>
  
         
         
         
         <footer><img src={turkuamklogo} alt="turkuamklogo" class="mt-5 mb-4" height="70px" /></footer>
         </main>
     </React.Fragment>);
  };
      
    
    
         
       
      
    
    
    export default PageAfterSendingForgotPasswordEmail;