import React, { Component } from 'react'
import {
    Alert,
} from "react-native";
import {
    AsyncStorage
} from 'react-native'
import I18n from 'react-native-i18n';

export default class TienIch {

    static GetLocation(lat1, lng1, lat2, lng2) {
        var dLng = (lng2 - lng1), dLat = (lat2 - lat1);
        var R = 6371;

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLng / 2) * Math.sin(dLng / 2) *
            Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        var d = R * c;

        var distance = d * Math.PI / 180;

        return parseFloat(distance).toFixed(1);
    }

    static replaceText(text) {
        var textReplace = text.replace(/(?:\\[rnt]|[\r\n\t]+)+/g, " ");
        return textReplace;
    }

    static format_number(number, prefix, thousand_separator, decimal_separator) {
        var number = "" + number;
        var thousand_separator = thousand_separator || '.',
            decimal_separator = decimal_separator || ',',
            regex = new RegExp('[^' + decimal_separator + '\\d]', 'g'),
            number_string = number.replace(regex, '').toString(),
            split = number_string.split(decimal_separator),
            rest = split[0].length % 3,
            result = split[0].substr(0, rest),
            thousands = split[0].substr(rest).match(/\d{3}/g);

        if (thousands) {
            separator = rest ? thousand_separator : '';
            result += separator + thousands.join(thousand_separator);
        }
        result = split[1] != undefined ? result + decimal_separator + split[1] : result;
        return prefix == undefined ? result : (result ? result + prefix : '');
    };
    static un_format_number(number) {
        var result = number.split('.').join("").split(',').join("");
        return result;
    };
    static formatDayWeek(monthType,result) {
        var dateNow = new Date();
        var month = dateNow.getMonth();
        var day = dateNow.getDate();
        var year = dateNow.getFullYear();
        var FebNumberOfDays ="";
        var monthChange = monthType;
        if(monthType-12>=0){
            monthChange =  monthType-12;
            year = year + 1;
        }
        var dayChange = monthChange == month?day:1;
        //Determing if February (28,or 29)  
        if (monthChange == 1){
            if ( (year%100!=0) && (year%4==0) || (year%400==0)){
              FebNumberOfDays = 29;
            }else{
              FebNumberOfDays = 28;
            }
        }
        var monthNames = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        var dayPerMonth = [31,FebNumberOfDays,31,30,31,30,31,31,30,31,30,31];
        var dayNames = [I18n.t('chu_nhat'),I18n.t('thu_2'),I18n.t('thu_3'),I18n.t('thu_4'),I18n.t('thu_5'),I18n.t('thu_6'),I18n.t('thu_7')];
        for (let index = dayChange; index <= dayPerMonth[monthChange]; index++) {
            var day = index<10?"0"+index:index;
            var object = {};
            object.day = index;
            object.month = monthChange+1;
            object.year = year;
            object.dayOfWeek = dayNames[new Date(""+year+'-'+monthNames[monthChange]+'-'+day+"").getDay()];
            object.dayMonthYear = day+'-'+monthNames[monthChange]+'-'+year;
            result.push(object);
        }
        return result;
    }
    static displayCalendar(){
        var dateNow = new Date();
        var month = dateNow.getMonth();
        var result = [];
        result = TienIch.formatDayWeek(month,result);
        result = TienIch.formatDayWeek(month + 1,result);
        result = TienIch.formatDayWeek(month + 2,result);
        result = TienIch.formatDayWeek(month + 3,result);
        result = TienIch.formatDayWeek(month + 4,result);
        result = TienIch.formatDayWeek(month + 5,result);
        return result;
    }
    
}
