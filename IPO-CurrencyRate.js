import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const IPOCalendar = () => {
  const [ipoData, setIpoData] = useState([]);
  const [currencyRates, setCurrencyRates] = useState({});
  const token = 'pk_12b7296db03d4cfc9b8959eb9d76dc50';

  useEffect(() => {
    // Fetch IPO calendar data (this is a fictional endpoint)
    fetch(`https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=${token}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Sorry Failed to Fetch !!!');
      }
      return response.json();
    })
      .then((data) => {
        setIpoData(data);
      })
      .catch((error) => {
        console.error('Error fetching Data!!!:', error);
      });
  }, []);

  // Fetch Currency Exchange Rates
  useEffect(() => {
    fetch(`https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${token}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch currency rates');
        }
        return response.json();
      })
      .then((data) => {
        // Handle fetched currency rates
        setCurrencyRates(data);
      })
      .catch((error) => {
        // Handle API errors
        console.error(error);
      });
  }, [token]);

  return (
    <View>
      <View style={[styles.card, styles.shadowProp]}>
        <Text style={styles.heading}>IPO Calendar</Text>
        {ipoData.map((item, index) => (
          <View key={index}>
            <Text style={styles.text}>{item.companyName} - {item.offeringDate}</Text>
          </View>
        ))}
      </View>
      <View style={[styles.card, styles.shadowProp]}>
        <Text style={styles.heading}>Currency Exchange Rates</Text>
        {Object.keys(currencyRates).map((symbol) => (
            <View key={symbol}>
              <Text style={styles.text}>{currencyRates[symbol].symbol}: {currencyRates[symbol].rate}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    color: 'navy',
    fontSize: 25,
    marginBottom: 10,
    alignContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 13,
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  text:{
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    margin : 5,
    borderRadius: 10
    

  }
});

export default IPOCalendar;