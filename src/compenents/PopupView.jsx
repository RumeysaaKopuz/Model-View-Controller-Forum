const PopupView = ({ userName, setShowPopup, data }) => {
    // console.log(data && data[0].user);
    return (
      <div className="wrapper">
        <div className="popup">
          <div className="btn-wrap">
            <h4>
              <span>{userName}</span> kullanıcısının gönderileri
            </h4>
            <button onClick={() => setShowPopup(false)}>kapat</button>
          </div>
  
          {!data && <p>Yükleniyor...</p>}
  
          {data?.map((post) => (
            <div className="post">
              <h2>{post.title}</h2>
              <p>{post.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PopupView;