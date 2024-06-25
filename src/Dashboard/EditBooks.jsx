import { useState } from 'react'
import { Button,  Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const { id } = useParams();
  const { name,author, category, image,rating,desc,quantity } = useLoaderData();
  // console.log(bookTitle)

  const bookCategories = [
    "programming",
    "electronics",
    "software",
    "networking",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };


  const  handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const author = form.author.value;
    const image = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const bookObj = {
      name,
      author,
      image,
      category,
      bookDescription,
      rating,
      quantity,
    };
    // console.log(bookObj)

    // update the book object
    fetch(`https://assignment-12-server-two-smoky.vercel.app/update-pet/${id}`, {
      method: "PATCH",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  
    return (
      <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update Pet</h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleUpdate}>

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
              placeholder="Book Name"
              required
              type="text"
              name='name'
              className='w-full'
            />
          </div>

          {/* author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="author"
                value="Author Name"
              />
            </div>
            <TextInput
              id="author"
              placeholder="Author"
              required
              type="text"
              name='author'
              className='w-full'
            />
          </div>

        </div>

        {/* 2nd Row */}
        <div className='flex gap-8'>
          {/* book url */}
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

          {/* book category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="inputState"
                value="Book Category"
              />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
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
              htmlFor="quantity of the book"
              value="quantity of the book"
            />
          </div>
          <Textarea
            id="quantity"
            placeholder="quantity of the book"
            required
            type="number"
            name='quantity'
            className='w-1/5'
            rows={4}
          />
        </div>
     
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="rating"
              value="rating"
            />
          </div>
          <Textarea
            id='rating'
            placeholder="rating"
            required
            type="number"
            name='rating'
            className='w-1/5'
            rows={4}
          />
        </div>

           {/* full width div for book description */}
           <div>
          <div className="mb-2 block">
            <Label
              htmlFor="desc"
              value="desc"
            />
          </div>
          <Textarea
            id="desc"
            placeholder="Book Description"
            required
            type="text"
            name='desc'
            className='w-full'
            rows={4}
          />
        </div>




       

        {/* Submit btn */}
        <Button className="bg-teal-300 mt-5" type="submit" 
        >
      Upload a book
        </Button>

      </form>
    </div>
    )
  }

export default EditBooks