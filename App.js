import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

export default function App() {
  const [phone, setPhone] = useState('');

  const isValid = phone.length === 10;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>

      <Text style={styles.title}>Đăng nhập</Text>

      <Text style={styles.heading}>Nhập số điện thoại</Text>

      <Text style={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="number-pad"
        maxLength={10}
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity
        disabled={!isValid}
        style={[styles.button, { backgroundColor: isValid ? '#6C63FF' : '#CCCCCC' }]}
        onPress={() => alert("SĐT: " + phone)}
      >
        <Text style={styles.btnText}>Tiếp tục</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  heading: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: 'bold'
  },
  desc: {
    marginTop: 8,
    fontSize: 14,
    color: '#555'
  },
  input: {
    marginTop: 16,
    borderBottomWidth: 1,
    borderColor: '#aaa',
    fontSize: 16,
    paddingVertical: 8
  },
  button: {
    marginTop: 32,
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});


