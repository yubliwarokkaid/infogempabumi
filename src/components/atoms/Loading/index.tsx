import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-[99999] flex items-center justify-center"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.884)",
      }}
    >
      <div className="flex items-center">
        <h1 className="mr-2 text-sm italic tracking-widest text-sky-500">
          Sedang mengambil data
        </h1>
        <ReactLoading
          type="bubbles"
          color="#0ea5e9"
          height="32px"
          width="32px"
        />
      </div>
    </div>
  );
}
