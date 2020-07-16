import React from 'react'
import Layout from './components/Layout'
import Phone from './components/Phone'
import PhoneAppBar from './components/PhoneAppBar'
import Input from './components/Input'
import Chat from './components/Chat'
import Text from './components/Text'
import DogPictures from './components/DogPictures'
import Offer from './components/Offer'
import './styles/app.css'
import CurvedShape from './components/CurvedShape'
import TextSection from './components/TextSection'

const App = () => (
    <Layout>
        <CurvedShape type="dark" />
        <CurvedShape type="light" />
        <Phone>
            <PhoneAppBar />
            <Chat>
                <Text type="left">
                    That sounds great. I'd be happy to discuss more.
                </Text>
                <Text type="left">
                    Could you send over some pictures of your dog, please?
                </Text>
                <DogPictures />
                <Text type="right">
                    Here are a few pictures. She's a happy girl!
                </Text>
                <Text type="right">Can you make it?</Text>
                <Text type="left">
                    She looks so happy! The time we discussed works. How long
                    shall I take her out for?
                </Text>
                <Offer minutes="30" price="29" />
                <Offer hour="1" price="49" />
                <Input />
            </Chat>
        </Phone>
        <TextSection />
    </Layout>
)

export default App
