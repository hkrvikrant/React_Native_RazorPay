import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

import RazorpayCheckout from 'react-native-razorpay';

{/* <TouchableHighlight onPress={() => {
    var options = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: '', // Your api key
        amount: '5000',
        name: 'foo',
        prefill: {
            email: 'void@razorpay.com',
            contact: '9191919191',
            name: 'Razorpay Software'
        },
        theme: { color: '#F37254' }
    }
    RazorpayCheckout.open(options).then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
    });
}}></TouchableHighlight> */}

export default function RazorPay() {
    return (
        <View>
        <TouchableHighlight>
            <Text>Vikrant</Text>
        </TouchableHighlight>

        </View>
    )
}