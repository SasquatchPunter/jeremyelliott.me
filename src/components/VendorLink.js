import data from "../data.json";
import { useCallback } from "react";
import {
  BsGithub as GithubLogo,
  BsLinkedin as LinkedinLogo,
} from "react-icons/bs";
import { AiOutlineCodepenCircle as CodepenLogo } from "react-icons/ai";

const baseClass = "";
const baseIconClass = "w-full h-full";

/**
 * @param {{vendor: "github" | "codepen" | "linkedin" }} arg0
 * @returns
 */
function VendorLink({ vendor = "linkedin", className, iconClass }) {
  const getIcon = useCallback(() => {
    switch (vendor) {
      case "linkedin":
        return (
          <LinkedinLogo className={[baseIconClass, iconClass].join(" ")} />
        );
      case "github":
        return <GithubLogo className={[baseIconClass, iconClass].join(" ")} />;
      case "codepen":
        return <CodepenLogo className={[baseIconClass, iconClass].join(" ")} />;
      default:
        return;
    }
  }, [vendor, iconClass]);

  return (
    <a
      className={[baseClass, className].join(" ")}
      href={data.contacts[vendor]}
    >
      {getIcon()}
    </a>
  );
}

export default VendorLink;
