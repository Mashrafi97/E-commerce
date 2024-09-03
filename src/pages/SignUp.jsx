import React, { useState } from 'react'
import Container from '../components/Container'
import { FaAngleRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";

const SignUp = () => {
  const auth = getAuth();
  const db = getDatabase();
  let navigate = useNavigate()
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [firstName, setFirstName] = useState('')
  let [showPassword,setShowPassword] = useState(false)
  let handlePassword = (e)=>{
    setPassword(e.target.value);
  }

  let handleEmail =(e)=>{
    setEmail(e.target.value);
  }

  let handleFirstName=(e)=>{
    setFirstName(e.target.value);
  }

  let handleSubmit =(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    updateProfile(auth.currentUser, {
      displayName: firstName,
    }).then(() => {
      setEmail("")
      setPassword("")
      toast("Go TO Login Page")
      setTimeout(()=>{
        navigate("/login")
      },2000);
    }).then(()=>{
      set(ref(db, 'user/'), {
        username: firstName,
        email: email
      });
    }).then(()=>{
      console.log("ok");
      
    })
    .catch((error) => {
      console.log(error);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  }); 
  }

  
  return (
    <>
    <Container>
        <div className="mx-2 lg:mx-0">
        <div className="lg:mt-[124px] mt-[60px]">
          <h2 className='text-[#262626] font-dm lg:text-[49px] text-[30px] font-bold'>Sign up</h2>
          <h6 className='text-[#6D6D60] font-dm lg:text-[12px] font-medium'>Home <FaAngleRight className='inline-block'/> Sign up</h6>
          </div>
          <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
          <div className="border-b-[#F0F0F0] lg:border-b-[1px] w-full">
            <p className='text-[#767676] font-dm lg:text-[16px] text-[14px] font-normal lg:pt-[127px] pt-[60px] lg:w-[40%] lg:pb-[62px] pb-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
          </div>
          <div className="lg:pb-[70px] pb-[0px] w-full border-b-[#F0F0F0] lg:border-b-[1px]">
          <h2 className='text-[#262626] font-dm lg:text-[39px] text-[24px] font-bold lg:pt-[57px] pt-[20px]'>Your Personal Details</h2>
            <div className="gap-[40px] lg:flex flex-none">
                <div className="lg:w-[30%] w-full">
                <label onChange={handleFirstName} htmlFor="firstname" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>First Name</label>
                <input type="text" id='firstname' placeholder='First Name' className='outline-none h-[40px] w-full border-b-[1px] border-b-[#F0F0F0]'/>
                </div>
                <div className="lg:w-[30%] w-full">
                <label htmlFor="lastname" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>Last Name</label>
                <input type="text" id='lastname' placeholder='Last Name' className='outline-none h-[40px] w-full border-b-[1px] border-b-[#F0F0F0]'/>
                </div>
            </div>
            <div className="gap-[40px] lg:flex flex-none">
            <div className="lg:w-[30%] w-full">
                <label htmlFor="email" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>Email address</label>
                <input value={email} onChange={handleEmail} type="email" id='email' placeholder='company@domain.com' className='outline-none h-[40px] w-full border-b-[1px] border-b-[#F0F0F0]'/>
                </div>
            <div className="lg:w-[30%] w-full">
                <label htmlFor="phone" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>Telephone</label>
                <input type="tel" id='phone' placeholder='Your phone number' className='outline-none h-[40px] w-full border-b-[1px] border-b-[#F0F0F0]'/>
            </div>
            </div>
          </div>

          <div className="pt-[69px] ">
          <div className="lg:pb-[70px] pb-[30px] w-full border-b-[#F0F0F0] lg:border-b-[1px]">
          <h2 className='text-[#262626] font-dm lg:text-[39px] text-[24px] font-bold lg:pt-[50px] pt-[0px]'>New Customer</h2>
            <div className="gap-[40px] lg:flex flex-none">
                <div className="lg:w-[30%] w-full">
                <label htmlFor="address1" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>Address 1</label>
                <input type="text" id='address1' placeholder='4279 Zboncak Port Suite 6212' className='outline-none h-[40px] w-full border-b-[1px] border-b-[#F0F0F0]'/>
                </div>
                <div className="lg:w-[30%] w-full">
                <label htmlFor="address2" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>Address 2</label>
                <input type="text" id='address2' placeholder='- - - - - - - -' className='outline-none h-[40px] w-full border-b-[1px] border-b-[#F0F0F0]'/>
                </div>
            </div>
            <div className="gap-[40px] lg:flex flex-none">
            <div className="lg:w-[30%] w-full">
                <label htmlFor="city" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>City</label>
                <input type="text" id='city' placeholder='Your City' className='outline-none h-[40px] w-full border-b-[1px] border-b-[#F0F0F0]'/>
                </div>
            <div className="lg:w-[30%] w-full">
                <label htmlFor="postcode" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>Post Code</label>
                <input type="text" id='postcode' placeholder='05228' className='outline-none h-[40px] w-full border-b-[1px] border-b-[#F0F0F0]'/>
            </div>
            </div>
            <div className="gap-[40px] lg:flex flex-none">
            <div className="lg:w-[30%] w-full">
            <label for="division" class="text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block">Division</label>
                    <select id="division" class="outline-none h-[40px] w-full border-b-[1px] border-b-[#F0F0F0]">
                    <option selected>Please select</option>
                    <option value="dh">Dhaka</option>
                    <option value="ch">Chittagong</option>
                    <option value="ra">Rajshahi</option>
                    <option value="kh">Khulna</option>
                </select>
            </div>
            <div className="lg:w-[30%] w-full">
            <label for="district" class="text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block">District</label>
                    <select id="district" class="outline-none h-[40px] w-full border-b-[1px] border-b-[#F0F0F0]">
                    <option selected>Please select</option>
                    <option value="dh">Dhaka</option>
                    <option value="ch">Chittagong</option>
                    <option value="ra">Rajshahi</option>
                    <option value="kh">Khulna</option>
                </select>
            </div>
            </div>
          </div>
          </div>
          <div className="lg:pb-[70px] pb-[30px] w-full border-b-[#F0F0F0] lg:border-b-[1px]">
          <h2 className='text-[#262626] font-dm lg:text-[39px] text-[24px] font-bold lg:pt-[50px] pt-[20px]'>Your Password</h2>
            <div className="gap-[40px] lg:flex flex-none">
                <div className="lg:w-[30%] w-full relative">
                <label htmlFor="password1" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>Password</label>
                <input onChange={handlePassword} type={showPassword ? "text" : "password"} id='password1' placeholder='Password' className='outline-none h-[40px] w-full border-b-[1px] border-b-[#F0F0F0] pr-[40px]'/>
                <div onClick={()=>setShowPassword(!showPassword)} className="absolute top-[77px] right-2">
                  {showPassword == true ? <FaEyeSlash /> : <FaEye />}                                  
                </div>
                </div>
                <div className="lg:w-[30%] w-full">
                <label htmlFor="password2" className='text-[#262626] font-dm lg:text-[16px] text-[14px] font-bold lg:pt-[42px] pt-[23px] block'>Repeat Password</label>
                <input type="text" id='password2' placeholder='Repeat password' className='outline-none h-[40px] w-full border-b-[1px] border-b-[#F0F0F0]'/>
                </div>
                </div>
                </div>
                <div className="pt-[65px]">
                    <input className='items-center cursor-pointer' type="checkbox" name="check" id="check" />
                    <label htmlFor="check" className='text-[#767676] text-[14px] font-normal font-dm pl-[15px] items-center'>I have read and agree to the Privacy Policy</label>
                    <div className="flex items-center">
                    <div className="">
                    <h2 className='text-[#767676] text-[14px] font-normal font-dm pt-[23px]'>Subscribe Newsletter</h2>
                    </div>
                    <div className="mt-[23px]">
                    <input className='cursor-pointer items-center ml-[33px] text-center' type="checkbox" name="check" id="yes" />
                    <label htmlFor="yes" className='text-[#767676] text-[14px] font-normal font-dm pl-[15px] items-center'>Yes</label>
                    </div>
                    <div className="mt-[23px]">
                    <input className='cursor-pointer items-center ml-[43px] text-center' type="checkbox" name="check" id="no" />
                    <label htmlFor="no" className='text-[#767676] text-[14px] font-normal font-dm pl-[15px] items-center'>No</label>
                    </div>
                    </div>
                    <div className="mt-[27px]">
                      <h5 onClick={handleSubmit} className='text-[#fff] font-dm text-[14px] font-bold pt-[12px] pb-[12px] pr-[59px] pl-[55px] lg:pt-[16px] lg:pb-[16px] lg:pr-[83px] lg:pl-[77px] bg-[#262626] inline-block cursor-pointer border-[1px] border-[#2B2B2B] hover:bg-[white] hover:text-[#262626] duration-[0.7s] ease-in-out lg:mb-[40px] mb-[0px]'>Log in</h5>
                    </div>
                </div>
        </div>
    </Container>
    </>
  )
}

export default SignUp