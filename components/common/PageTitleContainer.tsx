import classNames from "classnames";

type Props = React.PropsWithChildren<{}>;

export const PageTitleContainer = (props: Props) => {
  return (
    <div
      className={classNames("flex justify-center items-center w-full")}
      style={{
        background: "linear-gradient(180deg, #f3dbff00 -20.69%, #7d53ff20 103.45%)",
        boxShadow: "0px 1px 0px #8974ffa3 ",
      }}
    >
      <div className="w-full max-w-[1280px] flex flex-col">{props.children}</div>
    </div>
  );
};
