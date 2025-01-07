import classNames from "classnames";

type CustomTagProps = React.PropsWithChildren<{
  type?: "stroke" | "primary";
}>;

export const CustomTag = (props: CustomTagProps) => {
  const { type } = props;
  return (
    <div
      className={classNames(
        "rounded-[.03rem] px-[.04rem] py-[.04rem] text-[.12rem] flex items-center justify-center",
        !type || type === "primary" ? "text-[#fff]" : "",
        {
          "border-[0.01rem] border-[#6c6f77]": type === "stroke",
        }
      )}
      style={{
        background:
          !type || type === "primary" ? "linear-gradient(279.55deg, #7168C0  -1.42%, #412F8C 96.22%)" : "none",
      }}
    >
      {props.children}
    </div>
  );
};
