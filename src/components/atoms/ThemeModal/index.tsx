export interface ThemeModalProps {
  showModal: any;
  setShowModal: any;
  tanggal: string;
  jam: string;
  magnitude: string;
  kedalaman: string;
  lintang: string;
  bujur: string;
}

export default function ThemeModal(props: ThemeModalProps) {
  const {
    showModal,
    setShowModal,
    tanggal,
    jam,
    magnitude,
    kedalaman,
    lintang,
    bujur,
  } = props;

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 px-4 py-2">
                  <h3 className="text-2xl font-semibold">
                    Informasi Gempabumi Dirasakan
                  </h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <h6 className="my-4 text-lg leading-relaxed text-slate-500">
                    Parameter Gempabumi
                  </h6>
                  <div className="">
                    <p>
                      {tanggal},&nbsp;{jam}
                    </p>
                    <p>{magnitude}</p>
                    <p>{kedalaman}</p>
                    <p>{`${lintang} ${bujur}`}</p>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
