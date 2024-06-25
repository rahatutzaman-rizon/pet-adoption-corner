import { useLoaderData, useNavigate } from "react-router-dom";

import { Table } from 'flowbite-react'
import  { useEffect, useState } from 'react'
import { Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
const MyPet = () => {
  const mypet=useLoaderData();
  const navigate=useNavigate()
  const [allBooks, setAllBooks] = useState(mypet);
  useEffect(() => {
      fetch(`https://assignment-12-server-two-smoky.vercel.app/add-pet`)
          .then((res) => res.json())
          .then((data) => {
              // console.log(data);
              setAllBooks(data);
          });
  }, []);

  // delete a books
  const  handledelete =_id=>{
   
    fetch(`https://assignment-12-server-two-smoky.vercel.app/add-pet/${_id}`, {
      method: "DELETE",
  })
.then(res=>res.json())
.then(data =>{
console.log(data);
if(data.deletedCount>0){
  Swal.fire({
    title: 'Success!',
    text: 'Deleted Successfully',
    icon: 'success',
    confirmButtonText: 'Cool'

  })

  const remaining=allBooks.filter(user => user._id !==_id);
  setAllBooks(remaining);

  navigate('/admin/dashboard/my-pet')
}
})

}

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = () => setCurrentPage(page);

    return (
      <div className='px-4 my-12 mt-12'>
      <h2 className='mb-8 text-3xl font-bold'>Managememnt My Pet</h2>

      {/* table */}

      <Table className='lg:w-[1180px]'>
          <Table.Head>
              <Table.HeadCell>
                  No.
              </Table.HeadCell>
              <Table.HeadCell>
                  Edit or Manage
              </Table.HeadCell>
              <Table.HeadCell>
                  Pet name
              </Table.HeadCell>
              <Table.HeadCell>
                 Adopted
              </Table.HeadCell>
              <Table.HeadCell>
                  Category
              </Table.HeadCell>
             
              
          </Table.Head>

          {
              allBooks.map((pet, index) => <Table.Body className="divide-y" key={pet._id}>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {index + 1}
                      </Table.Cell>
                      <Table.Cell>
                          <Link
                              className="font-medium text-cyan-300 hover:underline dark:text-cyan-500 mr-5 btn btn-danger"
                              to={`/admin/dashboard/add-pet/${pet._id}`}
                          >
                              Edit
                          </Link>
                          <button className='bg-teal-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600 ' onClick={() => handledelete(pet._id)}>Delete</button>

                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {pet.name}
                      </Table.Cell>
                      <Table.Cell>
                          False
                      </Table.Cell>
                      <Table.Cell>
                          {pet.category}
                      </Table.Cell>
                      
                      
                      
                  </Table.Row>
              </Table.Body>)
          }
      </Table>

      {/* pagination */}
      <div className="flex items-center justify-center text-center mt-8">
          <Pagination
              currentPage={1}
              layout="pagination"
              nextLabel="Go forward"
              onPageChange={page => { setCurrentPage(page) }}
              previousLabel="Go back"
              showIcons
              totalPages={1000}
          />
      </div>
  </div>
    );
};

export default MyPet;