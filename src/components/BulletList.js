const BulletList = {};

/**
 * Horizontal unordered bulleted list
 * @param {React.PropsWithChildren} param0
 */
BulletList.Horizontal = function ({ children, className, bulletStyle = "-" }) {
  const baseClass =
    "flex [&>li+li]:before:mx-4 [&>li+li]:before:[--tw-content:var(--bullet-style)]";
  return (
    <ul
      style={{ "--bullet-style": `'${bulletStyle}'` }}
      className={[baseClass, className].join(" ")}
    >
      {children}
    </ul>
  );
};

/**
 * Vertical unordered bulleted list
 * @param {React.PropsWithChildren} param0
 */
BulletList.Vertical = function ({ children, className, bulletStyle = "-" }) {
  const baseClass = "list-[var(--bullet-style)] [&_li]:pl-4";
  return (
    <ul
      style={{ "--bullet-style": `'${bulletStyle}'` }}
      className={[baseClass, className].join(" ")}
    >
      {children}
    </ul>
  );
};

export default BulletList;
