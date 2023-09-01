import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "../Utills/Validate";
import { notify } from "../Utills/toast";
import styles from "./SignUp.module.css"
import Footer from "../Utills/Footer";
const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    let navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "login"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, touched]);

    const changeHandler = (event) => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked });
        } else {
            setData({ ...data, [event.target.name]: event.target.value });
        }
    };

    const focusHandler = (event) => {
        setTouched({ ...touched, [event.target.name]: true });
    };

    const submitHandler = (event) => {
             
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You Logged in", "success");
            navigate('/MainDashboard');
        } else {
            notify("invalid data", "error");
            setTouched({
                email: true,
                password: true,
            });
        }
    };

    return (
        <div className={styles.maincontainer}>
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
               <div className="flex justify-center">
              <img className="h-24 bg-blue-600 "      alt="profile_image"  src="https://thumbs.dreamstime.com/b/login-icon-button-vector-illustration-isolated-white-background-127000355.jpg"></img>
               </div>
                <h2 className={styles.header}>Login</h2>
                
                <div className={styles.formField}>
                    <label>Email : </label>
                    <input
                        className={
                            errors.email && touched.email
                                ? styles.uncompleted
                                : styles.formInput
                        }
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    ></input>
                    {errors.email && touched.email && (
                        <span>{errors.email}</span>
                    )}
                </div>
                <div className={styles.formField}>
                    <label>Password : </label>
                    <input
                        className={
                            errors.password && touched.password
                                ? styles.uncompleted
                                : styles.formInput
                        }
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    ></input>
                    {errors.password && touched.password && (
                        <span>{errors.password}</span>
                    )}
                </div>
                

                <div className={styles.formButtons}>
                    <Link to="/signup">Sign Up</Link>
                    <button type="submit" >Login</button>
                </div>
            </form>
            <ToastContainer />
          
      
        </div>
        <Footer/>
      
        </div>
    );
};

export default Login;