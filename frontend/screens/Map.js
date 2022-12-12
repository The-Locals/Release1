// Integration of Google map in React Native using react-native-maps
// https://aboutreact.com/react-native-map-example/// Import React
import React, { useState } from 'react';
// Import required components
import { SafeAreaView, StyleSheet, TextInput, View, Modal, Text, TouchableOpacity, Image } from 'react-native'; // Import Map and Marker
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StatusBar } from 'react-native';
//import MapContainer from './components/MapInput';
import MapView, { Marker } from 'react-native-maps';
//import MainContainer from './containers/tabContainer';
//import { NavigationContainer } from '@react-navigation/native';
import Info_card from '../components/Info_card';
import { Root, SPSheet } from 'react-native-popup-confirm-toast'
import Submit from '../components/Submit'
const Map = () =>
{

  const [modalOpen, setModalOpen] = useState(true);
  const [title, setTitle] = useState('')
  const [photo, setPhoto] = useState('')
  const component = (props) =>
  {

    
    console.log('\nPhoto\n',photo)
    //hook or class 
    return (<View>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.photo} source={{uri: 'https://maps.googleapis.com/maps/api/place/photo?photoreference=AW30NDy03h8GOH-NLPvmyMimIMrqxikTzNlv7Qor3mxcQOCXbUKrYVxqyT2k8Vgvs855sRwrMTULO2Z81VZpIfaHtutuzFudu94HIL9e6cj_DTuljEkWvtTMxr1B505XtefhFMiMqriGv1--dzhG63vGtfoJqMc7Dpbl_B1BNEtkUKIvrusU&sensor=false&maxheight=500&maxwidth=500&key=AIzaSyBdUF2aSzhP3mzuRhFXZwl5lxBTavQnH7M',}}></Image>
        <Submit title="Travel Guides" color="#0148a4" handleSubmit={fetchAudio}></Submit>
      </View>);
    // place.photos.forEach(function (placePhoto)
    // {
    //   var url = placePhoto.getUrl({
    //     maxWidth: 600,
    //     maxHeight: 400
    //   });
    // });
  };

  const fetchAudio = () =>{
    
  }

  const openModal = () =>
  {

  }
  const markerClick = (e) =>
  {

  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            onPress={() => { }}
          />

        </MapView>

        <Root>
          <View>
            <TouchableOpacity

            >
            </TouchableOpacity>
          </View>
        </Root>

        <View style={styles.searchContainer}>
          <GooglePlacesAutocomplete
            styles={{ textInput: styles.input }}
            placeholder="Search"
            fetchDetails={true}
            onPress={(data, details = null) =>
            {
              // 'details' is provided when fetchDetails = true
              setTitle(data.description)
              setPhoto(details.photos[0].photo_reference)
              console.log('\n\n', data, '\n\n', details);

              const spSheet = SPSheet;
              spSheet.show({
                component: () => component({ ...this.props, spSheet }),
                dragFromTopOnly: true,
                height: 500,
                onCloseComplete: () =>
                {
                  console.log('onCloseComplete');
                },
                onOpenComplete: () =>
                {
                  console.log('onOpenComplete');
                },
                height: 260
              });

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
  
  title: {
    color: '#0779e4',
        fontWeight: 'bold',
        marginLeft: 5
  },

  photo: {
    width: 50,
    height: 50,
  },

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
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#263c3f' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#17263c' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }],
  },
];
