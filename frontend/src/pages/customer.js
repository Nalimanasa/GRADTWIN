import customer from './customer.jpg'

function Customers() {
  const style = {
    container: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      width: "100%",
      position: "relative",
      background: "#f5f5f5",
      padding: "20px 0",
      display:"flex",
      gap:"20px",
      flexDirection:"column",
    },
    slider: {
      display: "inline-flex",
      animation: "scroll 8s linear infinite",
    },
    sliders: {
      display: "inline-flex",
      animation: "scroll 5s linear infinite",
    },
    logoBox: {
      minWidth: "200px",
      height: "100px",
      margin: "0 15px",
      background: "white",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    },
    img: {
      maxWidth: "80%",
      maxHeight: "80%",
    },
  };

  return (
    <div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      <h2 style={{ textAlign: "center" ,color:"white",height:"50px",paddingTop:"30px",backgroundImage:`url(${customer})`}}>Our Customers</h2>

      <div style={style.container}>
        <div style={style.slider}>
          {Array(1)
            .fill([
              "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Hindalco_Logo.svg/1200px-Hindalco_Logo.svg.png",
              "https://pbs.twimg.com/profile_images/1790659357517983744/eONzj10b_400x400.jpg",
              "https://media.licdn.com/dms/image/v2/C560BAQHzkMYTrj33Tw/company-logo_200_200",
              "https://upload.wikimedia.org/wikipedia/commons/d/dc/BALCO_Logo.jpg?20170331094332",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfTSEgAJMQfItAPgWrbJQNQLL1Ad2i65PJg&s",
              "https://download.logo.wine/logo/Ashok_Leyland/Ashok_Leyland-Logo.wine.png",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT98v-FpCZ1bqj7_GWsU-QDGg1FAfpGYgsZQ&s",
               "https://www.finolex.com/UploadedImages/Finolex-Logo.jpg" ,
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLJJNmCRDhvk3b75IqrG4k7ueD0GSE6KSKQ&s" ,
               "https://images.jdmagicbox.com/v2/comp/delhi/79/011p2104779/catalogue/hindustan-tin-works-ltd-connaught-place-delhi-tin-container-manufacturers-15t65xh-250.jpg",
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQziSu5FcNXkp3INTZaBVUWKbWmgKCEkjFD9w&s" ,
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BodmD0k4geFnBU8i4gW6YzkEPyHxGtlzJA&s",
               "https://etimg.etb2bimg.com/thumb/msid-122044005,width-1200,height-900,resizemode-4/.jpg" ,
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjtZT8fK2pzqZhv50LhcdvTtHedzQPwrcaOw&s" ,
            ])
            .flat()
            .map((logo, index) => (
              <div key={index} style={style.logoBox}>
                <img src={logo} alt="customer logo" style={style.img} />
              </div>
            ))}
        </div>
         <div style={style.sliders}>
          {Array(2)
            .fill([
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbARl5xuMvimxKmrUWq27WMmoIYBmjQxT86Q&s" ,
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0E8_aqXTAoal1A4-zR5-yyL_YxLO1XqgMRQ&s",
              "https://jswmi.in/jswm/storage/2020/04/jsw-logo-jv.png",
              "https://www.tatasteel.com/media/3396/ts_logo_guidelines03.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwvAcT_Eh3TYPM1Ml-fvxhFWFJo40qjRU8w&s",
              "https://media.licdn.com/dms/image/v2/D5612AQEDr3b8X8wvmQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1732704437979?e=2147483647&v=beta&t=Ebs94JWn-M1EVZEJYD24f_k4cQvB3ydM5lHdabB66HI",
              "https://trendlyne-media-mumbai-new.s3.amazonaws.com/profilepicture/1264_profilepicture.png",
            ])
            .flat()
            .map((logo, index) => (
              <div key={index} style={style.logoBox}>
                <img src={logo} alt="customer logo" style={style.img} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Customers;
