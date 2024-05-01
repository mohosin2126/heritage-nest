import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>

      <div className="hero h-[70vh]" style={{ position: "relative", overflow: "hidden" }}>
        <video autoPlay muted loop style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", objectFit: "cover", height: "100%", width: "100%", zIndex: -1 }}>
          <source src="../../public/-f8f8-4a60-bda2-7982b8d7a898.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay bg-black bg-opacity-65"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl text-white p-2">
            <p>Seamlessly connecting you to the heartbeat of India's prime properties.</p>
            <h1 className=" text-5xl font-bold my-10">Your Portal to India's <br />Exquisite Real Estate</h1>

           <Link to="/buyerscreens"> <button className="btn btn-error text-lg border-0 text-white hover:text-black   bg-blue-500 "> <img src="https://i.ibb.co/QJ7mZpC/Magnifer.png" alt="" />Find Property</button></Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;