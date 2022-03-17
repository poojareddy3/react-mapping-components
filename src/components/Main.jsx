import cities from "../Data"
import City from './City'

function Main() {
    return (
        <div>
            {
                cities.map((cityData, index) => {
                    //iterate through each city object
                    //taking each object out of the array and passing it down as props into city
                    return <City cityData={cityData} key={index} />  //inserting city component into map
                })
            }
        </div>
    )
}

export default Main

//everytime the City component renders, we will send the data 