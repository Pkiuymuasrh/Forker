import React from "react";
import Navbar from "./Navbar"; // Replace './Navbar' with the actual path to your Navbar component
import "../css/blog.css";

function Blog() {
  return (
    <>
      <Navbar />
      {/* Page 1 Section */}
      <div id="page1" className="flex min-h-[50%] m-3">
        {/* Left Image */}
        <div className="flex-1 relative min-w-[20%]">
          <img
            src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1718962431/A4_-_3_s91tbk.png"
            alt="Image 1"
            className="absolute inset-0 h-full w-auto z-10"
          />
        </div>

        {/* Text and Button Container */}
        <div className="flex-1 flex flex-col justify-center items-center text-center mt-[100px] z-20 min-w-[60%]">
          <p className="text-7xl mt-[15px] font-semibold mb-[45px] leading-tight w-[860px]">
            Enjoy The Thrill of Exciting
            <br />
            Challenges & Social Shopping
            <br />
          </p>

          <div className="font-normal ml-16 flex items-center text-5xl w-[1000px] leading-tight gap-3">
            <div className="text-gray-700 mb-2">
              <h2>Rediscover Memories | </h2>
            </div>
            <div className="text-orange-500 mb-2">
              <h2> Explore Recommendations!</h2>
            </div>
          </div>

          <button className="px-[90px] py-8 bg-orange-500 text-white text-4xl rounded-3xl mt-8">
            Download App
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative min-w-[20%]">
          <img
            src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1718962419/A4_-_4_b9eiwv.png"
            alt="Image 2"
            className="absolute inset-0 h-full w-auto z-10"
          />
        </div>
      </div>

      {/* Page 2 Section */}
      <div id="page2" className="min-h-screen m-10">
        <video
          src="https://res.cloudinary.com/dapbrn8a9/video/upload/v1719157440/webanimaiton_oo91v8.mp4"
          autoPlay
          loop
          muted
          className="w-full h-auto rounded-lg"
        ></video>
      </div>

      {/* Page 3 Section */}
      <div
        id="page3"
        className="flex bg-orange-200 "
        style={{ height: "90vh" }}
      >
        <div className="flex-1 mt-40">
          {" "}
          {/* Increase mt-40 to move it lower */}
          <div className="flex flex-col justify-center items-start h-full p-10">
            <div className="mb-4">
              <h1 className="text-7xl ml-[140px] font-bold mb-2">
                A Platform to Turn
              </h1>
              <h1 className="text-7xl ml-[95px] font-bold mb-2">
                Your Passion into
              </h1>
              <h1 className="text-7xl mr-[230px] font-bold mb-2">Profits</h1>
            </div>

            <button className="px-20 py-6 ml-[130px] font-medium bg-orange-500 text-white text-2xl rounded-full ">
              Discover Froshare
            </button>

            <p
              id="move"
              className="text-left leading-relaxed font-semibold text-4xl"
            >
              Maximize Earning
              <br />
              Effortless{" "}
              <span className="text-orange-500">Affiliate Marketing !!</span>
            </p>
          </div>
        </div>

        {/* Right Side (Image Section) */}
        <div className="flex-1">
          <div className="flex justify-center items-center h-full p-10">
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1712295088/Group_1171277340_3_xycpcs.png"
              className="max-w-full max-h-full"
              alt="Illustration"
            />
          </div>
        </div>
      </div>

      {/* Page 4 Section */}
      <div className="min-w-screen max-h-screen flex min-h-[90vh]">
        {/* Left Section for Video */}
        <div
          className="flex-1 flex justify-center items-center"
          style={{ maxWidth: "50%" }}
        >
          <video
            src="https://res.cloudinary.com/dapbrn8a9/video/upload/q_auto:low/v1706085314/frokervideos/ww_cdrid9.mp4"
            autoPlay
            loop
            muted
            className="max-h-[80vh] rounded-lg"
          ></video>
        </div>

        {/* Right Section for Text */}
        <div className="flex-1 flex flex-col justify-center items-center">
          {/* Text Section */}
          <div className="mb-2 text-7xl font-normal text-left">
            {" "}
            {/* Adjusted text-left here */}
            <p>
              Level Up Your <span className="text-orange-500">Experience</span>{" "}
              <br />
              Discover <span className="text-orange-500">
                Froker's
              </span> <br /> Superpower!
            </p>
          </div>

          {/* Marquee Section */}
          <div className="marquee">
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1718959059/Group_1171276765_dzopia.png"
              alt="Image 1"
              className="marquee-item"
            />
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1718959059/Group_1171276766_u3mpff.png"
              alt="Image 2"
              className="marquee-item"
            />
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1719577882/Group_1171276772_1_sqeohu.png"
              alt="Image 3"
              className="marquee-item"
            />
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1719578056/Group_1171276764_mqcgaa.png"
              alt="Image 4"
              className="marquee-item"
            />
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1718959059/Group_1171276765_dzopia.png"
              alt="Image 5"
              className="marquee-item"
            />
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1718959059/Group_1171276766_u3mpff.png"
              alt="Image 6"
              className="marquee-item"
            />
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1719577882/Group_1171276772_1_sqeohu.png"
              alt="Image 7"
              className="marquee-item"
            />
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1719578056/Group_1171276764_mqcgaa.png"
              alt="Image 8"
              className="marquee-item"
            />
          </div>
        </div>
      </div>

      {/* Page 5 Section */}
      <div className="min-h-[100vh] m-24 ">
        <h1 className="font-medium text-7xl leading-tight mb-10">
          Opportunity for
          <br />
          <span className="text-orange-500">Froker App Users</span>
        </h1>
        <h1 className="text-4xl">
          Enjoy challenges, Earn reward and Leverage AI capabilities for
          well-informed purchases.
        </h1>
        <div className="flex gap-9  mt-14">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1719578170/Group_1171276767_joebez.png"
              className="image-item"
              alt="Image 1"
            />
          </div>
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1719578359/Group_1171276768_kqdnfg.png"
              className="image-item"
              alt="Image 2"
            />
          </div>
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1719578359/Group_1171276769_mmcn2l.png"
              className="image-item"
              alt="Image 3"
            />
          </div>
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1719578358/Group_1171276770_mflsap.png"
              className="image-item"
              alt="Image 4"
            />
          </div>
        </div>
      </div>

      {/* Page 6 Section */}
      <div style={{ height: "100px" }} className="bg-black"></div>
      <div
        className=""
        style={{
          height: "140vh",
          backgroundImage:
            'url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThrgnyHt7-4DOxw-B8U8zgfqb8Zt4Y-CV3eqsybybERIzRfvlh")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-8xl font-bold text-white ">
          Opportunity For{" "}
          <span className="text-orange-500">Froker's Creator</span>
        </h1>
        <h1 className="text-4xl mt-6 text-white leading-normal">
          Experience the thrill of a fun social platform to promote products,
          boost
          <br />
          your affiliate earnings, and dive into exciting brand collaborations!
        </h1>

        <div className="flex gap-24 mt-24 justify-center">
          <div
            className="card flex flex-col items-center"
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1718957586/image_83_es94kt.png"
              className="card-image"
            />
            <h1 className="card-text">
              <h1 className="text-5xl font-medium text-orange-500 mb-2">
                Analytics
              </h1>
              Access detailed analytics for each
              <br /> piece of content, allowing you to track
              <br /> performance and optimize earnings
            </h1>
          </div>
          <div
            className="card flex flex-col items-center"
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1718957586/image_81_jbpgjp.png"
              className="card-image"
            />
            <h1 className="card-text">
              <h1 className="text-5xl font-medium text-orange-500 mb-2">
                Commission
              </h1>
              Earn top commissions by collaborating
              <br />
              with a diverse range of emerging
              <br />
              and established brands
            </h1>
          </div>
          <div
            className="card flex flex-col items-center"
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1718957586/image_82_xliny6.png"
              className="card-image"
            />
            <h1 className="card-text">
              <h1 className="text-5xl font-medium text-orange-500 mb-2">
                Brand Collaboration
              </h1>
              Explore extensive brand collaboration
              <br />
              opportunities from our vast network
              <br />
              of brands on the Froker app
            </h1>
          </div>
        </div>
      </div>

      {/* Page 7 Section */}
      <div className="min-h-[150vh] mt-20">
        <h1 className="text-7xl font-semibold text-orange-500">
          Maximize Your Brand’s Impact
        </h1>
        <h1 className="mt-16 text-3xl leading-relaxed text-gray-600">
          Discover a Platform Beyond Traditional Commerce
          <br />
          Transforms Business Growth
          <br />
          Unveils Innovative Marketing Strategies!
        </h1>

        
        <div className="max-w-[53%] mx-auto mt-20">
  {/* First Card */}
  <div className="siu max-h-[40vh] bg-white shadow-md overflow-hidden rounded-3xl mb-8">
    <div className="flex justify-center items-center p-4 gap-10">
      <div>
        <h1 className="text-2xl font-medium text-black text-left text-4xl mb-4">
          Campaign <span className="text-orange-500">Analytics</span>
        </h1>
        <p className="text-2xl">
          Gain deep insights with detailed campaign analytics,
          <br />
          ensuring transparent and effective brand promotion.
        </p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009704/Frokerassets/_17-10_cdrubo.png"
          className="w-80 h-80 rounded-full mr-4"
          alt="Card Image"
        />
      </div>
    </div>
  </div>

  {/* Second Card */}
  <div className="siu max-h-[40vh] bg-white shadow-md overflow-hidden rounded-3xl mb-8">
    <div className="flex justify-center items-center p-4 gap-10">
      <div>
        <h1 className="text-2xl font-medium text-black text-left text-4xl mb-4">
          Second Card Title
        </h1>
        <p className="text-2xl">
          Second Card Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Nulla convallis libero in nisl consequat commodo.
        </p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009704/Frokerassets/_17-10_cdrubo.png"
          className="w-80 h-80 rounded-full mr-4"
          alt="Card Image"
        />
      </div>
    </div>
  </div>

  {/* Third Card */}
  <div className="siu max-h-[40vh] bg-white shadow-md overflow-hidden rounded-3xl">
    <div className="flex justify-center items-center p-4 gap-10">
      <div>
        <h1 className="text-2xl font-medium text-black text-left text-4xl mb-4">
          Third Card Title
        </h1>
        <p className="text-2xl">
          Third Card Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Nulla convallis libero in nisl consequat commodo.
        </p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009704/Frokerassets/_17-10_cdrubo.png"
          className="w-80 h-80 rounded-full mr-4"
          alt="Card Image"
        />
      </div>
    </div>
  </div>
</div>

            


        </div>
      
    </>
  );
}

export default Blog;
