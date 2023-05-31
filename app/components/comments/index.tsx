import React, { useState } from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";

type CommentData = {
  userId: string;
  comId: string;
  fullName: string;
  avatarUrl: string;
  userProfile: string;
  text: string;
  replies: CommentData[];
};

type CurrentUser = {
  currentUserId: string;
  currentUserImg: string;
  currentUserProfile: string;
  currentUserFullName: string;
};

const CommentsWidget: React.FC = () => {
  const [data] = useState<CommentData[]>([
    {
      userId: "01a",
      comId: "012",
      fullName: "Riya Negi",
      avatarUrl: "https://ui-avatars.com/api/name=Riya&background=random",
      userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
      text: "Hey, Loved your blog! ",
      replies: [
        {
          userId: "02b",
          comId: "017",
          fullName: "Lily",
          userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
          text: "I have a doubt about the 4th point🤔",
          avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
          replies: [],
        },
      ],
    },
  ]);

  const currentUser: CurrentUser = {
    currentUserId: "01a",
    currentUserImg: "https://ui-avatars.com/api/name=Riya&background=random",
    currentUserProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
    currentUserFullName: "Riya Negi",
  };

  return (
    <CommentSection
      currentUser={currentUser}
      advancedInput={true}
      hrStyle={{ border: "0.5px solid #ff0072" }}
      commentData={data}
      logIn={{
        loginLink: "http://localhost:3001/",
        signupLink: "http://localhost:3001/",
      }}
      customImg="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60"
      inputStyle={{ border: "1px solid rgb(208 208 208)" }}
      formStyle={{ backgroundColor: "white" }}
      submitBtnStyle={{
        border: "1px solid black",
        backgroundColor: "black",
        padding: "7px 15px",
      }}
      cancelBtnStyle={{
        border: "1px solid gray",
        backgroundColor: "gray",
        color: "white",
        padding: "7px 15px",
      }}
      replyInputStyle={{ borderBottom: "1px solid black", color: "black" }}
    />
  );
};

export default CommentsWidget;
