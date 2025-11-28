import { useContext } from "react";
import { MyContext } from "../App";

function Home() {
  const { countryList, loadingCountries, countryError } =
    useContext(MyContext);

  if (loadingCountries) {
    return (
      <div className="container py-4">
        <p>Loading countries...</p>
      </div>
    );
  }

  if (countryError) {
    return (
      <div className="container py-4">
        <p className="text-danger">
          Failed to load countries. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h1 className="mb-3">Home</h1>

      <div className="mb-3">
        <label className="form-label">Choose Country</label>
        <select className="form-select">
          <option value="">Select a country</option>
          {countryList.map((country) => (
            <option key={country.cca2} value={country.cca2}>
              {country.name?.common}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Home;
