import {
    Card,
    Button,
    Typography,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import { tabTitle } from "../../TitleFunction/titleFunction";

const UpdateProfile = () => {
    //dynamic title
    tabTitle('MYHOME | Update Profile')

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div className="flex justify-center">
            <Card className=" border-2 my-20 px-5" color="transparent" shadow={false}>
                <CardHeader floated={false} className="max-w-[300px] max-h-[250px] mx-auto border">
                    <img className="w-full h-full" src={user.photoURL} alt="profile-picture" />
                </CardHeader>
                <form className="max-w-screen-lg sm:w-96">
                    <CardBody className="text-center">
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {user.displayName}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium" textGradient>
                            {user.email}
                        </Typography>
                    </CardBody>
                    <Link to="/changeProfile"><Button className="mb-4" fullWidth>
                        Change
                    </Button></Link>
                </form>
            </Card>
        </div>
    );
};

export default UpdateProfile;