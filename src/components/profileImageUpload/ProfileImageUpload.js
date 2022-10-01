import Axios from "../../Axios";
import React from "react";
import { useState } from "react";
import "./profileImageUpload.scss"
import Loader from "../loader/Loader";

const ProfileImageUpload = ({
    uploadType,
    id,
    uploadPath
}) => {
    const [file, setFile] = useState();
    const [loading, setLoading] = useState(false)

    const handleChange = (event) => {
        onUpload(event.target.files[0]);
        setFile(URL.createObjectURL(event.target.files[0]));
    };


    const guidGenerator = () => {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

    const onUpload = async (file) => {

        const formData = new FormData()
        formData.append('file', file)

        try {
            setLoading(true)
            const { data } = await Axios.post(`/image/${uploadType}/${id ? id : guidGenerator()}`, formData)
            if (data.success) {
                setFile(data.data)
                setLoading(false)
                uploadPath(data.data)
            } else {
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <div className="profile-upload-wrapper shadow-new">
            {loading ?
                <Loader width={"w-10"} className="text-gray-200" /> :
                <label htmlFor="featured">
                    {file ? (
                        <img className="uploaded-image rounded" src={file} alt="" />
                    ) : (
                        <img
                            className="uploaded-image rounded"
                            src={"/assets/images/blank-profile.png"
                            }
                            alt=""
                        />
                    )}
                </label>
            }
            <input
                id="featured"
                type="file"
                className="invisible"
                onChange={handleChange}
            />
        </div>
    );
};

export default ProfileImageUpload;
