//This components fethces the country id and probability of a username from App
// then the country id is used to look up the country name and displayed as a <p>
import React from "react";
import Button from "react-bootstrap/Button";

function FindNationality(props) {
  function handleClick() {
    async function API() {
      //userName is used to fetch data from natinalize.io
      let response = await fetch(
        `https://api.nationalize.io?name=${props.userName}`
      );
      let data = await response.json();
      let country = data.country[0].country_id;
      //from the response, the country code is used to look up country name
      let resp = await fetch(`https://restcountries.com/v3.1/alpha/${country}`);
      let nameData = await resp.json();
      // this is then used to update result stateVariable
      props.setResult(
        `${props.userName} belongs to ${
          nameData[0].name.common
        } with a ${parseInt(data.country[0].probability * 100)}% probability.`
      );
    }

    API();
  }

  return (
    <>
      <Button onClick={handleClick}>Find Nationality</Button>
    </>
  );
}

export default FindNationality;
