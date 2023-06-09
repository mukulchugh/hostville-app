import React from "react";
import { CommentSection } from "react-comments-section";
import "./styles.css";

const ReviewsWidget = () => {
  const data = [
    {
      userId: "01a",
      comId: "012",
      fullName: "Riya Negi",
      avatarUrl: "https://ui-avatars.com/api/name=Riya&background=random",
      userProfile: "https://www.linkedin.com/in/mukulchugh",
      text: "Hey, Loved this place ",
      replies: [
        {
          userId: "02a",
          comId: "013",
          userProfile: "https://www.linkedin.com/in/mukulchugh/",
          fullName: "Adam Scott",
          avatarUrl: "https://ui-avatars.com/api/name=Adam&background=random",
          text: "Thanks! It was so sweet of you🥰",
        },
        {
          userId: "01a",
          comId: "014",
          userProfile: "https://www.linkedin.com/in/mukulchugh/",
          fullName: "Riya Negi",
          avatarUrl: "https://ui-avatars.com/api/name=Ra&background=random",
          text: "thanks!😊",
        },
      ],
    },
    {
      userId: "02b",
      comId: "017",
      fullName: "Lily",
      userProfile: "https://www.linkedin.com/in/mukulchugh/",
      text: "How far is it?",
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
      replies: [],
    },
  ];

  const onSubmitAction = (data) => {
    console.log("check submit: ", data);
  };

  const currentData = (data) => {
    console.log("current data: ", data);
  };

  return (
    <div style={{ width: "100%" }}>
      <CommentSection
        currentUser={{
          currentUserId: localStorage.getItem("userId"),
          currentUserImg: `https://ui-avatars.com/api/name=${localStorage.userName.replace(
            /["']/g,
            ""
          )}&background=random`,
          currentUserProfile: "https://www.linkedin.com/in/",
          currentUserFullName: localStorage
            .getItem("userName")
            .replace(/["']/g, ""),
        }}
        commentData={data}
        logIn={{
          loginLink: "http://localhost:3001/",
          signupLink: "http://localhost:3001/",
        }}
        onSubmitAction={onSubmitAction}
        currentData={currentData}
      />
    </div>
  );
};

export default ReviewsWidget;
