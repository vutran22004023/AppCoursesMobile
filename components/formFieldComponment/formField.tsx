import React,{useState} from 'react'
import {icons} from '../../constants'
import { Image, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface IProps {
    title: string;
    value: string |undefined;
    placeholder: string;
    handleChangeText: (text: string) => void;
    otherStyles?: string;
    [key: string]: any; // Để chấp nhận các thuộc tính khác nếu cần
  }

  const FormField: React.FC<IProps> = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    return (
      <View className={`space-y-2 ${otherStyles}`}>
        <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
        <View className='border-2 border-black-200  w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-[#FF9C01] items-center flex-row'>
          <TextInput
            className='flex-1 text-white font-psemibold text-base'
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={(title === 'Password' && !showPassword) || (title === 'ConfirmPassword' && !showConfirmPassword)}
            {...props}
          />
          {title ==='Password' && (
            <TouchableOpacity onPress={()=>
              setShowPassword(!showPassword)
            }>
              <Image source={!showPassword ? icons.eye : icons.eyeHide } className="w-6 h-6" resizeMode='contain'/>
            </TouchableOpacity>
          )}
          {title === 'ConfirmPassword' && (
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Image
                source={!showConfirmPassword ? icons.eye : icons.eyeHide}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  
  export default FormField