import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";


function Search() {
  const [item, setItem] = useState("");
  const [image, setImage] = useState([]);
  const [text, setText] = useState("");
  const clientID = "dEfHNalSs7yYqyMO5IHbo2ahvhilyrgW6NF456yFbWE";

  const handleChange = (event) => {
    setItem(event.target.value);
    console.log(item);
  };

  useEffect(() => {
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      text +
      "&client_id=" +
      clientID;

    axios.get(url).then((response) => {
      console.log(response);
      setImage(response.data.results);
    });
  }, [text]);

  const handleSubmit = (e) => {
    setText(item);
  };

  return (
    <>
      <div className="container row height d-flex justify-content-center align-items-center">
        <div className="col-md-8">
          <div className="search">
            <input
              type="text"
              className="form-control"
              placeholder="Search anyhting.."
              onChange={handleChange}
              value={item}
            />
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="container result">
        <div className="row">
          {image.map((value, index) => {
            return (
              <div key={index} className="col-4 flex">
                <div className="card" style={{ width: "18rem" }}>
                  <Popup
                    trigger={
                      <img
                        src={value.urls.thumb}
                        className="card-img-top"
                        alt="image"
                      />
                    }
                    position="top right"
                  >
                    {(close) => (
                      <div>
                        <img src={value.urls.small} />
                        <a className="close" onClick={close}>
                          &times;
                        </a>
                      </div>
                    )}
                  </Popup>
                  <div className="card-body">
                    <h5 className="card-title">
                      {value.user.first_name} {value.user.last_name}
                    </h5>
                    <p className="card-text">{value.user.instagram_username}</p>
                    <p className="card-text">{value.likes} likes</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
