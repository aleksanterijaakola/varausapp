import React, { useRef,useState } from "react";
import "../App.css";
import thefirmalogo from "../img/thefirma_white.png";
import turkuamklogo from "../img/turku_amk.png";

import { faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Dashboard() {
  const emailRef = useRef();
  const [inputcheck, setchecked] = useState(false);

  return (
    <React.Fragment>
      <main style={{paddingTop: 0}}>
      <header className="headernav" >
        <nav className='headernavtag'>
          <input type="checkbox" className='navcheckbox'  checked={inputcheck}/>
          <label onClick={() => {setchecked(old => !old)}} className='navicon'  style={{marginBottom: 0}}><FontAwesomeIcon icon={faList} color='white' /></label>
 
          
         
          <label className='labelfirmaimg' style={{marginBottom: 0}}>
            <img className='firmaimg' src={thefirmalogo}>

            </img>

          </label>
          <ul className='navdivisionlist'>
            <li className='navdivisionlistitem'>My Bookings

            </li>
            <li className='navdivisionlistitem'>Reserve System
              
            </li>
            <li className='navdivisionlistitem'>Log Out
              
            </li>
          </ul>


        </nav>
      </header>
     
        
      </main>

    </React.Fragment>
  );
}
