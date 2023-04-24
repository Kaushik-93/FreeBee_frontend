import '../style/page1.css'
import Donate from '../images/donate.jpg'
import Icon from '../images/gicon.jpg'

const Page1 = () => {

    return(
        <div>
            <div class="bg">  
       <div> 
       
        <img src={Donate}  class="img-thumbnail"/>
        </div> 
    <div class="container">
            <div class="input-box">
                <header>LOGIN</header>
            </div>
        <form action="#"/>
        <div class="input-field">
            <label for="email">EMAIL : </label>
            <input type="email" class="input" id="email" placeholder="example@gmail.com" maxlength="20" required/>
        </div>
        <div class="input-field2">
            <label for="password">PASSWORD : </label>
            <input type="password" class="input" name="password" id="password" placeholder="password" required/>
        </div>
        <div class="rad">
            <input type="radio" class="radio-button" name="r1"/>
              <label>DONOR</label>
              <input type="radio" class="radio-button1" name="r1"/>
              <label >ORPHANAGE</label>
        </div>
         <div class="inputfield1">
            <input type="submit" class="submit" value="LogIn"/>
        </div> 
        <div class="orr">
            <p>or</p>
        </div>
        
           <div>
            <img src={Icon} class="icon"/>
           </div>
      
        <div class="signin">
            <span>Create new account <a href="signup.html">SignUp</a></span>
        </div>

    </div>
    </div> 
</div>


    );

}

export default Page1;
