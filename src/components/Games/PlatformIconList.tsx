import { IconType } from "react-icons/lib";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendi: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div className="d-flex column-gap-2 opacity-75 flex-wrap">
      {platforms.map((platform) => (
        // {iconMap[platform.slug]}
        <div key={platform.id}>
          {platform.slug == 'pc' && <FaWindows size={20} />}
          {platform.slug == 'playstation' && <FaPlaystation size={20} />}
          {platform.slug == 'xbox' && <FaXbox size={20} />}
          {platform.slug == 'nintendi' && <SiNintendo size={20} />}
          {platform.slug == 'mac' && <FaApple size={20} />}
          {platform.slug == 'linux' && <FaLinux size={20} />}
          {platform.slug == 'android' && <FaAndroid size={20} />}
          {platform.slug == 'ios' && <MdPhoneIphone size={20} />}
          {platform.slug == 'web' && <BsGlobe size={20} />}
        </div>
      ))}
    </div>
  );
};

export default PlatformIconList;
