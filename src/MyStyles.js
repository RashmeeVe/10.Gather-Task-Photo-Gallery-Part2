const styles = {
  mainDiv: {
    background: "linear-gradient(#fff, #f2f2f2)",
    height: "auto",
    width: "auto",
    position: "absolute",
    // textAlign: "center",
    minWidth: 1280,
  },
  heading: {
    marginLeft: "550px",
  },

  galleryOuterDiv: {
    width: "auto",
    height: "auto",
  },

  justifyCenter: {
    justifyContent: "center",
  },

  gallery: {
    display: "flex",
    // justifyContent: "center",
    marginBottom: 20,
    textAlign: "center",
  },

  card: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    cursor: "pointer",
    zIndex: 1,
  },

  verticalString: {
    width: 1,
    background: "linear-gradient(#fff 0%, #000 70%)",
  },
  clipCircle: {
    width: 10,
    border: "1px solid #000",
    height: 10,
    zIndex: 2,
    borderRadius: "50%",
  },
  clipRectangle: {
    width: 30,
    height: 8,
    zIndex: 2,
    background: "#000",
  },
  imageDivBorder: {
    border: "2px solid white",
    boxShadow: "0px 0px 60px 0px #dad9d9",
  },
  imageCSS: {
    height: "100%",
    width: "100%",
    cursor: "pointer",
  },

  // Upload Image Left Button Starts
  // uploadImgLeftBtnCard: { left: 10, top: 150 },
  uploadImgLeftBtnCard: { marginLeft: "5px", marginRight: "-15px", top: 50 },
  uploadImgLeftBtnVerticalString: { height: 100 },
  uploadImgLeftBtnDiv: {
    width: 100,
    height: 100,
    zIndex: 2,
    boxShadow: "0px 0px 60px 0px #dad9d9",
  },
  input: {
    display: "none",
  },
  button: {
    width: "100%",
    height: "100%",
    lineHeight: "1.3",
    padding: "0px 12% 0px 12%",
    textTransform: "none",
    borderRadius: "4px",
  },
  btnIcon: {
    fontSize: 35,
  },
  //Upload Image Left Button Ends

  //Card8 Starts
  LeftMarginCard8: { marginLeft: "-20px" },
  RightMarginCard8: { marginRight: "-50px" },
  verticalString8: { height: 130 },
  imageDiv8: {
    width: 180,
    height: 230,
    zIndex: 1,
    background: "#fca",
  },
  //Card8 Ends

  //Card7 Starts
  LeftMarginCard7: { marginLeft: "-40px" },
  RightMarginCard7: { marginRight: "-120px" },
  verticalString7: { height: 300 },
  imageDiv7: {
    width: 180,
    height: 120,
    zIndex: 1,
    background: "#99ebff",
  },
  //Card7 Ends

  //Card6 Starts
  LeftMarginCard6: { marginLeft: "-130px" },
  RightMarginCard6: { marginRight: "-20px" },
  verticalString6: { height: 50 },
  imageDiv6: {
    width: 170,
    height: 170,
    zIndex: 1,
    background: "#ffcce6",
  },
  //Card6 Ends

  //Card5 Starts
  LeftMarginCard5: { marginLeft: "-20px" },
  RightMarginCard5: { marginRight: "-20px" },
  verticalString5: { height: 80 },
  imageDiv5: {
    width: 200,
    height: 280,
    background: "#ffc2b3",
  },
  //Card5 Ends

  //Card4 Starts
  LeftMarginCard4: { marginLeft: "-20px" },
  RightMarginCard4: { marginRight: "-100px" },
  verticalString4: { height: 55 },
  imageDiv4: {
    width: 200,
    height: 150,
    zIndex: 1,
    background: "#c6ffb3",
  },
  //Card4 Ends

  //Card3 Starts
  LeftMarginCard3: { marginLeft: "-110px" },
  RightMarginCard3: { marginRight: "-10px" },
  verticalString3: { height: 290 },
  imageDiv3: {
    width: 100,
    height: 100,
    background: "#ffccf2",
  },
  //Card3 Ends

  //Card2 Starts
  LeftMarginCard2: { marginLeft: "-20px" },
  RightMarginCard2: { marginRight: "-20px" },
  verticalString2: { height: 30 },
  imageDiv2: {
    width: 120,
    height: 220,
    zIndex: 1,
    background: "#ffeb99",
  },
  //Card2 Ends

  //Card1 Starts
  LeftMarginCard1: { marginLeft: "-20px" },
  RightMarginCard1: { marginRight: "-1px" },
  verticalString1: { height: 110 },
  imageDiv1: {
    width: 150,
    height: 150,
    zIndex: 1,
    background: "#b3b3ff",
  },
  //Card1 Ends

  // Upload Image Right Button Starts
  uploadImgRightBtnCard: { top: 60, marginLeft: "-1px" },
  uploadImgRightBtnCardVerticalString: { height: 135 },
  uploadImgRightBtnDiv: {
    width: 115,
    height: 115,
    zIndex: 1,
    boxShadow: "0px 0px 60px 0px #dad9d9",
    borderRadius: "4px",

    // background: "#000080",
  },
  //Upload Image Right Button Ends

  //Share On Facebook Card Starts
  shareOnFacebookCard: { top: 50, marginLeft: "-10px" },
  shareOnFacebookCardVerticalString: { height: 90 },
  shareOnFacebookCardButtonDiv: {
    width: 100,
    height: 100,
    boxShadow: "0px 0px 60px 0px #dad9d9",
    // background: "#000099",
  },
  //Share On Facebook Card Ends
};

export default styles;
