import React from "react";

export class Slider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sliderPosition: 0,
    };

    this.sliderImages = React.createRef();
  }

  slideForward = () => {
    const maxSlideNumber = (this.props.images.length - 1) * 200;
    if (this.state.sliderPosition === maxSlideNumber) {
      return;
    }
    this.setState(
      {
        sliderPosition: this.state.sliderPosition + 200,
      },
      () => {
        this.sliderImages.current.childNodes.forEach((element) => {
          element.style = `transform: translateX(-${this.state.sliderPosition}px)`;
        });
      }
    );
  };

  slideBackward = () => {
    if (this.state.sliderPosition === 0) {
      return;
    }

    this.setState(
      {
        sliderPosition: this.state.sliderPosition - 200,
      },
      () => {
        this.sliderImages.current.childNodes.forEach((element) => {
          element.style = `transform: translateX(-${this.state.sliderPosition}px)`;
        });
      }
    );
  };

  render() {
    if (this.props.images.length > 1) {
      return (
        <div className="item-cart__slider slider">
          <div className="slider__wrapper">
            <div className="slider__item">
              <div className="slider__images" ref={this.sliderImages}>
                {this.props.images.map((image, index) => {
                  return <img src={image} key={index} alt="Product" />;
                })}
              </div>
              <div className="slider__controls">
                <button
                  className="slider__button button"
                  onClick={this.slideBackward}
                >
                  <div className="button__arrow button__arrow_prev"></div>
                </button>
                <button
                  className="slider__button button"
                  onClick={this.slideForward}
                >
                  <div className="button__arrow button__arrow_next"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="item-cart__slider slider">
          <div className="slider__wrapper">
            <div className="slider__item">
              <div className="slider__images" ref={this.sliderImages}>
                {this.props.images.map((image, index) => {
                  return <img src={image} key={index} alt="Product" />;
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
