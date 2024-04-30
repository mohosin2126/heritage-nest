
const Navbar = () => {
    return (
        <div>
          <div className="navbar p-6 h-20 bg-base-100">
  <div className="navbar-start">
    <div className="flex gap-8 items-center font-normal">
        <h1>Buy</h1>
        <h1>Sell</h1>
        <h1>Services</h1>
    </div>
  </div>
  <div className="navbar-center">
    <img className="h-20 w-12" src="https://i.ibb.co/8PN85zP/e8cbbb0006f4af5b4764c7061ba11f37.png" alt="" />
  </div>
  <div className="navbar-end">
    <div className="flex items-center gap-8 font-normal">
    <h1>Manage Rentals</h1>
    <h1>Sign In </h1>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;