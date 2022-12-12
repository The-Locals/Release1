// Integration of Google map in React Native using react-native-maps
// https://aboutreact.com/react-native-map-example/// Import React
import React, {useState} from 'react';
// Import required components
import {SafeAreaView, StyleSheet, TextInput, View, Modal, Text, TouchableOpacity} from 'react-native'; // Import Map and Marker
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {StatusBar} from 'react-native';
//import MapContainer from './components/MapInput';
import MapView, {Marker} from 'react-native-maps';
//import MainContainer from './containers/tabContainer';
//import { NavigationContainer } from '@react-navigation/native';
import Info_card from '../components/Info_card';
import { Root, SPSheet } from 'react-native-popup-confirm-toast'

const Map = () => {

  const [modalOpen, setModalOpen] = useState(true);

  const component = (props) => {
    //hook or class 
    return (<Text>Hi, SekizliPenguen</Text>);
    
    //props.spSheet.hide();
    //props.spSheet.setHeight(150,()=>alert('nice'));
};

  const markerClick = (e) => {

  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a description of the marker'}
            // modal open on this
            onPress={() => {
              const spSheet = SPSheet;
              spSheet.show({
                  component: () => component({...this.props, spSheet}),
                  dragFromTopOnly: true,
                  onCloseComplete: () => {
                      alert('onCloseComplete');
                  },
                  onOpenComplete: () => {
                      alert('onOpenComplete');
                  },
                  height:260
              });
          }}
          />

        </MapView>

        <Root>
    <View>
        <TouchableOpacity
            
        >
            <Text>Open Popup Message</Text>
        </TouchableOpacity>
    </View>
</Root>

        <View style={styles.searchContainer}>
          <GooglePlacesAutocomplete
            styles={{textInput: styles.input}}
            placeholder="Search"
            fetchDetails={true}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: 'AIzaSyBdUF2aSzhP3mzuRhFXZwl5lxBTavQnH7M', // What is this key from and for?
              language: 'en',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  searchContainer: {
    position: 'absolute',
    width: '90%',
    backgroundColor: 'purple',
    padding: 8,
    borderRadius: 8,
    top: StatusBar.currentHeight,
  },
  input: {
    borderBottomColor: '#888',
    borderWidth: 1,
  },
});



const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];
