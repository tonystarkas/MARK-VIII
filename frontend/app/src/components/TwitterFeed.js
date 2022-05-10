import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterFeed = (props) => {
  return (
    <div className="twitter">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="NIOGlobal"
        options={{ height: 600 }}
      />
    </div>
  );
};

export default TwitterFeed;
