import React, { useEffect, useState } from 'react';
import Toast from 'react-native-simple-toast';
import {  StyleSheet, 
          Text, 
          View, 
          Alert,
        } from 'react-native';
import colors from '../styles/colors';

import Header from '../components/Header';
import AreaButton from '../components/AreaButton';
import { FlatList } from 'react-native-gesture-handler';
import api from '../services/api';
import { OrderField } from '../components/OrderField';
import fonts from '../styles/fonts';

interface AreaProps{
  key: string;
  title: string;
}

export interface OrderProps{
  id: string;
  area: string[];
  data: Date;
  status: string;
}

export default function MainPage() {
  const [ areas, setAreas ] = useState<AreaProps[]>([]);
  const [ orders, setOrders ] = useState<OrderProps[]>([]);
  const [ selectedArea, setSelectedArea ] = useState<string>('all');
  const [ filteredOrders, setFilteredOrders ] = useState<OrderProps[]>([]);
  const [ status, setStatus ] = useState<string>();

  function handleSelectedArea(area: string){
    setSelectedArea(area);
    
    if (area == 'all')
        return setFilteredOrders(orders);
    
    const filtered = orders.filter(order => order.area.includes(area))

    setFilteredOrders(filtered);
  }

  useEffect(() => {
    async function fetchAreas() {
        const {data} = await api.get('areas');
        
        setAreas([
            {
                key: 'all', 
                title: 'Todos',
            },
            ...data
        ]);
    }
    fetchAreas().catch(function(err) {
        alert(err.message);
    } );
  }, []);

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    const {data} = await api.get<OrderProps[]>('orders');
    
    setOrders(data);
    setFilteredOrders(data);
  }

  function handleUpdate(order: OrderProps) {
    Alert.alert('Atualizar Status', `Deseja marcar o pedido ${order.id} como concluído?`,[
    {
        text: 'Não',
        style: 'cancel'
    },
    {
        text: 'Sim',
        onPress: async () => {
          try {

              ChangeTextStatusFunction('CONCLUÍDO');

              Toast.show('Pedido atualizado!', Toast.LONG);
              
          } catch (error) {
              Alert.alert('Erro ao tentar atualizar pedido', error.message);
          }
        }
    }]
    )
  }

  function ChangeTextStatusFunction (status: string) {
    setStatus(status);
  }

  return (
    <View style={styles.container} >
        <View>
          <Header></Header>
            <Text style={styles.subTitle}>
                Filtro por área:
            </Text>
        </View>

        <View>
          <FlatList
            data={areas}
            keyExtractor={(item) => String(item.key)}
            renderItem={({item}) => (
              <AreaButton 
                title={ item.title }
                active={item.key === selectedArea}
                onPress={() => handleSelectedArea(item.key)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.areasList}
          />
        </View>

        <View >
          <Text style={styles.title}>
            Listagem de Pedidos
          </Text>
        </View>

        <View style={styles.orders}>
          <FlatList 
              data={filteredOrders}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => (
                <OrderField
                  data={item} 
                  handleUpdate={() => {handleUpdate(item)}}
                />) }
              showsHorizontalScrollIndicator={false}

          ></FlatList>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    title: {
      color: colors.blue_bay_of_many,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'left',
      justifyContent: 'space-between',
      margin: 15,
      fontFamily: fonts.heading,
    },
    subTitle: {
      color: colors.blue_bay_of_many,
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'left',
      justifyContent: 'space-around',
      marginLeft: 15,
      marginBottom: 15,
      fontFamily: fonts.text,
    },
    areasList : {
      height: 40,
      justifyContent: 'center',
      paddingBottom: 5,
      marginLeft: 10,
      fontFamily: fonts.text,
    },
    orders: {
      flex: 1,
      paddingHorizontal: 32,
      justifyContent: 'center',
      fontFamily: fonts.heading,
    }
  
  });


