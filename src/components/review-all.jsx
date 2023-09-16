import Review from "./review";

function ReviewAll() {
  return (
    <main className="bg-gradient-to-r from-yellow-400 via-gray-50 to-teal-300 min-h-screen flex justify-center items-center">
      <section className="w-4/6 max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold capitalize mb-2 tracking-widest">
            inception movie reviews
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-yellow-400 to-teal-300 mx-auto my-auto"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default ReviewAll;
