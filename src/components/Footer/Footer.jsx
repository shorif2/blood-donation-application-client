import Container from "../Shared/Container";

const Footer = () => {
    return (

       <div className="bg-[#1E2833] pb-6">
            <Container>
            
        
            <div className="flex justify-between pt-10">
                <img className="w-12" src="/public/blood.png" alt="" />
                <div className="flex gap-10 items-center">
                    <p className="text-white text-xl">
                    Ready to get started?
                    </p>
                    <button className="bg-white text-2xl font-bold py-4 px-12 rounded-lg">Donate</button>
                </div>
            </div>
            <hr className="my-10" />
            <div className="text-white grid grid-cols-4">
                <div>
                    <h3 className="text-xl font-semibold pb-7">
                        Subscribe to our
                        <br />
                        newsletter
                    </h3>
                    <input className="text-sm pb-4 bg-[#1E2833] border-b-[1px]" type="text" placeholder="Email address" />
                    <button className="pb-4 px-4 text-black font-bold bg-white">{'>'} </button>
                </div>
                <div>
                    <h3>Services</h3>
                    <p>Email Marketing</p>
                    <p>Campaigns</p>
                    <p>Branding</p>
                    <p>Offline</p>
                </div>
                <div>
                    <h3>Services</h3>
                    <p>Email Marketing</p>
                    <p>Campaigns</p>
                    <p>Branding</p>
                    <p>Offline</p>
                </div>
                <div>
                    <h3>Services</h3>
                    <p>Email Marketing</p>
                    <p>Campaigns</p>
                    <p>Branding</p>
                    <p>Offline</p>
                </div>
                
            </div>
            <footer className="footer footer-center p-4 mt-16 text-white">
  <aside>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
       
        </Container>    
            </div>
        
    );
};

export default Footer;