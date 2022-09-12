import VendorLink from "./VendorLink";

const linkClass = "w-8 h-8";

function VendorLinkBar() {
  return (
    <div className="p-4 bg-stone-600 flex flex-row fixed right-0 bottom-0 gap-2 rounded-tl-lg">
      <VendorLink className={linkClass} vendor="github"></VendorLink>
      <VendorLink className={linkClass} vendor="codepen"></VendorLink>
      <VendorLink className={linkClass} vendor="linkedin"></VendorLink>
    </div>
  );
}

export default VendorLinkBar;
