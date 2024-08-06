import Icon from "@mdi/react";
import { mdilDelete, mdilPrinter } from "@mdi/light-js";
import { useDispatch } from "react-redux";
import { clearAll, revertAll } from "src/app/useActions";
import { mdiClose, mdiFileAccountOutline } from "@mdi/js";
import { useRef, useState } from "react";

const UtilitySection = ({
  handlePrint,
}: {
  handlePrint: (
    event?: unknown,
    content?: () => React.ReactInstance | null
  ) => void;
}) => {
  const [clearMode, setClearMode] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dispatch = useDispatch();
  return (
    <>
      <div className="util-buttons">
        <button className="print" onClick={handlePrint}>
          <Icon path={mdilPrinter} size={1} />
          Print
        </button>
        <button
          className="default"
          onClick={() => {
            setClearMode(false);
            dialogRef.current?.showModal();
          }}
        >
          <Icon path={mdiFileAccountOutline} size={1} />
          Example
        </button>
        <button
          className="delete"
          onClick={() => {
            setClearMode(true);
            dialogRef.current?.showModal();
          }}
        >
          <Icon path={mdilDelete} size={1} />
          Clear
        </button>
      </div>

      <dialog ref={dialogRef} className="dialog">
        <button
          onClick={() => dialogRef.current?.close()}
          className="close-button"
        >
          <Icon path={mdiClose} size={1} />
        </button>
        <h2 className="header">
          {clearMode ? "Clear resume" : "Load example"}
        </h2>

        <p className="subtitle">
          {clearMode ? (
            "Are you sure you want to delete your resume?"
          ) : (
            <>
              Are you sure you want to load the default resume? <br /> Your
              current one will be deleted
            </>
          )}
        </p>

        <div className="util-buttons">
          {clearMode ? (
            <button
              onClick={() => {
                dispatch(clearAll());
                dialogRef.current?.close();
              }}
            >
              Clear
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(revertAll());
                dialogRef.current?.close();
              }}
            >
              Load default
            </button>
          )}
          <button onClick={() => dialogRef.current?.close()}>Back</button>
        </div>
      </dialog>
    </>
  );
};

export default UtilitySection;
