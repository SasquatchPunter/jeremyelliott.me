import VendorLink from "./VendorLink";

function VendorLinkBar({ className }) {
  const linkClass = "w-8 h-8";
  const iconClass = "hover:fill-stone-400";

  return (
    <div
      className={[
        "p-4 bg-stone-900 flex flex-row fixed right-0 bottom-0 gap-2 rounded-tl-lg",
        className,
      ].join(" ")}
    >
      <VendorLink
        className={linkClass}
        iconClass={iconClass}
        vendor="github"
      ></VendorLink>
      <VendorLink
        className={linkClass}
        iconClass={iconClass}
        vendor="codepen"
      ></VendorLink>
      <VendorLink
        className={linkClass}
        iconClass={iconClass}
        vendor="linkedin"
      ></VendorLink>
    </div>
  );
}

export default VendorLinkBar;
