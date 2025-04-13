import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'

const SignIn = () => {
  const handleLogin = () => {
    
  }

  return (
    // Safe area view ensures that the content stays within the border of your screen
    <SafeAreaView style={{flex: 1}} className='bg-white h-full'>
      {/* Scroll view ensures that the content is scrollable when it overflows the screen of user's device */}
      <ScrollView contentContainerClassName='h-full' contentContainerStyle={{paddingBottom: 100}}>
        {/* className styles the outer ScrollView container, while contentContainerClassName styles the inner content area where the children are placed. Use it to control layout like padding, spacing, and alignment inside scrollable views. */}
        <Image 
          source={images.onboarding} 
          className="w-full h-4/6"
          resizeMode = "contain"
        />
        {/* view is like a div */}
        <View className = "px-10">
          <Text 
            className="text-base text-center uppercase font-rubik text-black-200"
          >
            Welcome to ReState
          </Text>

          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get You Closer to {'\n'}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to ReState with Google
          </Text>

          <TouchableOpacity 
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            {/* Its a button but as we will touch it and not click it, that's why touchable opacity is used*/}
            <View className = "flex flex-row items-center justify-center">
              <Image
                source = {icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text 
                className='text-lg font-rubik-medium text-black-300 ml-2'  
              >
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn