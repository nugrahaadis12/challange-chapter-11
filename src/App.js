import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    imageUrl: null,
    imageAlt: null,
    videoProfileUrl: null,
    videoProfileAlt: null,
    videoGameUrl: null,
    videoGameAlt: null
  }

  openWidgetIMG = () => {
    // create the widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dtochq6ko',
        uploadPreset: 'profileIMG',
      },
      (error, result) => {
        if (result.event === 'success') {
          this.setState({
            imageUrl: result.info.secure_url,
            imageAlt: `An image of ${result.info.original_filename}`
          })
        }
      },
    );
    widget.open(); // open up the widget after creation
  };

  openWidgetVidProfile = () => {
    // create the widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dtochq6ko',
        uploadPreset: 'profileVID',
      },
      (error, result) => {
        if (result.event === 'success') {
          this.setState({
            videoProfileUrl: result.info.secure_url,
            videoProfileAlt: `An image of ${result.info.original_filename}`
          })
        }
      },
    );
    widget.open(); // open up the widget after creation
  };

  openWidgetVidGame = () => {
    // create the widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dtochq6ko',
        uploadPreset: 'gameVID',
      },
      (error, result) => {
        if (result.event === 'success') {
          this.setState({
            videoProfileUrl: result.info.secure_url,
            videoProfileAlt: `An image of ${result.info.original_filename}`
          })
        }
      },
    );
    widget.open(); // open up the widget after creation
  };

  handleImageUpload = () => {
    // const { files } = document.querySelector('input[type="file"]')
    // console.log('Image file', files[0])
    // // get the first input element with the type of file,
    // const imageFile = document.querySelector('input[type="file"]')
    // // destructure the files array from the resulting object
    // const files = imageFile.files
    // // log the result to the console
    // console.log('Image file', files[0])

    const { files } = document.querySelector('input[type="file" id="profileImage"]')
    const data = new FormData();
    data.append('file', files[0]);
    // replace this with your upload preset name
    data.append('upload_preset', 'profileIMG');

    const options = {
      method: 'post',
      folder: 'Profile',
      body: data
    };

    // replace cloudname with your Cloudinary cloud_name
    return fetch('https://api.cloudinary.com/v1_1/dtochq6ko/image/upload', options)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  handleVideoProfileUpload = () => {

    const { files } = document.querySelector('input[type="file"]')
    const dataVid = new FormData();
    dataVid.append('file', files[0]);
    // replace this with your upload preset name
    dataVid.append('upload_preset', 'profileIMG');

    const optionsNew = {
      method: 'post',
      folder: 'Video',
      body: dataVid
    };

    // replace cloudname with your Cloudinary cloud_name
    return fetch('https://api.cloudinary.com/v1_1/dtochq6ko/image/upload', optionsNew)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    const { imageUrl, imageAlt } = this.state;
    const { videoProfileUrl, videoProfileAlt } = this.state;
    const { videoGameUrl, videoGameAlt } = this.state;

    return (
      <>
        <main className="App">
          <section className="left-side">
            <form>
              <h3>Profile Image</h3>
              <div className="form-group">
                <input type="file" id="profileImage"/>
              </div>

              <button type="button" className="btn" onClick={this.handleImageUpload}>Submit</button>
              <button type="button" className="btn widget-btn" onClick={this.openWidgetIMG}>Upload Via Widget</button>
            </form>
          </section>
          <section className="right-side">
            <p>The resulting image will be displayed here</p>
            {imageUrl && (
              <img src={imageUrl} alt={imageAlt} className="displayed-image" />
            )}
          </section>
        </main>
        <main className="App">
          <section className="left-side">
            <form>
              <h3>Profile Video</h3>
              <div className="form-group">
                <input type="file" />
              </div>

              <button type="button" className="btn" onClick={this.handleVideoProfileUpload}>Submit</button>
              <button type="button" className="btn widget-btn" onClick={this.openWidgetVidProfile}>Upload Via Widget</button>
            </form>
          </section>
          <section className="right-side">
            <p>The resulting video profile will be displayed here</p>
            {videoProfileUrl && (
              <img src={videoProfileUrl} alt={videoProfileAlt} className="displayed-image" />
            )}
          </section>
        </main>
        <main className="App">
          <section className="left-side">
            <form>
              <h3>Game Video</h3> */}
              <div className="form-group">
                <input type="file" />
              </div>

              <button type="button" className="btn widget-btn" onClick={this.openWidgetVidGame}>Upload Via Widget</button>
              <button type="button" className="btn" onClick={this.handleVideoGameUpload}>Submit</button>
            </form>
          </section>
          <section className="right-side">
            <p>The resulting video game will be displayed here</p>
            {videoGameUrl && (
              <img src={videoGameUrl} alt={videoGameAlt} className="displayed-image" />
            )}
          </section>
        </main>
      </>
    );
  }
}

export default App;

// import uploadWidget from './components/uploadWidget';

// function App() {

//   const [image, setImage] = useState(" ")


//   const submitImage = () => {
//     // console.log(files[0]);
//     const data = new FormData()
//     data.append("file", image)
//     data.append("upload_preset", "demoWeb")
//     data.append("cloud_name", "dtochq6ko")

//     fetch("https://api.cloudinary.com/v1_1/dtochq6ko/image/upload", {
//       method: "post",
//       body: data
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       }).catch((err) => {
//         console.log(err);
//       })
//   }

//   return (
//     <div className="App">
//       <input
//         type="file"
//         onChange={(e) => {
//           setImage(e.target.files[0])
//         }} />
//       <button onClick={submitImage}>upload</button>
//     </div>
//   );
// }

// export default App;
