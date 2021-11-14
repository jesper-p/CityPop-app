import {BASE_URL} from './apiConfig';

const CitySource={
    apiCall(params: any) {
        return fetch(BASE_URL+params, {
            "method": "GET",
            "headers": {

            }
        })
        .then(response => {
         if(!response.ok){
             throw new Error(response.statusText);
         }   
         return response;
        })
        .then(response => response.json());
    }
    ,
    searchCountry(country: string){return CitySource.apiCall(new URLSearchParams({country: country, maxRows:"5", username:"weknowit"}));}
    ,
    searchCity(city: string){return CitySource.apiCall(new URLSearchParams({name: city, maxRows:"3", username:"weknowit"}));}
};

export default CitySource;