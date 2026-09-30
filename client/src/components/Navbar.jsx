import { useNavigate } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  const navigate=useNavigate()
  return (
   <>
    <div className="navbar flex items-center justify-between px-6 md:px-10 py-4">
  <h1 className="text-2xl font-bold text-white tracking-wide cursor-pointer" onClick={()=>navigate("/")}>
    Brain<span className="text-[#aeddd1]">Brawl</span>
  </h1>

  <button className="login-btn px-5 py-2 rounded-lg font-semibold" onClick={()=>navigate("/login")}>
    Login
  </button>
</div>
   </>
  )
}

export default Navbar
