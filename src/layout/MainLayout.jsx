import { clearUser, setUser } from "@/Redux/authSlice/authSlice";
import { auth } from "@/services/firebase.init";
import Footer from "@/Shared/Footer";
import Navbar from "@/Shared/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";


const Root = () => {
    const dispatch = useDispatch();
    const authChecked = useSelector((state) => state.auth.authChecked);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(
                    setUser({
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        providerId: user.providerData[0]?.providerId || "password",
                    })
                );
            } else {
                dispatch(clearUser());
            }
        });

        return () => unsubscribe();
    }, [dispatch]);

    if (!authChecked) {
        console.log("Auth state not checked yet...");
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="font-sans relative bg-sky-100 ">


            <div className="">
                <nav>
                    <Navbar />
                </nav>

                <div className="">
                    <Outlet />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Root;