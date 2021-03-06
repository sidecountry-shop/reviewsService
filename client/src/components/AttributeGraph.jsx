import React, { Component } from 'react';

class AttributeGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProduct: Math.floor(Math.random() * 1000 + 1),
      size: '',
      width: '',
      comfort: '',
      quality: '',
      length: '',
      fit: '',
    };
  }

  // http://52.26.193.201:3000/reviews/4/meta
  // http://localhost:3004/reviews/4/meta
  componentDidMount() {
    const { currentProduct } = this.state;
    fetch(`http://localhost:3004/reviews/${currentProduct}/meta`)
      .then((res) => res.json())
      .then((data) => {
        console.log('ATTGraph', data[0]);
        this.createGraphs(data[0]);
      });
  }

  // Come back to***

  createGraphs(data) {
    const dataKeys = Object.keys(data.characteristics);
    const stateKeys = Object.keys(this.state);
    for (let i = 0; i < dataKeys.length; i++) {
      if (stateKeys.includes(dataKeys[i].toLowerCase())) {
        let widthPercent = (Number(data.characteristics[dataKeys[i]].value) / 5) * 100;
        widthPercent = `${widthPercent}%`;
        this.setState({
          [dataKeys[i].toLowerCase()]: widthPercent,
        });
      }
    }
  }

  render() {
    const {
      size, width, comfort, quality, length, fit,
    } = this.state;
    const stateKeys = Object.keys(this.state);
    return (
      <div className="attribute-graph">
        <div
          className="size-graph"
          style={size ? { display: 'block' } : { display: 'none' }}
        >
          <div className="attr-label">Size</div>
          <div className="attr-outer">
            <img
              className="attr-breakdown-size"
              height="5%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Black_triangle.svg/1200px-Black_triangle.svg.png"
            />
          </div>
          <div className="left-to-right-explanation">
            <span className="too-small">too small</span>
            <span> perfect </span>
            <span className="too-wide">too wide</span>
          </div>
        </div>

        <div
          className="width-graph"
          style={width ? { display: 'block' } : { display: 'none' }}
        >
          <div className="attr-label">Width</div>
          <div className="attr-outer">
            <img
              className="attr-breakdown-width"
              style={width ? { left: width } : { display: 'none' }}
              height="5%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Black_triangle.svg/1200px-Black_triangle.svg.png"
            />
          </div>
          <div className="left-to-right-explanation">
            <span className="too-small">too narrow</span>
            <span> perfect </span>
            <span className="too-wide">too wide</span>
          </div>
        </div>

        <div
          className="comfort-graph"
          style={comfort ? { display: 'block' } : { display: 'none' }}
        >
          <div className="attr-label">Comfort</div>
          <div className="attr-outer">
            <img
              className="attr-breakdown-comfort"
              style={comfort ? { left: comfort } : { display: 'none' }}
              height="5%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Black_triangle.svg/1200px-Black_triangle.svg.png"
            />
          </div>
          <div className="left-to-right-explanation">
            <span className="too-small">uncomfortable</span>
            <span> ok </span>
            <span className="too-wide">perfect</span>
          </div>
        </div>

        <div
          className="quality-graph"
          style={quality ? { display: 'block' } : { display: 'none' }}
        >
          <div className="attr-label">Quality</div>
          <div className="attr-outer">
            <img
              className="attr-breakdown-quality"
              style={quality ? { left: quality } : { display: 'none' }}
              height="5%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Black_triangle.svg/1200px-Black_triangle.svg.png"
            />
          </div>
          <div className="left-to-right-explanation">
            <span className="too-small">poor</span>
            <span> acceptable </span>
            <span className="too-wide">perfect</span>
          </div>
        </div>

        <div className="length-graph">
          <div className="attr-label">Length</div>
          <div className="attr-outer">
            <img
              className="attr-breakdown-length"
              style={length ? { left: length } : { display: 'none' }}
              height="5%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Black_triangle.svg/1200px-Black_triangle.svg.png"
            />
          </div>
          <div className="left-to-right-explanation">
            <span className="too-small">too short</span>
            <span> perfect </span>
            <span className="too-wide">too long</span>
          </div>
        </div>

        <div
          className="fit-graph"
          style={fit ? { display: 'block' } : { display: 'none' }}
        >
          <div className="attr-label">Fit</div>
          <div className="attr-outer">
            <img
              className="attr-breakdown-fit"
              style={fit ? { left: fit } : { display: 'none' }}
              height="5%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Black_triangle.svg/1200px-Black_triangle.svg.png"
            />
          </div>
          <div className="left-to-right-explanation">
            <span className="too-small">too tight</span>
            <span> perfect </span>
            <span className="too-wide">too loose</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AttributeGraph;
