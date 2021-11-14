import CountryScreen from '../screens/CountryScreen';

function CountryPresenter() {
    return (
        <CountryScreen 
            country="france"
            cities={["paris", "marseille", "lyon"]}
            goBack={() => console.log("Going back to home screen")}
        />
    )
}


