import React from 'react';

const handleChange = (receiveNewProfilePicture, imgType) => (e) => {
  const file = e.currentTarget.files[0];
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    receiveNewProfilePicture(imgType, file, fileReader.result);
  };
  if (file) {
    fileReader.readAsDataURL(file);
  }
};

const ImageUploadModal = props => {
  return (
    <div class='user-edit-img'>
      <form>
        <label className='modal-file-input-container'>
          Choose an image
          <input className='file-input' type="file" onChange={ handleChange(props.receiveNewProfilePicture, props.imgType) } />
        </label>
      </form>
    </div>
  );
};

export default ImageUploadModal;

// class ProfileImageModal extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = { profile_img: '' };
//     this.handleChange = this.handleChange.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(e) {
//     const file = e.currentTarget.files[0];
//     const fileReader = new FileReader();
//     fileReader.onloadend = () => {
//       this.props.receiveNewProfilePicture('profile', file, fileReader.result);
//       // this.setState({
//       //   profile_img: file,
//       // });
//     };
//     if (file) {
//       fileReader.readAsDataURL(file);
//     }
//   }
//
//   // handleSubmit(e) {
//   //   e.preventDefault();
//   //
//   // }
//
//   render() {
//     return (
//       <div id='user-edit-profile-img'>
//         <form>
//           <input type="file" onChange={ this.handleChange } />
//         </form>
//       </div>
//     );
//   }
// }
//
//


// (e) => {
//     const file = e.currentTarget.files[0];
//     const fileReader = new FileReader();
//     fileReader.onloadend = () => (
//       this.setState({
//         [`${field}_file`]: file,
//         [`${field}_url`]: fileReader.result
//       })
//     );
//
//     if (file) {
//       fileReader.readAsDataURL(file);
//     } else {
//       this.setState({ profile_img_url: "", profile_img_file: null });
//     }
//   };
