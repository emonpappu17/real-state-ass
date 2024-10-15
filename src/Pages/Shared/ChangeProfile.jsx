import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Shared/AuthProvider";
import { updateProfile } from "firebase/auth";
import { tabTitle } from "../../TitleFunction/titleFunction";

const ChangeProfile = () => {
    //dynamic title
    tabTitle('MYHOME | Change Profile')

    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photoUrl = form.get('photoUrl')

        //update profile
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {
                navigate('/updateProfile')
                setUser({ ...user, displayName: name, photoURL: photoUrl })
               
            })
            .catch(err => {
                console.log(err)
            })

        // clear register field
        e.target.reset()
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-3">
            <Card className="mx-auto border-2 p-4" color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Change Profile
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to Change Profile.
                </Typography>
                <form onSubmit={handleSubmit} className=" mt-8 mb-2 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your New Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Name"
                            name="name"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
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
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>
                        Save
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default ChangeProfile;