import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-[99999] flex items-center justify-center"
      style={{
        backgroundColor: "rgba(24, 24, 24, 0.95)",
      }}
    >
      <div className="flex items-center">
        <ReactLoading
          type="spinningBubbles"
          color="#0ea5e9"
          height="2rem"
          width="2rem"
        />
        <h1 className="ml-2 text-sm italic tracking-widest text-sky-500">
          Loading...
        </h1>
      </div>
    </div>
  );
}
