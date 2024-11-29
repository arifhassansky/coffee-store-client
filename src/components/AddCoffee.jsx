import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "Coffee successfully added",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };

  return (
    <>
      <div className="w-8/12 mx-auto p-20 bg-[#F4F3F0] my-24 text-center rounded-lg">
        <h3 className="font-bold text-5xl mb-8 font-secondary">
          Add New Coffee
        </h3>
        <p className="text-gray-400">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at <br /> its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed <br /> to using Content here.
        </p>

        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="form-control">
              <label className="label font-semibold text-xl">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Coffee Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold text-xl">
                <span className="label-text">Avilable Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Enter Coffee Available Quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold text-xl">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter Coffee Supplier"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold text-xl">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter Coffee Taste"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold text-xl">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter Coffee Category"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold text-xl">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter Coffee Details"
                className="input input-bordered"
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label font-semibold text-xl">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Coffee Photo URL"
                className="input input-bordered "
              />
            </div>
          </div>

          <input
            type="submit"
            value="Add Coffee"
            className="text-2xl font-secondary bg-[#D2B48C] text-center mt-6 p-4 rounded-lg w-full"
          />
        </form>
      </div>
    </>
  );
};

export default AddCoffee;
