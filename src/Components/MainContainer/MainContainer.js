import Card from "../Card/Card";
import ChatInput from "../ChatInput/ChatInput";
import MemberListContainer from "../MemberListContainer/MemberListContainer";
import Message from "../Message/Message";
import SearchBarMainContainer from "../SearchBarMainContainer/SearchBarMainContainer";
import SearchBG from "./../../Assets/Banners/DiscoverySearchBanner.svg";
import "./MainContainer.css";

function Type1() {
  return (
    <>
      <div className="main_container">
        <SearchBarMainContainer />
        {/* <div className="testcontainer">
            <div className="chatcontainer">


                <div className="chatinput">
                </div>
            </div>
            <div className="memberscontainer"></div>
        </div> */}

        <div className="maincontainer1">
          <div
            style={{
              display: "flex",
              height: "100%",
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <div className="chatmessages">
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message /> <Message /> <Message /> <Message />
            </div>

            <ChatInput />
          </div>
          <MemberListContainer />
        </div>
      </div>
    </>
  );
}

function Type3() {
  return (
    <>
      <div className="main_container">
        <div className="DiscoveryContent">
          <div className="DiscoverySearchContainer">
            <img className="Discoverysvg" src={SearchBG} alt="" />
            <div className="SearchContent">
              <h1 className="DiscoverySearchHeading">
                Find Your Community on Discord
              </h1>
              <div className="SearchSubtitle">
                From gaming, to music, to learning, there's a place for you.
              </div>
              <div className="DiscoverySearchBar">
                <div className="DiscoverySearchHolder">
                  <div className="DiscoverySearch">
                    <input type="text" placeholder="Explore communities" />
                  </div>
                  <div className="searchicon">
                    <svg
                      className="icon"
                      role="img"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardsholder">
            <h2 className="cardsHeading">Featured communities</h2>
            <div className="cardsGrid">
              <Card
                splashimg="https://cdn.discordapp.com/discovery-splashes/662267976984297473/4798759e115d2500fef16347d578729a.jpg?size=300"
                guildimg="https://cdn.discordapp.com/icons/662267976984297473/e75033be72087a87fa09e91727dac2a4.webp?size=40"
                Title="Midjourney"
                subTitle="The official server for Midjourney, a text-to-image AI where your
                imagination is the only limit."
                onLineCount="336,009"
                memberCount="4,268,176"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MainContainer(props) {
  return (
    <>
      {props.type === 1 ? (
        <Type1 />
      ) : props.type === 2 ? (
        "" //<Type2 />
      ) : props.type === 3 ? (
        <Type3 />
      ) : (
        ""
      )}
    </>
  );
}

export default MainContainer;
