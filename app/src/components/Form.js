import React, { useState } from 'react'


import Other from './Other'
import PersonalInfo from './PersonalInfo'
import SignUpInfo from './SignUpInfo'


const Form = () => {

    const [page,setPage] = useState(0)

    const FormTitles = ['Sign Up' , 'Personal Info' , 'Other']
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: "",
      });

    const PageDisplay = () => {
        if ( page === 0){
            return <SignUpInfo formData={formData} setFormData={setFormData}/>
        }else if (page ===1) {
        return <PersonalInfo  formData={formData} setFormData={setFormData}/>
        }else{
            return <Other  formData={formData} setFormData={setFormData}/>
        }
    }
    
  return (
    <div className='form'>
        <div className='progressbar'>
            <div
             style={{
            width: page === 0 ? '33%'
             : page ===1 ? '67%'
             : '100%'
             }}></div>
        </div>
        <div className='form-container'>
        <div className='header'>
            <h1>{FormTitles[page]}</h1>
        </div>
        <div className='body'>{PageDisplay()}</div>
        <div className='footer'>
        <button
        disabled={page === 0}
         onClick={() => {
            setPage ((currPage) => currPage -1)}}
        >Prev
        </button>
        <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
       </div>    
      </div>
    </div>
  )
}

export default Form