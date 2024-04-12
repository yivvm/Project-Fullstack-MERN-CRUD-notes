import create from "zustand";
import axios from "axios";
import SignupForm from "../components/SignupForm";

const authStore = create((set) => ({
  loggedIn: null,

  loginForm: {
    email: "",
    package: "",
  },

  signupForm: {
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, email } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: email,
        },
      };
    });
  },

  updateSignupForm: (e) => {
    const { name, email } = e.target;

    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: email,
        },
      };
    });
  },

  login: async (e) => {
    e.preventDefault();

    const { loginForm } = authStore.getState();

    const res = await axios.post("/login", loginForm, {
      withCredentials: true,
    });
    // const res = axios.post("https://project-mern-crud-notes.onrender.com/login", loginForm, {
    //     withCredentials: true,
    // });

    set({
      loggedIn: true,
      loginForm: {
        email: "",
        package: "",
      },
    });

    console.log(res);
  },

  checkAuth: async (e) => {
    try {
      await axios.get("/check-auth", { withCredentials: true });
      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },

  signup: async () => {
    const { signupForm } = authStore.getState();

    const res = await axios.post("/signup", signupForm, {
      withCredentials: true,
    });

    set({
      SignupForm: {
        email: "",
        password: "",
      },
    });

    console.log(res);
  },

  logout: async () => {
    axios.get("/logout", {
      withCredentials: true,
    });
    set({ loggedIn: false });
  },
}));

export default authStore;
