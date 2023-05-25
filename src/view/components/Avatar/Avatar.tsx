import { UserIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { FunctionComponent, useRef, useState } from "react";
import Text from "../Text/Text";

interface IAvatarProps {}

const Avatar: FunctionComponent<IAvatarProps> = () => {
  const imagePickerRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | ArrayBuffer | null | undefined>(
    null
  );

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e?.target?.files?.[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImage(readerEvent?.target?.result);
    };
  };

  return (
    <div
      className="icon relative flex items-center gap-5 justify-start"
      onClick={() => imagePickerRef?.current?.click()}
    >
      {!image && <Text>عکس خود را آپلود کنید</Text>}
      {image ? (
        <div className="w-24 h-24">
          <Image
            className="rounded-full object-contain"
            src={image as string}
            fill
            alt="profile-photo"
          />
        </div>
      ) : (
        <UserIcon className="rounded-full border-2 border-teal-300 w-10 h-10 items-center justify-center" />
      )}
      <input type="file" onChange={addImage} hidden ref={imagePickerRef} />
    </div>
  );
};

export default Avatar;
