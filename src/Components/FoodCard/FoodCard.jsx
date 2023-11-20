


const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="image" /></figure>
      <p className="bg-slate-800 text-white mt-4 mr-4 absolute px-4 right-0 " >${price} </p>
      <div className="card-body flex flex-col items-center ">
        <h2 className="card-title">{name} </h2>
        <p>{recipe} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-300 rounded border-0 border-b-4 border-r-4 mt-4 border-orange-700">Add to Cart </button>
        </div>
      </div>
    </div>
  );
};


export default FoodCard; 