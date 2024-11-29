import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            const filter = coffees.filter((coffee) => coffee._id !== id);
            setCoffees(filter);
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl p-8">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full mr-4">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{quantity}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4 ">
            <button className="btn rounded-lg">View</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn rounded-lg">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
