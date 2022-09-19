/**
 * A general purpose page container
 * @param {React.PropsWithChildren} param0
 */
function PageContainer({ children, className }) {
  const baseClass =
    "text-stone-200 bg-main-pattern bg-stone-900 bg-blend-overlay bg-cover p-8 min-h-screen flex flex-col justify-center items-center";
  return <div className={[baseClass, className].join(" ")}>{children}</div>;
}

export default PageContainer;
