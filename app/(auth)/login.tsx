import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Image, Text } from 'react-native';
import FormField from '~/components/formFieldComponment/formField';
import { images } from '../../constants';
import ButtonComponent from '~/components/buttonComponment/button'
import { Link } from 'expo-router';
const Login = () => {
  const [valueLogin, setValueLogin] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsloading] = useState()

  const handleOnchange = (text: string, fieldName: string) => {
    setValueLogin({
      ...valueLogin,
      [fieldName]: text,
    });
  };

  const submit = () => {
    // Submit logic here
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#161622', height: '100%' }}>
      <ScrollView>
        <View className="my-6 min-h-[85vh] w-full justify-center px-4">
          <Image source={images.logo} resizeMode="contain" className="h-[84px] w-[130px]" />
          <Text className="text-2xl font-semibold text-white"> Đăng nhập</Text>

          <FormField
            title="Email"
            value={valueLogin.email}
            name="email"
            handleChangeText={(text) => handleOnchange(text, 'email')}
            otherStyles={`mt-7`}
            keyboardType="email-address"
            placeholder=""
          />

          <FormField
            title="Password"
            name="password"
            value={valueLogin.password}
            handleChangeText={(text) => handleOnchange(text, 'password')}
            otherStyles={`mt-7`}
            keyboardType="default"
            placeholder=""
          />

          <ButtonComponent
            title="Đăng nhập"
            handlePress={submit}
            containerStyles={`mt-7`}
            isLoading={isLoading}
          />

<View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100'>
              Bạn chưa có tài khoản ?
            </Text>
            <Link
              href="/register"
              className='text-lg font-semibold text-secondary'
            >
              Đăng kí
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
