import HomeScreen from '../screens/HomeScreen';

function HomePresenter(){
    return (
        <HomeScreen 
            cityButtonPressed="Pressed search by city" 
            countryButtonPressed="Pressed search by country"
        /> 
    );
}