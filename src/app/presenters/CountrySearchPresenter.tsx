import SearchScreen from '../screens/SearchScreen';

function CountrySearchPresenter() {
    return (
        <SearchScreen 
        text="SEARCH BY COUNTRY" 
        placeholder="Enter a country" 
        search={() => console.log("search")} 
        onChangeText={(text) => console.log(text)}
        goBack={() => console.log("Going back to home screen")}
        /> 
    )
}