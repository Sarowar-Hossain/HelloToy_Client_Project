// import React from "react";

// const CardUpdate = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const price = e.target.price.value;
//     const quantity = e.target.quantity.value;
//     const picture = e.target.picture.value;
//     const description = e.target.description.value;

//     const info = { price, quantity, picture, description };

//     fetch(`http://localhost:5000/cardUpdate/${_id}`, {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(info),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         if (result.modifiedCount > 0) {
//           Swal.fire({
//             icon: "success",
//             title: "Successfully Updated",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       });

//     console.log(_id);
//   };

//   return (
//     <div className="flex items-center justify-center">
//       <div className="rounded-lg p-8 space-y-6 w-1/3 border-2 border-cyan-500 my-4">
//         <h2 className="text-xl font-semibold text-center">
//           Update Product Details
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="flex flex-col space-y-4">
//             <label className="font-medium" htmlFor="price">
//               Price:
//             </label>
//             <input
//               type="number"
//               name="price"
//               // defaultValue={price}
//               className="input input-bordered input-info w-full"
//             />

//             <label className="font-medium" htmlFor="quantity">
//               Available Quantity:
//             </label>
//             <input
//               type="number"
//               name="quantity"
//               // defaultValue={quantity}
//               className="input input-bordered input-info w-full "
//             />
//             <label className="font-medium" htmlFor="picture">
//               Product Picture URL:
//             </label>
//             <input
//               type="text"
//               name="picture"
//               // defaultValue={picture}
//               className="input input-bordered input-info w-full "
//             />
//             <label className="font-medium" htmlFor="description">
//               Description:
//             </label>
//             <textarea
//               name="description"
//               // defaultValue={description}
//               className="input input-bordered input-info w-full"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-cyan-500 text-white mt-4 rounded-lg px-4 py-2 hover:bg-cyan-600"
//             >
//               Update
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CardUpdate;
