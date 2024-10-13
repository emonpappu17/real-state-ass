// import { tabTitle } from "../TitleFunction/titleFunction";
// import { useForm } from "react-hook-form"

// const Login = () => {

//     //dynamic title
//     tabTitle('MYHOME | Login')

//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors, isSubmitting },
//     } = useForm();

//     const onSubmit = async (data) => {
//         // API call k simulate kori
//         await new Promise((resolve) => setTimeout(resolve, 5000));
//         console.log('submitting the form', data);
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div>
//                     <label>First Name:</label>
//                     <input {...register('firstName',
//                         {
//                             required: true,
//                             minLength: { value: 3, message: 'Min len at least 3' },
//                             maxLength: { value: 6, message: 'max length 6' }
//                         })} />
//                     {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
//                 </div>
//                 <br />
//                 <div>
//                     <label>Middle Name:</label>
//                     <input {...register('middleName')} />
//                 </div>
//                 <br />
//                 <div>
//                     <label>Last Name:</label>
//                     <input {...register('lastName',
//                         {
//                             pattern: {
//                                 value: /^[A-Za-z]+$/i,
//                                 message: 'Last name is not as per the rules'
//                             }
//                         })} />
//                     {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
//                 </div>
//                 <input type="submit" disabled={isSubmitting} value={isSubmitting ? 'Submitting' : 'Submit'} />
//             </form>
//         </div>
//     );
// };

// export default Login;

// ===========================================================================================

import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { tabTitle } from "../TitleFunction/titleFunction";
import { useContext } from "react";
import { AuthContext } from "./Shared/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import { FaGoogle, FaTwitter } from "react-icons/fa";

const Login = () => {

    //dynamic title
    tabTitle('MYHOME | Login')

    const { signInUser, signWithGoogle, signWithTwitter } = useContext(AuthContext)

    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email, password);

        //sign in user
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast('Successfully logged in')
                // reset login form
                e.target.reset();

                // navigate after login
                navigate(location.state ? location.state : '/')

            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            })
    }

    /// Google
    const handleGoogleLogin = () => {
        signWithGoogle()
            .then(result => {
                console.log(result.user, 'google login');

                // navigate after login
                navigate(location.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err);
            })
    }

    /// Twitter
    const handleTwitterLogin = () => {
        signWithTwitter()
            .then(result => {
                console.log(result.user, 'twitter login');

                // navigate after login
                navigate(location.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-3">
            <Card className="mx-auto border-2 p-4" color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Login
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to Login.
                </Typography>
                <form onSubmit={handleSubmit} className=" mt-8 mb-2 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            name="email"
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            name="password"
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>

                    <Button type="submit" className="mt-6" fullWidth>
                        Login
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <Link to='/register' className="font-medium text-gray-900">Register</Link>
                    </Typography>
                </form>
                <button onClick={handleGoogleLogin} className="btn">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button onClick={handleTwitterLogin} className="btn mt-4">
                    <FaTwitter></FaTwitter>
                    Login with Twitter
                </button>
            </Card>
            <ToastContainer />
        </div>
    );
};

export default Login;