import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import ProfileForm from "../components/ProfileForm";

export default function Profile() {
  return (
    <div className="flex bg-gray-50 border-b" >
      {/* Sidebar */}
      <Dashboard />

      {/* Main Content */}
      <section className="flex flex-1 flex-col gap-6 w-full lg:w-[960px] px-4 md:px-8 lg:px-16 py-3 md:py-6 lg:py-12 shadow-md bg-white dark:bg-black">
        <Heading />
        <div className="flex flex-col gap-40 md:gap-10">
          <Image />
          <ProfileForm />
        </div>
      </section>
    </div>
  );
}

const Heading = () => {
  return (
    <div className="flex flex-col  justify-center items-cetner gap-3 w-full lg:w-[624px] ">
      <h1 className="text-2xl  md:text-3xl lg:text-4xl font-bold text-primary-text dark:text-primary-text ">
        Account Information
      </h1>
      <p className="text-primary-text text-center md:text-lg lg:text-xl">
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
    <div className="flex flex-col md:flex-row items-center gap-10 w-full md:w-[438px] md:h-[102px]  p-5  ">
      <img
        src={selectedImage || "/profile-icon.png"}
        alt="Profile"
        onError={(e) => (e.target.src = "/profile-icon.png")}
        className="w-[102.64px] h-[102.64px] rounded-full object-cover"
      />

      <div className="flex gap-4">
        <label
          htmlFor="upload-photo"
          className="cursor-pointer bg-primary-btn dark:bg-primary-btn text-white px-4 py-2 rounded-lg w-[140px] h-[40px] text-xs flex items-center justify-center"
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
          className="bg-disabled-btn dark:bg-disabled-btn text-primary-text dark:text-white px-4 py-2 rounded-lg w-[140px] h-[40px] text-xs cursor-pointer"
          onClick={() => setSelectedImage("/profile.png")}
        >
          Remove Photo
        </button>
      </div>
    </div>
  );
};
