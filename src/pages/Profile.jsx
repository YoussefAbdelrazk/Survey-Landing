import { useState, useEffect } from "react";
import ProfileForm from "../components/ProfileForm";
function Profile() {
  return (
    <section className="flex flex-1 flex-col gap-6  lg:gap-8 h-screen w-full lg:w-[960px] px-4 md:px-8 lg:px-16 py-3 md:py-6 lg:py-12">
      <Heading />
      <div className="flex flex-col gap-8 lg:gap-10">
        <Image />
        <ProfileForm/>
      </div>
    </section>
  );
}

export default Profile;

const Heading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full lg:w-[624px]">
      <h1 className="text-2xl  md:text-3xl lg:text-4xl font-bold text-[rgba(30,31,36,1)]">
        Account Information
      </h1>
      <p className="text-[rgba(30,31,36,1)] text-center text-base md:text-lg lg:text-xl">
        Update your personal information to keep your account up to
        <br /> date
      </p>
    </div>
  );
};



const Image = () => {
  const [selectedImage, setSelectedImage] = useState("/profile.png");
  const [objectUrl, setObjectUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setObjectUrl(imageUrl);
    }
  };

  // Cleanup to avoid memory leaks
  useEffect(() => {
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [objectUrl]);

  return (
    <div className="flex items-center gap-10 w-[438px] h-[102px]">
      <img
        src={selectedImage}
        alt="Profile"
        className="w-[102.64px] h-[102.64px] rounded-full object-cover mb-4"
      />

      <div className="flex gap-4">
        <label
          htmlFor="upload-photo"
          className="cursor-pointer bg-[rgba(0,183,193,1)] text-white px-4 py-2 rounded-lg w-[140px] h-[40px] text-xs flex items-center justify-center"
        >
          Upload New Photo
        </label>
        <input
          type="file"
          id="upload-photo"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <button
          className="bg-[rgba(185,187,198,1)] text-[rgba(30,31,36,1)] px-4 py-2 rounded-lg w-[140px] h-[40px] text-xs cursor-pointer"
          onClick={() => setSelectedImage("/profile.png")}
        >
          Remove Photo
        </button>
      </div>
    </div>
  );
};


