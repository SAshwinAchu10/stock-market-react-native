import React, {useState, useMemo, useRef, useCallback} from 'react';

import {
  Tab,
  Text,
  TabView,
  Button,
  Card,
  Icon,
  Image,
  ListItem,
  BottomSheet
} from '@rneui/themed';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import Layout from '../components/Layout';
import {SearchBar} from '@rneui/themed';
import {ScrollView, View, StyleSheet, SafeAreaView} from 'react-native';
import {Divider, color} from '@rneui/base';
import BottomSheetModal, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import SwipeButton from 'rn-swipe-button';

const Sell = ({route, navigation}) => {
  console.log('route: ', route);
  // console.log('props: ', props);
  const [index, setIndex] = React.useState(0);
  const [title, setTitle] = React.useState("SWIPE TO BUY");
  const sheetRef = useRef<BottomSheetModal>(null);
  
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState({});
  const snapPoints = useMemo(() => ['1%', '35%', '50%', '90%'], []);

  const updateSearch = search => {
    setSearch(search);
  };

  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);

  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: `NSE: ₹ ${route.params.value1}`,
        value: 'nse',
        borderColor: '#4586ee',
        color: '#4586ee',
        labelStyle: {
          fontSize: 10,
        },
      },
      {
        id: '2',
        label: 'BSE: ₹ 189.90',
        value: 'bse',
        borderColor: '#4586ee',
        color: '#4586ee',
        labelStyle: {
          fontSize: 10,
        },
      },
    ],
    [],
  );

  const [disableCBButton, setDisableCBButton] = useState(false);
  const defaultStatusMessage = 'swipe status appears here';
  const [swipeStatusMessage, setSwipeStatusMessage] =
    useState(defaultStatusMessage);

  setInterval(() => setSwipeStatusMessage(defaultStatusMessage), 5000);
  const updateSwipeStatusMessage = (message: any) => setTitle(message);
  const renderSubHeading = heading => (
    <Text style={styles.subHeading}>{heading}</Text>
  );
  let forceResetLastButton = null;

  const CheckoutButton = () => {
    return (
      <MaterialCommunityIcons size={30} name='chevron-right'/>
    );
  } 


  const [selectedId, setSelectedId] = useState('1');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          // flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Feather
          style={{
            padding: 10,
            paddingLeft: 15,
          }}
          onPress={() => navigation.goBack()}
          size={40}
          name="arrow-left"
        />
        <View style={{paddingTop: 20}}>
          <Text
            style={{
              paddingLeft: 12,
            }}>
            {route.params.title}
          </Text>
          <RadioGroup
            layout="row"
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
          />
        </View>

        <MaterialCommunityIcons
          style={{paddingRight: 25, paddingTop: 10}}
          size={40}
          name="dots-vertical"
        />
      </View>

      <View style={{
        padding: 20,
        flex: 1,
        justifyContent: 'flex-end',
}}>
          <SwipeButton
            // onSwipeFail={() => updateSwipeStatusMessage('Incomplete swipe!')}
            onSwipeStart={() => updateSwipeStatusMessage('BUYING')}
            onSwipeSuccess={() =>
              updateSwipeStatusMessage('COMPLETED')
            }
            railBackgroundColor="#4586ee"
            railStyles={{
              backgroundColor: '#e6effc36',
              borderColor: '#84a9e5',

            }}
            disableResetOnTap={true}
            thumbIconComponent={CheckoutButton}
            thumbIconBackgroundColor="#FFFFFF"
            // thumbIconImageSource={arrowRight}
            thumbIconStyles={{ backgroundColor: '#fff' }}
            // thumbIconWidth={100}
          title={title}
          titleMaxFontScale={2}
            titleColor='#fff'
            titleFontSize={13}
          />
        </View>
    </SafeAreaView>
  );
};

export default Sell;
