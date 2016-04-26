var React = require('react');
var Dropzone = require('react-dropzone');

/* file global */

module.exports = React.createClass({
  onDrop: function (files) {
    this.props.setImages(files)
  },

  onOpenClick: function () {
    this.refs.dropzone.open();
  },

  render: function () {
    return (
      <div className='row'>
        <Dropzone
          className='dropzone'
          activeClassName='dropzone-active'
          ref="dropzone"
          onDrop={this.onDrop}>
            <div>Upload images</div>
        </Dropzone>
        {this.props.images.length > 0 ? <div>
        <p>Uploading {this.props.images.length} files</p>
        <div>{this.props.images.map((file) => <img key={file.name} src={file.preview} /> )}</div>
        </div> : null}
      </div>
    );
  }
});
