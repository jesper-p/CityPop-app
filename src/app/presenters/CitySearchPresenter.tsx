import SearchScreen from '../screens/SearchScreen';

function CitySearchPresenter() {
    return (
        <SearchScreen 
        text="SEARCH BY CITY" 
        placeholder="Enter a city" 
        search={() => console.log("search")} 
        onChangeText={(text) => console.log(text)}
        goBack={() => console.log("Going back to home screen")}
        /> 
    )
}