import CityScreen from '../screens/CityScreen';

function CityPresenter(){
    return (
        <CityScreen 
            city="paris"
            population={2244000}
            goBack={() => console.log("Going back to home screen")}
        /> 
    );
}