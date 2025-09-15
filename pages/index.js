import Link from 'next/link';
import Head from 'next/head';

const MoreOverPage = () => (
  <>
    <Head>
      <title>MoreOver</title>
      <meta property="og:title" content="MoreOver" />
      <meta name="theme-color" content="#000000" />
      <meta property="og:image" content="https://media.discordapp.net/attachments/829555283352485929/1095241260933066782/MOSHED-2023-4-11-1-57-33.gif?ex=68c861a9&is=68c71029&hm=7ef8e3647cdbb1ab847e0a73cb4937b660638da0b8aad7d0e0d6aa932a1164e4&=" />
      <meta property="og:url" content="https://www.moreovermusic.com/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card support */}
      <meta name="twitter:card" content="summary_large_image" />
      </Head>


    <div className="container">
      <style jsx>{`
        html, body{
          margin: 0;
        }

        * {
          margin: 0px;
          padding; 0px;
          box-sizing: border-box;
        }
        
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #000;
          color: #fff;
          padding: 0; /* Remove padding */
          overflow: hidden;
        }

        .image-slot {
          text-align: center;
          animation: fade-in 1s ease forwards;
        }

        .icon-slot {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        
        .Presave {
          opacity: 1;
          animation: fade-in 1s ease forwards;
        }
        
        .icon {
          opacity: 1;
          animation: fade-in 1s ease forwards;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <div className="image-slot">
        <img
          src="https://i.postimg.cc/ZnhZz9Bx/MOSHED-2023-4-11-1-57-33.gif"
          alt="logo gif"
        />
      </div>

      <div className='Presave'>
        <a href="https://ffm.to/overexposure">
          <img
          src="https://i.postimg.cc/851xvQrd/listen.png"
          alt="Clickable Image"
          />
        </a>
      </div>

      <div className="icon-slot">
        <a href="https://soundcloud.com/moreovermedia" className="icon-link">
          <img
            className="icon"
            src="https://i.postimg.cc/DZGFNQZz/3fc0a5b672328e67c0aa15520f1f7d8e.png"
            alt="soundcloud"
          />
        </a>
        <a href="https://open.spotify.com/artist/4wiS0iDCB2VU3JahjjPpzh" className="icon-link">
          <img
            className="icon"
            src="https://i.postimg.cc/s2qsKH38/spotify.png"
            alt="spotify"
          />
        </a>
        <a href="https://www.tiktok.com/@moreovermedia" className="icon-link">
          <img
            className="icon"
            src="https://i.postimg.cc/HLVTw11X/tiktok.png"
            alt="tiktok"
          />
        </a>
        <a href="https://twitter.com/MoreOverMusic" className="icon-link">
          <img
            className="icon"
            src="https://i.postimg.cc/CxvFnLXw/twitter.png"
            alt="twitter"
          />
        </a>
      </div>
    </div>
  </>
);

export default MoreOverPage;




