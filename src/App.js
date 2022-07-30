
import Card from "./components/card"
import './index.css'
import react from "react";

export default function App() {

  react.useEffect(() => {
    document.title = "TECHNIE CLUB FAN ART"
 }, []);
  return (
    
    <div className="pb-10">
      <div  className="bg-[url('https://pbs.twimg.com/profile_banners/1498176736319578112/1651194071/1500x500')] h-full w-full fixed "></div>
      <div className="flex justify-center w-screen py-10 text-white ml-auto mr-auto align-middle flex-wrap">
        <div className="flex flex-col sm:flex-row z-20 font-sans font-serif text-5xl font-black">
          <span className="text-black">TECHNIE CLUB FAN ART </span>
        </div>
      </div>
      <div className="flex justify-center flex-wrap h-full">
        <div id="ao" className="w-20 h-200 fixed"></div>

        <Card discord="miyata31#2237" pos="left" link="https://cdn.discordapp.com/attachments/995535483947995147/1002835526061129779/Techie_Club_Miyata31_9.gif" />
        <Card discord="Okin#3367" pos="left" link="https://media.discordapp.net/attachments/995535483947995147/1002810120562020412/Illustration_sans_titre.jpg?width=676&height=676" />
        <Card discord="Tee_sticks#8673"  link="https://cdn.discordapp.com/attachments/995535483947995147/1002675394853474466/unknown-62.png" />
        <Card discord="Hokmont#4819"  link="https://media.discordapp.net/attachments/995535483947995147/1002656292013346886/8F360D39-A84C-41F9-B914-BB762404403D.jpg?width=676&height=676" />
        <Card discord="bogo#4107"  pos="left" link="https://media.discordapp.net/attachments/995535483947995147/1002316603293171782/techie_fan_art.png?width=676&height=676" />
        <Card discord="SUGARPIC#4680"  pos="left" link="https://media.discordapp.net/attachments/995535483947995147/1002247653188452433/IMG_0540.JPG?width=676&height=676" />
        <Card discord="Snupe#2025"  link="https://media.discordapp.net/attachments/995535483947995147/1001817609286729728/20220720_170911.jpg?width=562&height=676" />
        <Card discord="Saad Jabbar#6170"  link="https://media.discordapp.net/attachments/995535483947995147/1001422802995392522/IMG_20220726_103429.jpg?width=578&height=676" />
        <Card discord="fra📛MnUm♌#6411"  link="https://media.discordapp.net/attachments/995535483947995147/1001399988934418542/Picsart_22-07-26_10-05-45-237.jpg?width=676&height=676" />
        <Card discord="삶은달걀#7732"  link="https://media.discordapp.net/attachments/995535483947995147/1001333094336434256/IMG_9652.jpg?width=695&height=676" />
        <Card discord="Seita#4841"  link="https://media.discordapp.net/attachments/995535483947995147/1001150460725559316/IMG_8103.gif?width=676&height=676" />
        <Card discord="Sqntiag0#8636"  link="https://media.discordapp.net/attachments/995535483947995147/1001078597995470868/Techie_club.........jpg?width=720&height=514" />
        <Card discord="Barbiecue#0405"  link="https://media.discordapp.net/attachments/992015464312090664/993485084332150885/Untitled224_20220704195109.png?width=670&height=670" />
        <Card discord="Bill GATES Loves#4681"  link="https://media.discordapp.net/attachments/995535483947995147/1000973246344216606/unknown.png" />
        <Card discord="!RStefani#0396"  link="https://cdn.discordapp.com/attachments/995535483947995147/1000947604789657710/unknown.png" />
        <Card discord="BG8#9097"  link="https://media.discordapp.net/attachments/995535483947995147/1000840920612212797/IMG_5922.png" />
        <Card discord="Yama#9324"  link="https://media.discordapp.net/attachments/995535483947995147/1000813809507766272/IMG_20220724_224200.jpg" />
        <Card discord="Selima#1076"  link="https://media.discordapp.net/attachments/995535483947995147/1000681624851185704/27280331-a8cb-4e0f-8485-c796f2e474df.jpg?width=676&height=676" />
        <Card discord="mida$___#1979"  link="https://cdn.discordapp.com/attachments/995535483947995147/1000417048775626893/IMG_8450.png" />
        <Card discord="Johan#9921"  link="https://cdn.discordapp.com/attachments/995535483947995147/1000410142069764096/techies.png" />
        
        <div className="flex flex-col sm:flex-row top-100 z-20 font-sans font-serif text-7xl font-black">
          <span >sef kuchar#0365 </span>
        </div>  
      </div>
    </div>
  )
}

