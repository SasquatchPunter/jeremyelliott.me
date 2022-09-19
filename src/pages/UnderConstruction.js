import HeaderNav from "../components/HeaderNav";
import PageContainer from "../components/PageContainer";

function UnderConstruction() {
  return (
    <PageContainer>
      <HeaderNav />
      <h1 className="text-4xl text-transparent bg-gradient-to-r from-amber-500 to-yellow-700 bg-clip-text">
        Under Construction
      </h1>

      <p>Sorry! I haven't built this yet.</p>
    </PageContainer>
  );
}

export default UnderConstruction;
