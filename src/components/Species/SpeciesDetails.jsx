function SpeciesDetails({ speciesDetails, id }) {
  useEffect(() => {
    fetch(`https://legacy--api.herokuapp.com/api/v1/species/${id}`)
      .then((response) => response.json())
      .then((data) => setSpecies(data));
  }, []);
  console.log(speciesDetails);
  return (
    <div className="speciesbox">
      <h2>{speciesDetails.name}</h2>
      <>
        <p>Native: {speciesDetails.native}</p>
        <p>Mortality: {speciesDetails.mortality}</p>
        <p>Distinctions:</p>
      </>
    </div>
  );
}

export default SpeciesDetails;
