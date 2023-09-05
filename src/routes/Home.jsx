import Banner from "../components/banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner 
        text1="Hi!!" 
        text2="I am Richard" 
        text3="---- Software developer"
        button= {true}
        btn1="Projects" 
        btn2="Contact" />
    </div>
  )
}

export default Home