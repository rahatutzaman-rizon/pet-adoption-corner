import { Button, Label, TextInput, Textarea } from 'flowbite-react';


import { useNavigate } from 'react-router-dom';


import Swal from 'sweetalert2';


  
const CreateDonationsCampign = () => {
    const navigate=useNavigate();

    
    
     
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const name = form.name.value;
        const user=form.user.value;
        const email=form.email.value;
        const max=form.max.value;
        const total=form.total.value;
        const short=form.short.value;
        const long=form.long.value;
        const date=form.date.value;
      
      
        const bookObj = {
          name,
        short,long,date,max,total,user,email
        };
        // console.log(dataObj)
        fetch("https://assignment-12-server-two-smoky.vercel.app/donation-campaign", {
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
                    text: 'Add Donation Campaign Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                
                  navigate('/')
            }
        })
}

    
    return (
        <div className='px-4 my-12 bg-cyan-300 mt-24 mr-16'>
        <h2 className='mb-8 text-3xl font-bold'>Create Donation Campaign</h2>
        <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleSubmit}>
  
          {/* first row */}
          <div className='flex gap-8'>
  
            
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="name"
                  value="Petname"
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
                  htmlFor="max"
                  value="Maximum Donate"
                />
              </div>
              <TextInput
                id="author"
                placeholder="amount"
                required
                type="number"
                name='max'
                className='w-full'
              />
            </div>
  
          </div>
   <br></br>
          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="total"
                  value="Highest total"
                />
              </div>
              <TextInput
                id="location"
                placeholder="total"
                required
                type="number"
                name='total'
                className='w-full'
              />
            </div>
  
          
  
  
  
        
          <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text font-bold"> Last Date</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="date"  placeholder="date" className="input input-bordered w-full" />
                    </label>
                </div>
  
         
  
          <div className=''>
            <div className="mb-2 block">
              <Label
                htmlFor="short"
                value="Short"
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
                value="Long"
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

export default CreateDonationsCampign;