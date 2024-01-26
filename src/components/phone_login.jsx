import { useState } from "react";
import OtpInput from "./Otp_Input";



const PhoneOtpForm = () => {
    const buttonStyle = {
        backgroundColor: "gray",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer"
      };

      const inputStyle = {
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid gray",
        marginBottom: "10px",
        marginRight: "10px"
      };
    const [phoneNumber, setPhonenumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false); // New state variable for login status

    const handlePhoneNumber = (event) =>{
        setPhonenumber(event.target.value);
    };

    const handlePhoneSubmit = (event) =>{
        event.preventDefault();

        // Number Validation
        const regex = /[^0-9]/g;
        if(phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Invalid Phone Number");
            return;
        }

        // show Otp field
        setShowOtpInput(true);
    };

    const onOtpSubmit = (otp) => {
        console.log("Login Successful", otp);
        setLoginSuccess(true); // Set login success status
    }

    return (
        <div>
           {!showOtpInput ? 
             <form onSubmit={handlePhoneSubmit}>
             <input type="text"  value={phoneNumber}
              onChange={handlePhoneNumber}
              placeholder="Enter Phone Number"
              style={inputStyle} 
             />
             <button type="submit" style={buttonStyle}>Get OTP</button>
         </form> : 
         <div>
            <p>Enter Otp Sent to this {phoneNumber}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}></OtpInput>
            {loginSuccess && <p>Login Successful!</p>} 
         </div>   
        
        }
        </div>
    );
};

export default PhoneOtpForm;

