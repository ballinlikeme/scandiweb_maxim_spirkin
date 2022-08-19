import React from "react";

export class ProductImages extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      currentImage: null,
      imagesToDisplay: [],
    };
  }

  componentDidMount() {
    this.setState({
      images: this.props.images,
      currentImage: this.props.images[0],
      imagesToDisplay: this.props.images.slice(1, 4),
    });
  }

  changeCurrentImage = (event) => {
    const newCurrentImage = event.target.src;
    const newImagesToDisplay = this.state.images
      .filter((image) => {
        return image !== newCurrentImage;
      })
      .slice(0, 3);
    this.setState({
      currentImage: newCurrentImage,
      imagesToDisplay: newImagesToDisplay,
    });
  };

  render() {
    return (
      <div className="product__images images">
        <div className="images__small">
          {this.state.imagesToDisplay.map((image, index) => {
            return (
              <img
                onClick={this.changeCurrentImage}
                key={index}
                src={image}
                alt="Product"
              />
            );
          })}
        </div>
        <div className="images__big">
          <img src={this.state.currentImage} alt="Product" />
        </div>
      </div>
    );
  }
}
