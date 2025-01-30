import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'


const PersonalInformation = () => {

  const {profileImage, setProfileImage, formData, setFormData, placeholder} = useContext(AppContext)

  

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  

  }
 
  const handleImageInput = (e)=>{
    const inputFile = e.target.files[0];
    if (inputFile){
      const imageUrl = URL.createObjectURL(inputFile)
      setProfileImage(imageUrl)
    }

  }

  const handleFormSubmit = (e) =>{
    e.preventDefault()

    //update context with form data and image
    setFormData(formData);
    setProfileImage(profileImage || placeholder)
    localStorage.setItem('formData', JSON.stringify(formData))
    console.log('Form Data Saved : ', formData)


  }

  useEffect(()=>{
    const savedData = localStorage.getItem('formData');
    if(savedData){
      setFormData(JSON.parse(savedData))
    }

  },[])


  return (
    <div  className='border border-gray-300 rounded p-5 mt-4'>
        <h2 className='font-bold text-gray-900 text-xl'>
            Personal Information
        </h2>
        <div>
           

        <div className='m-4'>
          <form  onSubmit={handleFormSubmit} className=' flex flex-col gap-2 ' >

      
          <label htmlFor="profilePicture">Profile Picture</label>
          
          <div className='m-4 border border-gray-300 rounded p-2 flex items-center hover:shadow-lg ease-in-out transition-all duration-500' >
                <img src={profileImage} alt=""  className='rounded-full w-15 h-15 object-contain'/>
            <input
  type="file" name='profilePicture'
  onChange={handleImageInput}
  className="file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-violet-100 dark:file:bg-blue-600 dark:file:text-violet-100 dark:hover:file:bg-blue-500 ..."
/>
            </div>



            <div>
            <label htmlFor="name">Name :  </label>
            <input 
            type="text" 
            placeholder='Enter your full name' name='name' className='border w-100 p-1 ml-1 pl-2 rounded border-gray-300 focus:outline-blue-500/50'
            value={formData.name}
            onChange={handleInputChange}
            />
            </div>

            <div>
            
            <label htmlFor="email">Email :  </label>
            <input 
            type="text" 
            placeholder='Enter your e-mail address' 
            name='email' 
            className='border w-100 p-1 ml-1 pl-2 rounded border-gray-300  focus:outline-blue-500/50'
            value={formData.email}
            onChange={handleInputChange}
            />
            </div>

            <div>
            <label htmlFor="phone">Phone :  </label>
            <input 
            type="tel" 
            placeholder='Enter your phone number' name='phone' className='border w-100 p-1 ml-1 pl-2 rounded border-gray-300  focus:outline-blue-500/50'
            value={formData.phone}
            onChange={handleInputChange}

            
            />
           
            </div>


            <button 
            type='submit' 
            className='bg-blue-500 w-30 text-white rounded p-1 mt-3 border-0 hover:bg-blue-600  cursor-pointer transition-all duration-300 ease-in-out' 
           >Save Info</button>

          </form>
        </div>
           
          
        </div>

    </div>
  )
}

export default PersonalInformation