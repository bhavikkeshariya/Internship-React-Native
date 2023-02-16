import React, {useLayoutEffect, useRef, useState} from 'react';
import {Button, Text, View} from 'react-native';

const Feb16_4 = () => {
  const [number, setNumber] = useState(0);
  const [sectionStyle, setSectionStyle] = useState();
  const sectionRef = useRef();

  //useEffect is asynchronous.
  //You see the number change in the DOM before the padding changes.

  //useLayoutEffect is synchronous.
  //You see the number change only after the padding has changed.

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);
    console.log(random);
    for (i = 0; i <= 100000; i++) {
      if (i === 100000) {
        setSectionStyle({paddingTop: random});
      }
    }
  }, [number]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <View ref={sectionRef} style={sectionStyle}>
        <Text style={{color: 'white', fontSize: 55, alignSelf: 'center'}}>
          {number}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Button title="-" onPress={() => setNumber(prev => prev - 1)} />
          <Button title="+" onPress={() => setNumber(prev => prev + 1)} />
        </View>
      </View>
    </View>
  );
};

export default Feb16_4;
