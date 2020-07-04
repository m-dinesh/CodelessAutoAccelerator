body {
  margin: 0px;
}

#main-container .sub-container {
  scroll-behavior: smooth;
}
#main-container .header {
  width: 100%;
  min-height: 60px;
  display: block;
  position: relative;
}
#main-container .header .left-content {
  display: inline;
  position: absolute;
  margin: 1vh;
  margin-bottom: 1vh;
  margin-left: 1.3vw;
  margin-top: 1.5vh;
}
#main-container .header .left-content img {
  width: auto;
  height: auto;
}
#main-container .header .logoText {
  display: inline;
  position: absolute;
  margin: 1vh;
  margin-bottom: 1vh;
  margin-left: 4.5vw;
  margin-top: 1vh;
}
#main-container .header .logoText p {
  font-family: "Lato", sans-serif;
  font-size: 2.1vh;
  color: #21215d;
}
#main-container .header .right-content {
  display: inline;
  position: absolute;
  right: 30px;
  top: 15px;
}
#main-container .header .right-content .nav-items {
  display: block;
}
#main-container .header .right-content .nav-items li {
  display: inline;
  margin-left: 15px;
  font-family: "Muli", sans-serif;
  cursor: pointer;
  font-weight: bold;
}
#main-container .header .right-content .nav-items li a {
  text-decoration: none;
  color: black;
}
#main-container .section1 {
  position: relative;
  margin-top: 10px;
  height: 118vh;
  width: 100%;
}
#main-container .section1 .center-text {
  position: absolute;
  top: 6%;
  left: 28%;
  color: WHITE;
  font-size: 3vw;
  font-family: "Muli", sans-serif;
}
#main-container .section1 svg path {
  fill: url(#my-cool-gradient1);
}
#main-container .section1 path {
  transition: fill 1s ease;
}
#main-container .section1 .sec1-img {
  position: absolute;
  width: 15vw;
  height: 31vh;
  top: 27vh;
  left: 43vw;
}
#main-container .section1 .mountain-img {
  position: absolute;
  max-height: 120px;
  max-width: 125px;
  top: 67%;
  left: 47%;
}
#main-container .section1 .left-circle {
  position: absolute;
  height: 17vh;
  width: 8vw;
  top: 80vh;
  left: 20vh;
  background-image: linear-gradient(to right, #d23174, #f34938);
  border-radius: 50%;
}
#main-container .section1 .right-circle {
  position: absolute;
  height: 15vw;
  width: 15vw;
  top: 50vh;
  right: 16vh;
  background-image: linear-gradient(to right, #301397, #f34938);
  border-radius: 50%;
}
#main-container .section2 {
  height: 90vh;
  width: 100%;
}
#main-container .section2 .sec2-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
  height: 90vh;
  padding-left: 10%;
  padding-right: 6%;
}
#main-container .section2 .sec2-container .list {
  height: 90vh;
  width: 90vw;
}
#main-container .section2 .sec2-container .left-session h3 {
  font-size: 5.6vh;
  font-family: Muli;
  margin-bottom: 10vh;
}
#main-container .section2 .sec2-container .left-session p {
  font-size: 3.2vh;
  font-family: "Muli";
}
#main-container .section2 .sec2-container .right-session {
  display: flex;
  justify-content: center;
  align-items: center;
}
#main-container .section2 .sec2-container svg {
  max-height: 100% !important;
  width: 100% !important;
}
#main-container .section3 {
  margin-top: 10vh;
  height: 222vh;
  position: relative;
}
#main-container .section3 .sec3-backimg {
  width: 100%;
  max-height: 222vh;
  position: absolute;
}
#main-container .section3 .upper {
  position: absolute;
  height: 90vh;
  width: 100%;
}
#main-container .section3 .upper .sec3-heading {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  height: 30vh;
}
#main-container .section3 .upper .sec3-heading .list {
  font-size: 5.6vh;
  color: white;
  display: flex;
  justify-content: center;
}
#main-container .section3 .upper .sec3-heading .sec3-main-heading {
  margin-bottom: 0vh;
  margin-top: 7vh;
}
#main-container .section3 .upper .sec3-heading .sec3-sub-heading {
  margin-top: 3vh;
}
#main-container .section3 .upper .sec3-content {
  font-family: "Muli";
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
  height: 60vh;
  padding-left: 10%;
  padding-right: 10%;
}
#main-container .section3 .upper .sec3-content .sec3-img {
  display: flex;
  height: 60vh;
  width: 50vw;
  align-items: flex-start;
  justify-content: center;
}
#main-container .section3 .upper .sec3-content .sec3-img svg {
  max-height: 50vh !important;
  width: 35vw !important;
}
#main-container .section3 .upper .sec3-content .sec3-text {
  height: 60vh;
  width: 60vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 6vh;
}
#main-container .section3 .upper .sec3-content .sec3-text p {
  font-size: 3.2vh;
  color: white;
}
#main-container .section3 .lower {
  position: absolute;
  top: 91vh;
  height: 120vh;
  width: 100%;
}
#main-container .section3 .lower .modules {
  font-family: "Muli";
  position: absolute;
  left: 45vw;
  font-size: 185%;
  color: white;
}
#main-container .section3 .lower img {
  position: absolute;
  top: 9vh;
  max-width: 47vw;
  left: 27vw;
}
#main-container .section4 .sec4-content {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  height: 100vh;
  width: 100%;
}
#main-container .section4 .sec4-content .heading {
  padding-top: 2vh;
  font-family: "Muli";
  font-size: 3.6vh;
  height: 10vh;
  text-align: center;
}
#main-container .section4 .sec4-content .sec4row {
  height: 45vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
  padding-left: 6%;
  padding-right: 6%;
}
#main-container .section4 .sec4-content .list1 .shell {
  width: 20vw;
}
#main-container .section4 .sec4-content .list2 .shell {
  width: 25vw;
}
#main-container .section4 .sec4-content .shell {
  height: 40vh;
  background: aliceblue;
}
#main-container .section5 {
  margin-top: 10vh;
}
#main-container .section5 .sec5-container {
  height: 130vh;
  width: 100%;
  position: relative;
}
#main-container .section5 .sec5-container .sec5-background {
  height: 130vh;
  width: 100%;
  position: absolute;
}
#main-container .section5 .sec5-container .devops {
  height: 24vh;
  width: 22vw;
  position: absolute;
  left: 37vw;
}
#main-container .section5 .sec5-container .bottom-circle {
  border-radius: 50%;
  position: absolute;
  bottom: -10vh;
  left: -1vw;
  background-image: linear-gradient(to right, #d23174, #f34938);
  height: 37vh;
  width: 20vw;
}
#main-container .section5 .sec5-container .sec5-subcontent {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  height: 79vh;
  width: 100%;
  position: absolute;
  top: 25vh;
}
#main-container .section5 .sec5-container .sec5-subcontent .heading {
  font-family: "Muli";
  font-size: 3.6vh;
  height: 10vh;
  text-align: center;
  color: white;
}
#main-container .section5 .sec5-container .sec5-subcontent .image {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  height: 35vh;
  padding-left: 7%;
  padding-right: 7%;
  margin-top: 2vh;
}
#main-container .section5 .sec5-container .sec5-subcontent .image div {
  background: aliceblue;
  height: 35vh;
}
#main-container .section5 .sec5-container .sec5-subcontent .content {
  height: 30vh;
  width: 100%;
}
#main-container .section5 .sec5-container .sec5-subcontent .content .details {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
  padding-left: 6%;
  padding-right: 6%;
  height: 25vh;
  margin-top: 3vh;
}
#main-container .section5 .sec5-container .sec5-subcontent .content .details .list {
  height: 25vh;
  width: 20vw;
  background: aliceblue;
}
#main-container .section6 .sec6-content {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  height: 100vh;
  width: 100%;
}
#main-container .section6 .sec6-content .heading {
  font-family: "Muli";
  font-size: 3.6vh;
  height: 10vh;
  text-align: center;
}
#main-container .section6 .sec6-content .benifits {
  height: 75vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
  padding-right: 8%;
  padding-left: 8%;
}
#main-container .section6 .sec6-content .benifits .list {
  height: 34vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
}
#main-container .section6 .sec6-content .benifits .list .item {
  height: 32vh;
  width: 18vw;
  background: aliceblue;
}
#main-container .section6 .sec6-content .loadmore {
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
#main-container .section6 .sec6-content .loadmore .button {
  background-image: linear-gradient(to right, #d23174, #f34938);
  border: none;
  color: white;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 25px;
  height: 8vh;
  font-size: 17px;
  font-weight: bold;
  width: 10vw;
}
#main-container .section6 .sec6-content .loadmore button:focus {
  outline: 0 !important;
}
#main-container .section7 .sec7-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  height: 100vh;
  width: 100%;
}
#main-container .section7 .heading {
  font-family: "Muli";
  font-size: 3.6vh;
  height: 10vh;
  text-align: center;
}
#main-container .section7 .content {
  height: 75vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
  padding-right: 8%;
  padding-left: 8%;
}
#main-container .section7 .send {
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
#main-container .section7 .send .button {
  background-image: linear-gradient(to right, #d23174, #f34938);
  border: none;
  color: white;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 25px;
  height: 8vh;
  font-size: 17px;
  font-weight: bold;
  width: 10vw;
}
#main-container .section7 .send button:focus {
  outline: 0 !important;
}
#main-container .section8 {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vh;
}

#particles-js {
  width: 100%;
  height: 80vh;
  position: absolute;
  top: 0;
}

#particles-js:hover svg path {
  fill: url(#my-cool-gradient2) !important;
}

/*# sourceMappingURL=styles.cs.map */
