import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";
import { cars } from "@/utils";

export default async function Home() {
  const allCars = await cars();
  const isDataEmpty = !Array.isArray(allCars) || !allCars || allCars.length < 1;
  console.log(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="font-extrabold text-4xl">
            Car Catalouge
          </h1>
          <p>Explore the cars you might love</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
            
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
          ) :
          (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">
                Ooops, No results.
              </h2>
              <p>
                {allCars?.message}
              </p>
            </div>
          )
        }
      

      </div>
    </main>
  );
}
