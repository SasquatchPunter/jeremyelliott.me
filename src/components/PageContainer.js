/**
 * A general purpose page container
 * @param {React.PropsWithChildren} param0
 */
function PageContainer({ children }) {
  return (
    <div className="text-stone-200 bg-main-pattern bg-stone-900 bg-blend-overlay p-8 min-h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
}

export default PageContainer;
