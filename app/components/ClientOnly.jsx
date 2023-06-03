"use client";

import React, { useState, useEffect } from "react";

const ClientOnly = ({ children, currentUser }) => {
  const [hasMounted, setHasMounted] = useState(false);
  // This is a hack to prevent the following error:

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("userName", JSON.stringify(currentUser?.name));
      localStorage.setItem("userEmail", JSON.stringify(currentUser?.email));
      localStorage.setItem("userImage", JSON.stringify(currentUser?.image));
      localStorage.setItem("userId", JSON.stringify(currentUser?.id));
    }
  }, [currentUser]);

  if (!hasMounted) return null;

  return <>{children}</>;
};

export default ClientOnly;
