export const Captions:string[] = [
    "Discover the hidden gems within the stock market's labyrinth of opportunities.",
    "Navigate the complexities of the stock market and unearth potential treasures.",
    "Embrace the volatility of the stock market and let your portfolio flourish.",
    "Invest wisely in the stock market and watch your wealth grow exponentially.",
    "Decode the language of the stock market and uncover its lucrative secrets.",
    "Harness the power of knowledge and make informed decisions in the stock market.",
    "Chart your course through the ever-changing landscape of the stock market.",
    "Unleash the potential of your investments in the dynamic world of stocks.",
    "Ride the waves of market trends and steer your investments to success.",
    "Transform market insights into profitable opportunities with strategic investments.",
    "Experience the excitement of stock trading and watch your dreams take flight.",
    "Seize the moment in the stock market and turn volatility into victory.",
    "Engage with the stock market's intricacies and master the art of investing.",
    "Explore the depths of the stock market and unearth hidden treasures.",
    "Forge your path to financial freedom in the dynamic realm of stocks.",
    "Embrace the challenges of stock trading and let your investments soar.",
    "Unlock the mysteries of the stock market and pave your way to prosperity.",
    "Dive into the world of stocks and navigate through its highs and lows.",
    "Invest in the future with confidence and watch your wealth grow steadily.",
    "Embark on a journey through the stock market and discover its infinite possibilities."
]


export const getCaption =() =>{
  if(Captions.length > 0){
    const indx =  Math.floor(Math.random() * Captions.length)
    return Captions[indx]
  }else{
    return "No caption present"
  }
}