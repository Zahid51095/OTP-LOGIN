import { useState } from "react";
import OtpInput from "./Otp_Input";


const PhoneOtpForm = () => {
    const [phoneNumber, setPhonenumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);
    
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

        // show Otp filed
        setShowOtpInput(true);
    };

    const onOtpSubmit = (otp) => {
        console.log("Login Successfull", otp);
    }

    return (
        <div>
           {!showOtpInput ? 
             <form onSubmit={handlePhoneSubmit}>
             <input type="text"  value={phoneNumber}
              onChange={handlePhoneNumber}
              placeholder="Enter Phone Number"
             />
             <button type="submit">Submit</button>
         </form> : 
         <div>
            <p>Enter Otp Sent to this {phoneNumber}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}></OtpInput>
            
         </div>   
        
        }
        </div>
    );
};

export default PhoneOtpForm;