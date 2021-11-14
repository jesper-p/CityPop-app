import React from 'react';
import { Text } from 'react-native';

function promiseNoData(promise: any, data: any, error: any) {
    if(!promise) {
        return (<Text>No results was found</Text>)
    } else if(!data && !error) {
        return (<Text>insert loading picture!</Text>)
    } else if(error) {
        return (<Text>Couldn't find results matching the description</Text>)
    }
    return false;
}