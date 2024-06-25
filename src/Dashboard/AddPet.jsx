import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';


import Swal from 'sweetalert2';


  
const AddPet = () => {
    const navigate=useNavigate();

    const Categories = [
        "fish",
        "bird",
        "dog",
        "cat"
    
      ];
    
    
      const [selectedBookCategory, setSelectedBookCategory] = useState(
        Categories[0]
      );
    
      const handleChangeSelectedValue = (event) => {
        console.log(event.target.value);
        setSelectedBookCategory(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const name = form.name.value;
        const age=form.age.value;
        const location=form.location.value;
        const short=form.short.value;
        const long=form.long.value;
        const date=form.date.value;
        const image=form.image.value;
     
        const category = form.category.value;
     
      
        const bookObj = {
          name,
          age,location,category,short,long,date,image
        };
        // console.log(dataObj)
        fetch("https://assignment-12-server-two-smoky.vercel.app/add-pet", {
          method: "POST",
    
          headers: {
            "Content-type": "application/json",
          },
    
          body: JSON.stringify(bookObj),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Pet adopt Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                
                  navigate('/adopt')
            }
        })
}

    
    return (
        <div className='px-4 my-12 bg-cyan-300 mt-24'>
        <h2 className='mb-8 text-3xl font-bold'>Add a Pet</h2>
        <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleSubmit}>
  
          {/* first row */}
          <div className='flex gap-8'>
  
            
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="name"
                  value="name"
                />
              </div>
              <TextInput
                id="name"
                placeholder="Pet Name"
                required
                type="text"
                name='name'
                className='w-full'
              />
            </div>


            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="Adopted"
                  value="adopt"
                />
              </div>
              <TextInput
                id="adopt"
                placeholder="true/false"
                required
                type="text"
                name='adopt'
                className='w-full'
              />
            </div>
  
          
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="age"
                  value="age"
                />
              </div>
              <TextInput
                id="author"
                placeholder="age"
                required
                type="number"
                name='age'
                className='w-full'
              />
            </div>
  
          </div>
   <br></br>
          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="location"
                  value="location"
                />
              </div>
              <TextInput
                id="location"
                placeholder="location"
                required
                type="text"
                name='location'
                className='w-full'
              />
            </div>
  
          
  
  
  
          {/* 2nd Row */}
          <div className='flex gap-8'>
           
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="inputState"
                  value=" Category"
                />
              </div>
              <Select
                id="inputState"
                name="category"
                className="w-full rounded"
                value={selectedBookCategory}
                onChange={handleChangeSelectedValue}
              >
                {Categories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>
  
          </div>

          <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">date</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="date"  placeholder="date" className="input input-bordered w-full" />
                    </label>
                </div>
  
         
  
          <div className=''>
            <div className="mb-2 block">
              <Label
                htmlFor="short"
                value="short"
              />
            </div>
            <Textarea
              id="short"
              placeholder="short"
              required
              type="text"
              name='short'
              className='w-1/5'
              rows={4}
            />
          </div>


          <div className='flex gap-4'>
         
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="image"
                value="image"
              />
            </div>
            <TextInput
              id="image"
              placeholder="Image URL"
              required
              type="text"
              name='image'
              className='w-full'
            />
          </div>
          </div>
       
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="long"
                value="long"
              />
            </div>
            <Textarea
              id='long'
              placeholder="long"
              required
              type="text"
              name='long'
              className='w-1/5'
              rows={4}
            />
          </div>
  
          
  
         
  
          {/* Submit btn */}
          <Button className="bg-red-300 mt-5" type="submit" 
          >
           Add Pet
          </Button>
  
        </form>
      </div>
    );
};

export default AddPet;