
import  { useState } from 'react'

import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import Swal from 'sweetalert2';
import { useLoaderData, useParams } from 'react-router-dom';
const UpdatePage = () => {
    const { id } = useParams();
const datas=useLoaderData();
const {name,age,location,category,short,long}=datas;
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
     
        const category = form.category.value;
     
      
        const bookObj = {
          name,
          age,location,category,short,long
        };
        
        fetch(`https://assignment-12-server-two-smoky.vercel.app/add-pet/${id}`, {
  method: "PATCH",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(bookObj),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    Swal.fire("Book updated successfully!!!!");
    form.reset();
  });
       
         
      };
    
    return (
        <div>
          <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update A Pet!</h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleSubmit}>

        {/* first row */}
        <div className='flex gap-8'>

          {/* book name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="name"
                value="name"
              />
            </div>
            <TextInput
              id="name"
              placeholder={name}
              required
              type="text"
              name='name'
              className='w-full'
            />
          </div>

        
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="age"
                value={age}
              />
            </div>
            <TextInput
              id="author"
              placeholder="age"
              required
              type="text"
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
                value={location}
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
          
          {/* book category */}
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

       

        <div className=''>
          <div className="mb-2 block">
            <Label
              htmlFor="short"
              value={short}
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
     
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="long"
              value={long}
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
        Update a Book
        </Button>

      </form>
    </div>
            
        </div>
    );
};

export default UpdatePage;