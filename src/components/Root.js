import VendorLinkBar from "./VendorLinkBar";
import ContactForm from "./ContactForm";

function Root() {
  return (
    <div className="text-stone-600" id="site-container">
      <h1 className="text-xl underline">JEREMYELLIOTT.ME</h1>
      <p>
        Hi! I'm Jeremy, a web developer / designer based in Canmore, Alberta
      </p>
      <p>
        Obviously there's not a lot to see just yet, but check back often while
        I build out the site!
      </p>

      <ContactForm.Dropdown className="absolute top-0 right-0 rounded-bl-xl" />
      <VendorLinkBar />
    </div>
  );
}

export default Root;
