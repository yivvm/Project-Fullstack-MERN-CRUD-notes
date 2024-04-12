import React from "react";
import authStore from "../stores/authStore";
import { useEffect } from "react";
import { Navigate } from "react";

export default function RequireAuth(props) {
  const store = authStore();

  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth();
    }
  }, []);

  if (store.loggedIn === null) {
    return <div>Login</div>;
  }

  if (!store.loggedIn === false) {
    return <Navigate to="/login" />;
  }

  return <div>{props.children}</div>;
}
