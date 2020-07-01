import React, { Component } from 'react';

class ImageModal extends Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    return (
      <div>
        <input type="image" width="20%" height="20%" src={this.props.photo} name="modalImageButton" className="image-modal-button" data-toggle="modal" data-target="#exampleModal"/>
        <div className={`modal fade bd-example-modal-lg`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Photos</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img width="100%" height="100%" src={this.props.photo}></img>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageModal;
