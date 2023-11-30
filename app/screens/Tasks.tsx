import React, {useState,useMemo, useRef, useCallback} from 'react';

import {
  Tab,
  Text,
  TabView,
  Button,
  Card,
  Icon,
  Image,
  ListItem,
} from '@rneui/themed';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Layout from '../components/Layout';
import {SearchBar} from '@rneui/themed';
import {ScrollView, View, StyleSheet, SafeAreaView} from 'react-native';
import { Divider, color} from '@rneui/base';
import BottomSheetModal, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const Tasks = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const sheetRef = useRef<BottomSheetModal>(null);

  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState({});
  const snapPoints = useMemo(() => ['1%',"35%","50%","90%"], []);

  const updateSearch = search => {
    setSearch(search);
  };

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  // const handleSnapPress = useCallback((index) => {
  //   sheetRef.current?.snapToIndex(index);
  // }, []);
  // const handleClosePress = useCallback(() => {
  //   sheetRef.current?.close();
  // }, []);

  const list1 = [
    {
      title: 'ONGC',
      subtitle: 'NSE',
      subtitle1: 'EVENT',
      type: 1,
      value1: '198.09',
      value2: '+2.15 (+1.11%)',
    },
    {
      title: 'LICI',
      subtitle: 'NSE',
      subtitle1: 'EVENT',
      type: 0,
      value1: '613.35',
      value2: '+2.55 (+0.42%)',
    },
  ];

  const list2 = [
    {
      title: 'SUZLON-BE',
      subtitle: 'NSE',
      subtitle1: 'EVENT',
      type: 1,
      value1: '198.09',
      value2: '+2.15 (+11.61%)',
    },
    {
      title: 'ZEEMEDIA',
      subtitle: 'NSE',
      subtitle1: '',
      type: 0,
      value1: '63.35',
      value2: '+4.11 (+13.98%)',
    },
    {
      title: 'HCC',
      subtitle: 'NSE',
      subtitle1: 'EVENT',
      type: 1,
      value1: '91.12',
      value2: '+12.65 (+0.15%)',
    },
    {
      title: 'RTNPOWER',
      subtitle: 'NSE',
      subtitle1: '',
      type: 0,
      value1: '121.45',
      value2: '+92.83 (+55.21%)',
    },
    {
      title: 'IDEA',
      subtitle: 'NSE',
      subtitle1: 'EVENT',
      type: 1,
      value1: '346.43',
      value2: '+52.55 (+19.11%)',
    },
    {
      title: 'YESBANK',
      subtitle: 'NSE',
      subtitle1: 'EVENT',
      type: 1,
      value1: '45.45',
      value2: '+71.15 (+0.10%)',
    },
    {
      title: 'MCDOWELL-N',
      subtitle: 'BSE',
      subtitle1: '',
      type: 0,
      value1: '78.67',
      value2: '+67.67 (+0.45%)',
    },
  ];
  const [isVisible, setIsVisible] = useState(false);

  function openSheet(row: any): void {

    setSelectedItem(row);
    setIsVisible(true);
    sheetRef.current?.snapToIndex(1);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          // flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            padding: 10,
            paddingLeft: 15,
            fontWeight: 500,
            color: '#0d0f14',
          }}
          h4>
          Watchlist
        </Text>
        <FontAwesome style={{paddingRight: 15}} size={40} name="angle-down" />
      </View>

      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'blue',
          height: 1.5,
        }}
        dense>
        <Tab.Item
          title="Watchlist 1"
          titleStyle={{fontSize: 13, color: 'grey'}}
        />
        <Tab.Item
          title="Watchlist 2"
          titleStyle={{fontSize: 13, color: 'grey'}}
        />
        <Tab.Item
          title="Watchlist 3"
          titleStyle={{fontSize: 13, color: 'grey'}}
        />

        <Tab.Item
          title="Watchlist 4"
          titleStyle={{fontSize: 13, color: 'grey'}}
        />
      </Tab>

      <TabView animationType="spring" value={index} onChange={setIndex}>
        <TabView.Item style={{width: '100%', backgroundColor: '#fff'}}>
          <>
            <View
              style={{
                paddingLeft: 10,
                paddingTop: 13,
                paddingRight: 10,
                backgroundColor: '#fff',
              }}>
              <SearchBar
                lightTheme
                placeholder="Search & add"
                searchIcon={{
                  color: 'grey',
                  name: 'search',
                  type: 'font-awesome',
                }}
                leftIconContainerStyle={{
                  paddingBottom: 3,
                }}
                rightIconContainerStyle={{
                  paddingBottom: 3,
                }}
                clearIcon={{
                  color: 'grey',
                  type: 'font-awesome',
                  name: 'list-ul',
                }}
                rightIcon={{
                  color: 'grey',
                  type: 'font-awesome',
                  name: 'list-ul',
                }}
                onClear={() => alert('Not implemented')}
                containerStyle={{
                  shadowColor: 'grey',
                  shadowOffset: {width: -2, height: 2},
                  shadowOpacity: 0.3,
                  shadowRadius: 1.5,
                  margin: 0,
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  borderTopColor: '#bdc4c9',
                  borderBottomColor: '#bdc4c9',
                  borderColor: '#bdc4c9',
                  borderWidth: 0.5,
                  borderStyle: 'solid',
                }}
                inputContainerStyle={{
                  height: 25,
                  paddingBottom: 3,
                  borderColor: '#fff',
                  backgroundColor: '#fff',
                }}
                onChangeText={updateSearch}
                value={search}
              />
            </View>
            <ScrollView>
              <Card
                containerStyle={{
                  borderBottomWidth: 0,
                  paddingBottom: 0,
                  paddingTop: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}>
                {list1.map((l, i) => (
                  <ListItem key={i} bottomDivider onPress={() => openSheet(l)}>
                    <ListItem.Content>
                      <View
                        style={{
                          flex: 1,
                          shadowColor: 'rgba(0, 0, 0, 0.1)',
                          shadowOffset: {x: 0, y: 0},
                          shadowOpacity: 1,
                          flexDirection: 'row',
                        }}>
                        <View style={{flex: 1}}>
                          <Text style={{color: '#0d0f14', marginBottom: 8}}>
                            {l.title}
                          </Text>
                          <Text style={{color: 'grey'}}>
                            {l.subtitle}{' '}
                            <Text style={{color: '#5a86d4'}}>
                              {l.subtitle1}
                            </Text>
                          </Text>
                        </View>
                        <View style={{flex: 1}}>
                          <Text
                            style={{
                              textAlign: 'right',
                              color: l.type == 1 ? '#39a131' : '#ce2b4c',
                              marginBottom: 8,
                            }}>
                            {l.value1}
                          </Text>
                          <Text style={{textAlign: 'right', color: 'grey'}}>
                            {l.value2}
                          </Text>
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                ))}
              </Card>
            </ScrollView>
              <BottomSheetModal
                ref={sheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
              >
                <BottomSheetScrollView contentContainerStyle={{
                  backgroundColor: "white",

                }}>
                  <ListItem bottomDivider>
                    <ListItem.Content>
                      <View
                        style={{
                          flex: 1,
                          shadowColor: 'rgba(0, 0, 0, 0.1)',
                          shadowOffset: { x: 0, y: 0 },
                          shadowOpacity: 1,
                          flexDirection: 'row',
                        }}>
                        <View style={{ flex: 1 }}>
                          <Text style={{ color: '#0d0f14', marginBottom: 8 }}>
                            {selectedItem?.title}
                          </Text>
                          <Text style={{ color: 'grey' }}>
                            {selectedItem?.subtitle} <Text style={{ color: selectedItem?.type == 1 ? '#39a131' : '#ce2b4c' }}>{selectedItem?.value1}</Text>
                            <Text style={{ color: '#5a86d4' }}> {selectedItem?.value2}</Text>
                          </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={{
                              textAlign: 'right',
                              color: 1 ? '#39a131' : '#ce2b4c',
                              marginBottom: 8,
                            }}>
                            {''}
                          </Text>
                          <Text style={{ textAlign: 'right', color: 'grey' }}>
                            {selectedItem?.subtitle1}
                          </Text>
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                  <ListItem bottomDivider>
                    <ListItem.Content>
                      <View
                        style={{
                          flexDirection: 'row',
                          flex: 1,
                          justifyContent: 'space-between',
                        }}>
                        <View style={{ padding: 7, textAlign: 'center', flex: 1 }}>
                          <Button
                            buttonStyle={{ height: 50 }}
                            raised
                            titleStyle={{ fontSize: 12 }}
                          color={'#4185f4'}
                          onPress={() => navigation.navigate('Sell', selectedItem)}
                            size="md">
                            BUY
                          </Button>
                        </View>
                        <View style={{ padding: 7, textAlign: 'center', flex: 1 }}>
                          <Button
                            buttonStyle={{ height: 50 }}
                            raised
                            titleStyle={{ fontSize: 12 }}
                            color={'#de514d'}
                            size="md">
                            SELL
                          </Button>
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                  <ListItem bottomDivider>
                    <ListItem.Content>
                      <View
                        style={{
                          alignContent: 'center',
                          flexDirection: 'row',
                          flex: 1,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            flex: 1,
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              alignItems: 'center',
                              textAlign: 'center',
                              color: '#4185f4',
                            }}>
                            <Ionicons
                              style={{ textAlign: 'center', flex: 1 }}
                              name="stats-chart-sharp"
                            />
                            &nbsp; &nbsp;View chart
                          </Text>
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                  <ListItem bottomDivider>
                    <ListItem.Content>
                      <View
                        style={{
                          flexDirection: 'row',
                          flex: 1,
                          justifyContent: 'space-between',
                        }}>
                        <View style={{ padding: 4, textAlign: 'center', flex: 1 }}>
                          <Text
                            style={{
                              alignItems: 'center',
                              textAlign: 'center',
                              fontSize: 14,
                              color: '#4185f4',
                            }}>
                            <Feather
                              style={{ textAlign: 'center', flex: 1 }}
                              size={14}
                              name="bell"
                            />
                            &nbsp;Create alert
                          </Text>
                        </View>
                        <View style={{ padding: 4, textAlign: 'center', flex: 1 }}>
                          <Text
                            style={{
                              alignItems: 'center',
                              textAlign: 'center',
                              color: '#4185f4',
                              fontSize: 14,
                            }}>
                            <FontAwesome
                              size={14}
                              style={{ textAlign: 'center', flex: 1 }}
                              name="google-wallet"
                            />
                            &nbsp;Create GTT
                          </Text>
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                  <ListItem >
                    <ListItem.Content>
                      <View
                        style={{
                          flexDirection: 'row',
                          flex: 1,
                          justifyContent: 'space-between',
                        }}>
                        <View style={{ padding: 7, textAlign: 'center', flex: 1 }}>
                          <ListItem>
                            <ListItem.Content>
                              <View
                                style={{
                                  flex: 1,
                                  flexDirection: 'row',
                                }}>
                                <View
                                  style={{
                                    flex: 1,
                                    marginRight: 10,
                                  }}>
                                  <Text
                                    style={{
                                      color: 'grey',
                                      marginBottom: 8,
                                      fontSize: 10,
                                    }}>
                                    {'Bid'}
                                  </Text>
                                </View>
                                <View
                                  style={{
                                    flex: 1,
                                    marginRight: 17,
                                  }}>
                                  <Text style={{ color: 'grey', fontSize: 10 }}>
                                    {'Orders'}
                                  </Text>
                                </View>
                                <View
                                  style={{
                                    flex: 1,
                                    marginLeft: 10,
                                  }}>
                                  <Text style={{ color: 'grey', fontSize: 10 }}>
                                    {'Qty'}
                                  </Text>
                                </View>
                              </View>
                            </ListItem.Content>
                          </ListItem>
                          {[{ bid: 1, orders: 1, quantity: 3 },
                          { bid: 2, orders: 12, quantity: 6 },
                          { bid: 0, orders: 45, quantity: 73 },
                          { bid: 9, orders: 89, quantity: 90 },
                          { bid: 5, orders: 1, quantity: 11 }].map((row, i) => (
                            <ListItem containerStyle={{
                              paddingLeft: 26,
                              paddingRight: 26,
                              paddingTop: 0,
                              paddingBottom: 7,
                            }}>
                              <ListItem.Content>
                                <View
                                  style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                  }}>
                                  <View
                                    style={{
                                      flex: 1,
                                      marginRight: 17,
                                    }}>
                                    <Text
                                      style={{
                                        color: '#5a86d4',
                                        // marginBottom: 8,
                                        fontSize: 10,
                                      }}>
                                      {row.bid}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      flex: 1,
                                      marginRight: 17,
                                    }}>
                                    <Text style={{ color: '#5a86d4', fontSize: 10 }}>
                                      {row.orders}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      flex: 1,
                                      marginLeft: 15,
                                    }}>
                                    <Text style={{ color: '#5a86d4', fontSize: 10 }}>
                                      {row.quantity}
                                    </Text>
                                  </View>
                                </View>
                              </ListItem.Content>
                            </ListItem>
                          ))}
                        </View>
                        <View style={{ padding: 7, textAlign: 'center', flex: 1 }}>
                          <ListItem>
                            <ListItem.Content>
                              <View
                                style={{
                                  flex: 1,
                                  flexDirection: 'row',
                                }}>
                                <View
                                  style={{
                                    flex: 1,
                                    marginRight: 10,
                                  }}>
                                  <Text
                                    style={{
                                      color: 'grey',
                                      marginBottom: 8,
                                      fontSize: 10,
                                    }}>
                                    {'Bid'}
                                  </Text>
                                </View>
                                <View
                                  style={{
                                    flex: 1,
                                    marginRight: 17,
                                  }}>
                                  <Text style={{ color: 'grey', fontSize: 10 }}>
                                    {'Orders'}
                                  </Text>
                                </View>
                                <View
                                  style={{
                                    flex: 1,
                                    marginLeft: 10,
                                  }}>
                                  <Text style={{ color: 'grey', fontSize: 10 }}>
                                    {'Qty'}
                                  </Text>
                                </View>
                              </View>
                            </ListItem.Content>
                          </ListItem>
                          {[{ bid: 1, orders: 1, quantity: 3 },
                          { bid: 2, orders: 12, quantity: 6 },
                          { bid: 0, orders: 45, quantity: 73 },
                          { bid: 9, orders: 89, quantity: 90 },
                          { bid: 5, orders: 1, quantity: 11 }].map((row, i) => (
                            <ListItem containerStyle={{
                              paddingLeft: 26,
                              paddingRight: 26,
                              paddingTop: 0,
                              paddingBottom: 7,
                            }}>
                              <ListItem.Content>
                                <View
                                  style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                  }}>
                                  <View
                                    style={{
                                      flex: 1,
                                      marginRight: 17,
                                    }}>
                                    <Text
                                      style={{
                                        color: '#de514d',
                                        fontSize: 10,
                                      }}>
                                      {row.bid}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      flex: 1,
                                      marginRight: 17,
                                    }}>
                                    <Text style={{ color: '#de514d', fontSize: 10 }}>
                                      {row.orders}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      flex: 1,
                                      marginLeft: 15,
                                    }}>
                                    <Text style={{ color: '#de514d', fontSize: 10 }}>
                                      {row.quantity}
                                    </Text>
                                  </View>
                                </View>
                              </ListItem.Content>
                            </ListItem>
                          ))}
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                  <ListItem bottomDivider>
                    <ListItem.Content>
                      <View
                        style={{
                          alignContent: 'center',
                          flexDirection: 'row',
                          flex: 1,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            flex: 1,
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              alignItems: 'center',
                              textAlign: 'center',
                              color: '#4185f4',
                            }}>
                            Show 20 depth
                          </Text>
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                  <ListItem bottomDivider>
                    <ListItem.Content>
                      <View
                        style={{
                          flexDirection: 'row',
                          flex: 1,
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            padding: 4,
                            paddingLeft: 10,
                            textAlign: 'center',
                            flex: 1,
                          }}>
                          <Text
                            style={{
                              alignItems: 'center',
                              textAlign: 'center',
                              fontSize: 14,
                              color: 'grey',
                            }}>
                            Open
                          </Text>
                          <Text
                            style={{
                              alignItems: 'center',
                              textAlign: 'center',
                              color: 'black',
                              fontSize: 14,
                            }}>
                            56.06
                          </Text>
                        </View>
                        <View style={{ padding: 4, textAlign: 'center', flex: 1 }}>
                          <Text
                            style={{
                              alignItems: 'center',
                              textAlign: 'center',
                              color: 'grey',
                              fontSize: 14,
                            }}>
                            High
                          </Text>
                          <Text
                            style={{
                              alignItems: 'center',
                              textAlign: 'center',
                              color: 'black',
                              fontSize: 14,
                            }}>
                            100.90
                          </Text>
                        </View>
                        <View style={{ padding: 4, textAlign: 'center', flex: 1 }}>
                          <Text
                            style={{
                              alignItems: 'center',
                              textAlign: 'center',
                              color: 'grey',
                              fontSize: 14,
                            }}>
                            Low
                          </Text>
                          <Text
                            style={{
                              alignItems: 'center',
                              textAlign: 'center',
                              color: 'black',
                              fontSize: 14,
                            }}>
                            901.33
                          </Text>
                        </View>
                        <View style={{ padding: 4, textAlign: 'center', flex: 1 }}>
                          <Text
                            style={{
                              alignItems: 'center',
                              textAlign: 'center',
                              color: 'grey',
                              fontSize: 14,
                            }}>
                            Prev. close
                          </Text>
                          <Text
                            style={{
                              alignItems: 'center',
                              textAlign: 'center',
                              color: 'black',
                              fontSize: 14,
                            }}>
                            761.98
                          </Text>
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                  <View style={{ padding: 10, backgroundColor: '#fff' }} />
                  <ListItem
                    containerStyle={{
                      paddingLeft: 26,
                      paddingRight: 26,
                      paddingTop: 4,
                      paddingBottom: 0,
                    }}
                    bottomDivider>
                    <ListItem.Content>
                      <View
                        style={{
                          flex: 1,
                          shadowColor: 'rgba(0, 0, 0, 0.1)',
                          shadowOffset: { x: 0, y: 0 },
                          shadowOpacity: 1,
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          alignContent: 'center',
                        }}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignContent: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{ color: 'grey', marginBottom: 8, fontSize: 13 }}>
                            {'Volume'}
                          </Text>
                          <Text style={{ color: 'grey', fontSize: 13 }}>
                            {'156.23'}
                          </Text>
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                  <ListItem
                    containerStyle={{
                      paddingLeft: 26,
                      paddingRight: 26,
                      paddingTop: 7,
                      paddingBottom: 0,
                      backgroundColor: '#fafafa',
                    }}
                    bottomDivider>
                    <ListItem.Content>
                      <View
                        style={{
                          flex: 1,
                          // shadowColor: 'rgba(0, 0, 0, 0.1)',
                          // shadowOffset: {x: 0, y: 0},
                          // shadowOpacity: 1,
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          alignContent: 'center',
                        }}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignContent: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{ color: 'grey', marginBottom: 8, fontSize: 13 }}>
                            {'Avg trade price'}
                          </Text>
                          <Text style={{ color: 'grey', fontSize: 13 }}>
                            {'156.23'}
                          </Text>
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                  <ListItem
                    containerStyle={{
                      paddingLeft: 26,
                      paddingRight: 26,
                      paddingTop: 7,
                      paddingBottom: 0,
                    }}
                    bottomDivider>
                    <ListItem.Content>
                      <View
                        style={{
                          flex: 1,
                          shadowColor: 'rgba(0, 0, 0, 0.1)',
                          shadowOffset: { x: 0, y: 0 },
                          shadowOpacity: 1,
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          alignContent: 'center',
                        }}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignContent: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{ color: 'grey', marginBottom: 8, fontSize: 13 }}>
                            {'Last traded quantity'}
                          </Text>
                          <Text style={{ color: 'grey', fontSize: 13 }}>{'14'}</Text>
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                  <ListItem
                    containerStyle={{
                      paddingLeft: 26,
                      backgroundColor: '#fafafa',
                      paddingRight: 26,
                      paddingTop: 7,
                      paddingBottom: 0,
                    }}
                    bottomDivider>
                    <ListItem.Content>
                      <View
                        style={{
                          flex: 1,
                          shadowColor: 'rgba(0, 0, 0, 0.1)',
                          shadowOffset: { x: 0, y: 0 },
                          shadowOpacity: 1,
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          alignContent: 'center',
                        }}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignContent: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{ color: 'grey', marginBottom: 8, fontSize: 13 }}>
                            {'Last traded at'}
                          </Text>
                          <Text style={{ color: 'grey', fontSize: 13 }}>
                            {'2023-09-09 09:01:01'}
                          </Text>
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                  <ListItem
                    containerStyle={{
                      paddingLeft: 26,
                      paddingRight: 26,
                      paddingTop: 7,
                      paddingBottom: 0,
                    }}
                    bottomDivider>
                    <ListItem.Content>
                      <View
                        style={{
                          flex: 1,
                          shadowColor: 'rgba(0, 0, 0, 0.1)',
                          shadowOffset: { x: 0, y: 0 },
                          shadowOpacity: 1,
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          alignContent: 'center',
                        }}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignContent: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{ color: 'grey', marginBottom: 8, fontSize: 13 }}>
                            {'Lower circuit'}
                          </Text>
                          <Text style={{ color: 'grey', fontSize: 13 }}>
                            {'563.43'}
                          </Text>
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                  <ListItem
                    containerStyle={{
                      paddingLeft: 26,
                      paddingRight: 26,
                      paddingTop: 7,
                      backgroundColor: '#fafafa',
                      paddingBottom: 0,
                    }}
                    bottomDivider>
                    <ListItem.Content>
                      <View
                        style={{
                          flex: 1,
                          shadowColor: 'rgba(0, 0, 0, 0.1)',
                          shadowOffset: { x: 0, y: 0 },
                          shadowOpacity: 1,
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          paddingBottom: 20,
                          alignContent: 'center',
                        }}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignContent: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{ color: 'grey', marginBottom: 8, fontSize: 13 }}>
                            {'Upper circuit'}
                          </Text>
                          <Text style={{ color: 'grey', fontSize: 13 }}>
                            {'856.11'}
                          </Text>
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                </BottomSheetScrollView>
              </BottomSheetModal>
          </>
        </TabView.Item>
        <TabView.Item style={{width: '100%', backgroundColor: '#fff'}}>
          <>
            <View style={{paddingLeft: 10, paddingTop: 13, paddingRight: 10}}>
              <SearchBar
                lightTheme
                placeholder="Search & add"
                searchIcon={{
                  color: 'grey',
                  name: 'search',
                  type: 'font-awesome',
                }}
                leftIconContainerStyle={{
                  paddingBottom: 3,
                }}
                rightIconContainerStyle={{
                  paddingBottom: 3,
                }}
                clearIcon={{
                  color: 'grey',
                  type: 'font-awesome',
                  name: 'list-ul',
                }}
                rightIcon={{
                  color: 'grey',
                  type: 'font-awesome',
                  name: 'list-ul',
                }}
                onClear={() => alert('Not implemented')}
                containerStyle={{
                  shadowColor: 'grey',
                  shadowOffset: {width: -2, height: 2},
                  shadowOpacity: 0.3,
                  shadowRadius: 1.5,
                  margin: 0,
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  borderTopColor: '#bdc4c9',
                  borderBottomColor: '#bdc4c9',
                  borderColor: '#bdc4c9',
                  borderWidth: 0.5,
                  borderStyle: 'solid',
                }}
                inputContainerStyle={{
                  height: 25,
                  paddingBottom: 3,
                  borderColor: '#fff',
                  backgroundColor: '#fff',
                }}
                onChangeText={updateSearch}
                value={search}
              />
            </View>
            <ScrollView>
              <Card
                containerStyle={{
                  borderBottomWidth: 0,
                  paddingBottom: 0,
                  paddingTop: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}>
                {list2.map((l, i) => (
                  <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                      <View
                        style={{
                          flex: 1,
                          shadowColor: 'rgba(0, 0, 0, 0.1)',
                          shadowOffset: {x: 0, y: 0},
                          shadowOpacity: 1,
                          flexDirection: 'row',
                        }}>
                        <View style={{flex: 1}}>
                          <Text style={{color: '#0d0f14', marginBottom: 8}}>
                            {l.title}
                          </Text>
                          <Text style={{color: 'grey'}}>
                            {l.subtitle}{' '}
                            <Text style={{color: '#5a86d4'}}>
                              {l.subtitle1}
                            </Text>
                          </Text>
                        </View>
                        <View style={{flex: 1}}>
                          <Text
                            style={{
                              textAlign: 'right',
                              color: l.type == 1 ? '#39a131' : '#ce2b4c',
                              marginBottom: 8,
                            }}>
                            {l.value1}
                          </Text>
                          <Text style={{textAlign: 'right', color: 'grey'}}>
                            {l.value2}
                          </Text>
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                ))}
              </Card>
            </ScrollView>
          </>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <Text h3>Watchlist 3</Text>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <Text h3>Watchlist 4</Text>
        </TabView.Item>
      </TabView>
    </SafeAreaView>
  );
};

export default Tasks;
