import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { tabTitle } from "../TitleFunction/titleFunction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "./Shared/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {

    //dynamic title
    tabTitle('MYHOME | Register')

    const { createUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const photoUrl = form.get('photoUrl')
        const password = form.get('password')

        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            return toast.warn("Must have an Uppercase and a Lowercase letter in the password")
        }
        else if (password.length <= 6) {
            return toast.warn("Password must be at least 6 character")
        }

        console.log(name, email, photoUrl, password);

        // create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast('Successfully registered')

                //update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoUrl
                })
                    .then()
                    .catch()

                // clear register field
                e.target.reset()
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            })
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-3">
            <Card className="mx-auto border-2 p-4" color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Register
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form onSubmit={handleSubmit} className=" mt-8 mb-2 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <Input
                            required
                            size="lg"
                            placeholder="Name"
                            name="name"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            required
                            size="lg"
                            placeholder="name@mail.com"
                            name="email"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Photo URL
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Photo Url"
                            name="photoUrl"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            required
                            type="password"
                            size="lg"
                            placeholder="********"
                            name="password"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <Link to='/login' className="font-medium text-gray-900">Login</Link>
                    </Typography>
                </form>
            </Card>
            <ToastContainer />
        </div>
    );
};

export default Register;