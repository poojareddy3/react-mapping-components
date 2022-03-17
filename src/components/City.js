function City(props) {

    const {capitol, country, population, language} = props.cityData

    return(
        <>
           <h1>Capital: {capitol}</h1>
           <p>Country: {country}</p>
           <p>Population: {population}</p>
           <p>Language: {language}</p>
        </>
    )

    // return(
    //     <>
    //        <h1>Capital: {props.cityData.capitol}</h1>
    //        <p>Country: {props.cityData.country}</p>
    //        <p>Population: {props.cityData.population}</p>
    //        <p>Language: {props.cityData.language}</p>
    //     </>
    // )
}

export default City