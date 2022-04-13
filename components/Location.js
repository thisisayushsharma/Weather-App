const Location = (place) => ( //Function for HTML component
    `<h2>
    <div>Location- ${place.name}</div>
    <div>Country - ${place.country}</div>
    </h2>
    <h4>
    <div>Time: ${place.localtime}</div>
    `
) //Return HTML text
export default Location; //Export Question function