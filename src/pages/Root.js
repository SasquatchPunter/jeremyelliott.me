import VendorLinkBar from "../components/VendorLinkBar";

function Root() {
  return (
    <div className="text-stone-600 p-8" id="site-container">
      <h1 className="text-xl underline">JEREMYELLIOTT.ME</h1>
      <p>
        Hi! I'm Jeremy, a web developer / designer based in Canmore, Alberta
      </p>
      <p>
        Obviously there's not a lot to see just yet, but check back often while
        I build out the site!
      </p>

      <VendorLinkBar />
    </div>
  );
}

export default Root;
