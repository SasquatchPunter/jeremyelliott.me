import BulletList from "../components/BulletList";
import HeaderNav from "../components/HeaderNav";
import PageContainer from "../components/PageContainer";

import VendorLinkBar from "../components/VendorLinkBar";

function Root() {
  return (
    <PageContainer>
      <HeaderNav />

      <BulletList.Horizontal className="text-3xl" bulletStyle="‣">
        <li>Developer</li>
        <li>Designer</li>
        <li>Tech Enthusiast</li>
      </BulletList.Horizontal>

      <p>
        Hi! I'm Jeremy, a web developer / designer based in Canmore, Alberta!
      </p>
      <p>
        Obviously there's not a lot to see just yet, but check back often while
        I build out the site!
      </p>

      <VendorLinkBar />
    </PageContainer>
  );
}

export default Root;
