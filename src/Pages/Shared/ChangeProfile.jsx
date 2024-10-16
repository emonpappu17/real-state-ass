import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Shared/AuthProvider";
import { updateProfile } from "firebase/auth";
import { tabTitle } from "../../TitleFunction/titleFunction";
import auth from "../../firebase/firebase.config";

const ChangeProfile = () => {
    // //dynamic title
    // tabTitle('MYHOME | Change Profile')

    // const { user, setUser } = useContext(AuthContext)
    // const navigate = useNavigate();

    // console.log(user);
    // if (!user) {
    //     return <div className="min-h-screen flex justify-center items-center">
    //         <span className="loading loading-spinner loading-lg"></span>
    //     </div>
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const form = new FormData(e.currentTarget);
    //     const name = form.get('name')
    //     const photoUrl = form.get('photoUrl')

    //     // if (!name && !photoUrl)

    //     //update profile
    //     updateProfile(user, {
    //         displayName: name,
    //         photoURL: photoUrl
    //     })
    //         .then(() => {
    //             navigate('/updateProfile')
    //             setUser({ ...user, displayName: name, photoURL: photoUrl })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })

    //     // clear register field
    //     // e.target.reset()
    // }

    // ========================================================

    //dynamic title
    tabTitle('MYHOME | Change Profile')

    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate();

    // States to hold form inputs, initialized to the user's current data
    const [name, setName] = useState(user?.displayName || "");
    const [photoUrl, setPhotoUrl] = useState(user?.photoURL || "");

    // Pre-fill form fields when the user is loaded
    useEffect(() => {
        setName(user.displayName || "");
        setPhotoUrl(user.photoURL || "");
    }, [user])
  
    const handleSubmit = (e) => {
        e.preventDefault();
        // const form = new FormData(e.currentTarget);
        // const name = form.get('name');
        // const photoUrl = form.get('photoUrl');

        // Use firebase.auth().currentUser if user from context is incorrect
        const currentUser = auth.currentUser;
        const updates = {};
        if (currentUser) {

            if (name && name !== currentUser.displayName) {
                updates.displayName = name;
            }

            if (photoUrl && photoUrl !== currentUser.photoURL) {
                updates.photoURL = photoUrl;
            }

            if (Object.keys(updates).length > 0) {
                updateProfile(currentUser, updates)
                    .then(() => {
                        setUser({ ...currentUser, ...updates });
                        navigate('/updateProfile')
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
            else {
                console.log('No changes detected');
            }
            // updateProfile(currentUser, {
            //     displayName: name,
            //     photoURL: photoUrl
            // })
            //     .then(() => {
            //         navigate('/updateProfile');
            //         setUser({ ...currentUser, displayName: name, photoURL: photoUrl });
            //     })
            //     .catch(err => {
            //         console.error('Error updating profile:', err);
            //     });
        } else {
            console.error('No user is signed in.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen p-3">
            <Card className="border-2 p-4" color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Change Profile
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to Change Profile.
                </Typography>
                <form onSubmit={handleSubmit} className=" mt-8 mb-2 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            value={photoUrl}
                            onChange={(e) => setPhotoUrl(e.target.value)}
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