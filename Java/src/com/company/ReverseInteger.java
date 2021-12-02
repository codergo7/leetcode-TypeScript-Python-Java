package com.company;

public class ReverseInteger {

    public static void main(String[] args) {
        System.out.println(reverse(123));
    }

    public static int reverse(int x) {
        long reversedNumber = 0;
        while(x !=0){

            reversedNumber = 10*reversedNumber + x%10; //96
            x/=10;
            if(reversedNumber>Integer.MAX_VALUE ||  reversedNumber<Integer.MIN_VALUE)
                return 0;
        }
        return (int) reversedNumber;
    }
}
