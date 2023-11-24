import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Featured from "./Featured/Featured";



const Home = () => {

    const email = 'email'
    console.log(email);
    return (
        <div>
          <Banner></Banner>
          <Featured></Featured>
          <ContactUs></ContactUs>

        </div>
    );
};

export default Home;