import React from 'react'
import '../style/orphanage.css'
const Orphanage = () => {
  return (
    <div class="orphform">  
        <form action="#" class="orph"/>
        <div class="wrapper-orph">
        <div class="title">
          Orphanage Form
        </div>
        <div class="form">
           <div class="inputfield">
              <label>HOME NAME :</label>
              <input type="text" class="input" required maxlength="40"/>
           </div>  
            <div class="inputfield">
              <label>ADDRESS :</label>
              <input type="text" class="input" placeholder="Flatno/Streetname,Area"/>
           </div>  
           <div class="inputfield">
            <label>CITY :</label>
            <div class="custom_select">
              <select>
                <option value="chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="salem">Salem</option>
              </select>
            </div>
           </div>  
            <div class="inputfield">
              <label>STATE :</label>
              <div class="custom_select">
                <select>
                  <option value="kerala">Kerala</option>
                  <option value="tamilnadu">TamilNadu</option>
                  <option value="karnataka">Karnataka</option>
                </select>
              </div>
           </div>
           <div class="inputfield">
            <label>PINCODE :</label>
            <input type="text" class="input"/>
         </div> 
        <div class="inputfield">
            <label>MOBILE NUMBER :</label>
            <input type="text" class="input" required/>
         </div> 
         <div class="inputfield">
          <label>LANDLINE NUMBER :</label>
          <input type="text" class="input"/>
       </div> 
        
        <div class="inputfield">
            <label>EMAIL :</label>
            <input type="email" class="input" required/>
         </div> 
         <div class="upload">
          <button type="button" class="btn-warning">
          <i class="fa fa-upload"></i> Upload Photo 
          <input type="file"/>
          </button>
         </div>
          </div> 
          </div>
          </div>
  )
}

export default Orphanage;