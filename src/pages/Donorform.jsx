import React from 'react'
import '../style/donorform.css'
const Donorform = () => {
  return (
    <div class="donorform">
       <form action="#" class="donor">
    <div class="wrapper1">
        <div class="donortitle">
          Donar details
        </div>
        <div class="form1">
           <div class="donorinput">
              <label>DONOR NAME :</label>
              <input type="text" class="donordetails" required maxlength="40"/>
           </div>  
            <div class="donorinput">
              <label>ADDRESS :</label>
              <input type="text" class="donordetails" placeholder="Flatno/Streetname,Area"/>
           </div>  
           <div class="donorinput">
            <label>CITY :</label>
            <div class="custom_select">
              <select>
                <option value="chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="salem">Salem</option>
              </select>
            </div>
           </div>  
            <div class="donorinput">
              <label>STATE :</label>
              <div class="custom_select">
                <select>
                  <option value="kerala">Kerala</option>
                  <option value="tamilnadu">TamilNadu</option>
                  <option value="karnataka">Karnataka</option>
                </select>
              </div>
           </div> 
            <div class="donorinput">
              <label>PINCODE :</label>
              <input type="text" class="donordetails"/>
           </div> 
          <div class="donorinput">
              <label>MOBILE NUMBER :</label>
              <input type="text" class="donordetails" required/>
           </div> 
           <div class="donorinput">
            <label>ALTERNATIVE MOBILE NUMBER :</label>
            <input type="text" class="donordetails"/>
         </div> 
          
          <div class="donorinput">
              <label>EMAIL :</label>
              <input type="email" class="donordetails" required/>
           </div> 
          
           <div class="title2">
            DONATING ITEMS
          </div>
          <div class="donorinput2">
            <label>DONATING ITEMS :</label> 
            <input type="text" class="donordetails" placeholder="clothes/Stationary/sanitary/goods"/>
         </div>  
         <div class="donorinput3">
          <label>PICKUP VEHICLE :</label>
              <input type="radio" class="radio-button" name="r1"/>
              <label style={{marginRight: "10px", color: "black", fontSize: "17px"}} >Small</label>
              <input type="radio" class="radio-button"name="r1"/>
              <label style={{marginRight: "10px", color: "black", fontSize: "17px"}} >Medium</label>
              <input type="radio" class="radio-button"name="r1"/>
              <label style={{marginRight: "10px", color: "black", fontSize: "17px"}} >Large</label>
          </div>

           <div class="donorinput">
            <input type="submit" value="SUBMIT" class="btn"/>
          </div>
        </div>
    </div>
  </form>
    </div>
  )
}

export default Donorform