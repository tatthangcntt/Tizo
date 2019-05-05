import React, { Component } from 'react'
import {
    AsyncStorage
} from 'react-native'

export default class BoNhoRieng {
    static CURRENT_LANG = 'vi';
    static  layDuLieu(key: string, defaultValue: string) {
        return new Promise(resolve => {
            try {
                AsyncStorage.getItem(key)
                    .then((value) => {
                        if (!value) {
                            value = defaultValue
                        }
                        resolve(value)
                    })
            } catch (e) {
                resolve(defaultValue)
            }
        })
    }

    static async luuDuLieu(key: string, value: string) {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (error) { }
    }

    static async xoaDuLieuBoNhoRieng() {
        await AsyncStorage.clear()
    }

}
