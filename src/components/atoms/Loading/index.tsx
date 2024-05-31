import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        backgroundColor: "rgba(24, 24, 24, 0.95)",
        zIndex: 99,
      }}
    >
      <ReactLoading type="bars" color="#ef4444" height="3rem" width="3rem" />
    </div>
  );
}
