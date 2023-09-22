import React from 'react';
import PopupController from '../../compenents/PopupController';

const ListPostsView = ({
  data,
  showPopup,
  setShowPopup,
  userName,
  setUserName,
}) => {
  return (
    <div className="container">
      {!data && <p className="load">Yükleniyor...</p>}

      {data?.map((post) => (
        <div key={post.id}>
          <div className="post">
            <div className="info">
              <h3>{post.title}</h3>
              <p
                onClick={() => {
                  setUserName(post.user);
                  setShowPopup(true);
                }}
              >
                {post.user}
              </p>
            </div>
            <p className="text">{post.text}</p>
          </div>
        </div>
      ))}

      {showPopup && (
        <PopupController
          setShowPopup={setShowPopup}
          userName={userName}
        />
      )}
    </div>
  );
};

export default ListPostsView;