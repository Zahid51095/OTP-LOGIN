
import './App.css'
import PhoneOtpForm from './components/phone_login'

function App() {
  const h1Style = {
    color: "blue"
  };

 

  return (
    <div className='App'>
       <h1 style={h1Style}>Login With Phone</h1>

      <PhoneOtpForm></PhoneOtpForm>
    </div>
  )
}

export default App
