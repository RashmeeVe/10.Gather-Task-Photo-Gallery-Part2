import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import defaultImage from "./images/default.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import React from "react";
import Zoom from "@material-ui/core/Zoom";

import styles from "./MyStyles";
import * as classNames from "classnames";
import { withStyles } from "@material-ui/styles";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageListLeft: [], imageListRight: [] };
  }

  handleClickImage = (number) => {
    alert(number);
  };

  handleClickAvatar = (number) => {
    alert(number);
  };

  imageHandlerLeft = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const { imageListLeft } = this.state;
        this.setState({
          imageListLeft: [
            {
              id: uuidv4(),
              image: reader.result,
            },
            ...imageListLeft,
          ],
        });
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  imageHandlerRight = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const { imageListRight } = this.state;
        this.setState({
          imageListRight: [
            ...imageListRight,
            {
              id: uuidv4(),
              image: reader.result,
            },
          ],
        });
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { classes } = this.props;
    const { imageListLeft, imageListRight } = this.state;

    const cardClasses = {
      card1: {
        cardLeft: classes.RightMarginCard1,
        cardRight: classes.RightMarginCard1,
        image: classes.imageDiv1,
        string: classes.verticalString1,
      },
      card2: {
        cardLeft: classes.RightMarginCard2,
        cardRight: classes.RightMarginCard2,
        image: classes.imageDiv2,
        string: classes.verticalString2,
      },
      card3: {
        cardLeft: classes.RightMarginCard3,
        cardRight: classes.RightMarginCard3,
        image: classes.imageDiv3,
        string: classes.verticalString3,
      },
      card4: {
        cardLeft: classes.RightMarginCard4,
        cardRight: classes.RightMarginCard4,
        image: classes.imageDiv4,
        string: classes.verticalString4,
      },
      card5: {
        cardLeft: classes.RightMarginCard5,
        cardRight: classes.RightMarginCard5,
        image: classes.imageDiv5,
        string: classes.verticalString5,
      },
      card6: {
        cardLeft: classes.RightMarginCard6,
        cardRight: classes.RightMarginCard6,
        image: classes.imageDiv6,
        string: classes.verticalString6,
      },
      card7: {
        cardLeft: classes.RightMarginCard7,
        cardRight: classes.RightMarginCard7,
        image: classes.imageDiv7,
        string: classes.verticalString7,
      },
      card8: {
        cardLeft: classes.RightMarginCard8,
        cardRight: classes.RightMarginCard8,
        image: classes.imageDiv8,
        string: classes.verticalString8,
      },
    };
    let newClassName;
    imageListLeft.length < 8
      ? (newClassName = classNames(classes.gallery, classes.justifyCenter))
      : (newClassName = classes.gallery);

    return (
      <div className={classes.mainDiv}>
        <h1 className={classes.heading}>Photo Gallery</h1>
        <div className={classes.galleryOuterDiv}>
          <div className={newClassName}>
            {/* Upload Image Left Button Starts */}
            <div
              className={classNames(classes.card, classes.uploadImgLeftBtnCard)}
            >
              <div
                className={classNames(
                  classes.verticalString,
                  classes.uploadImgLeftBtnVerticalString
                )}
              ></div>
              <div className={classes.clipCircle}></div>
              <div className={classes.clipRectangle}></div>
              <div className={classNames(classes.uploadImgLeftBtnDiv)}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file-left"
                  multiple
                  type="file"
                  onChange={this.imageHandlerLeft}
                />
                <label htmlFor="contained-button-file-left">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    className={classes.button}
                  >
                    <p className={classes.btnText}>
                      <AddCircleOutlineIcon className={classes.btnIcon} />
                      <br />
                      Upload Photos
                    </p>
                  </Button>
                </label>
              </div>
            </div>
            {/* Upload Image Left Button Ends */}

            {/* Left Image Handler */}
            {imageListLeft.map((data, index) => {
              const cardClassKey = `card${
                ((imageListLeft.length - index) % 8) + 1
              }`;
              const cardClass = cardClasses[cardClassKey];

              return (
                <Zoom in={true} timeout={1000} key={data.id}>
                  <div className={classNames(classes.card, cardClass.cardLeft)}>
                    <Avatar
                      alt="R"
                      src="/static/images/avatar/1.jpg"
                      onClick={() => this.handleClickAvatar(index)}
                      className={classes.avatar}
                    />
                    <div
                      className={classNames(
                        classes.verticalString,
                        cardClass.string
                      )}
                    ></div>
                    <div className={classes.clipCircle}></div>
                    <div className={classes.clipRectangle}></div>
                    <div
                      className={classNames(
                        classes.imageDivBorder,
                        cardClass.image
                      )}
                    >
                      <img
                        src={data.image}
                        alt="image1"
                        className={classes.imageCSS}
                        onClick={() => this.handleClickImage(index)}
                      />
                    </div>
                  </div>
                </Zoom>
              );
            })}
            {/* Left Image Handler */}

            <div className={classNames(classes.card, classes.card1)}>
              <Avatar
                alt="R"
                src="/static/images/avatar/1.jpg"
                className={classes.avatar}
              />
              <div
                className={classNames(
                  classes.verticalString,
                  classes.verticalString1
                )}
              ></div>
              <div className={classes.clipCircle}></div>
              <div className={classes.clipRectangle}></div>
              <div
                className={classNames(
                  classes.imageDivBorder,
                  classes.imageDiv1
                )}
              >
                <img
                  src={defaultImage}
                  alt="image1"
                  className={classes.imageCSS}
                />
              </div>
            </div>

            {/* Right Image Handler */}
            {imageListRight.map((data, index) => {
              const cardClassKey = `card${8 - (index % 8)}`;
              const cardClass = cardClasses[cardClassKey];

              return (
                <Zoom in={true} timeout={1000} key={data.id}>
                  <div
                    className={classNames(classes.card, cardClass.cardRight)}
                  >
                    <Avatar
                      alt="R"
                      src="/static/images/avatar/1.jpg"
                      onClick={() => this.handleClickAvatar(index)}
                      className={classes.avatar}
                    />
                    <div
                      className={classNames(
                        classes.verticalString,
                        cardClass.string
                      )}
                    ></div>
                    <div className={classes.clipCircle}></div>
                    <div className={classes.clipRectangle}></div>
                    <div
                      className={classNames(
                        classes.imageDivBorder,
                        cardClass.image
                      )}
                    >
                      <img
                        src={data.image}
                        alt="image1"
                        className={classes.imageCSS}
                        onClick={() => this.handleClickImage(index)}
                      />
                    </div>
                  </div>
                </Zoom>
              );
            })}
            {/* Right Image Handler */}

            {/* Upload Image Right Button Starts */}
            <div
              className={classNames(
                classes.card,
                classes.uploadImgRightBtnCard
              )}
            >
              <div
                className={classNames(
                  classes.verticalString,
                  classes.uploadImgRightBtnCardVerticalString
                )}
              ></div>
              <div className={classes.clipCircle}></div>
              <div className={classes.clipRectangle}></div>
              <div className={classNames(classes.uploadImgRightBtnDiv)}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file-right"
                  multiple
                  type="file"
                  onChange={this.imageHandlerRight}
                />
                <label htmlFor="contained-button-file-right">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    className={classes.button}
                  >
                    <p className={classes.btnText}>
                      <AddCircleOutlineIcon className={classes.btnIcon} />
                      <br />
                      Upload Photos
                    </p>
                  </Button>
                </label>
              </div>
            </div>
            {/* Upload Image Right Button Ends */}

            {/* Share On Facebook Card Starts */}
            <div
              className={classNames(classes.card, classes.shareOnFacebookCard)}
            >
              <div
                className={classNames(
                  classes.verticalString,
                  classes.shareOnFacebookCardVerticalString
                )}
              ></div>
              <div className={classes.clipCircle}></div>
              <div className={classes.clipRectangle}></div>
              <div className={classNames(classes.shareOnFacebookCardButtonDiv)}>
                <Button
                  variant="contained"
                  component="span"
                  color="primary"
                  className={classes.button}
                >
                  <p className={classes.btnText}>
                    Share This Page
                    <br />
                    <FacebookIcon className={classes.btnIcon} />
                  </p>
                </Button>
              </div>
            </div>
            {/* Share On Facebook Card Ends */}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
