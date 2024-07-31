import Icon from "@mdi/react";
import { mdilDelete, mdilPrinter } from "@mdi/light-js";
import { useDispatch } from "react-redux";
import { clearAll, revertAll } from "src/app/useActions";
import { mdiFileAccountOutline } from "@mdi/js";

const SaveResume = ({
  handlePrint,
}: {
  handlePrint: (
    event?: unknown,
    content?: () => React.ReactInstance | null
  ) => void;
}) => {
  const dispatch = useDispatch();
  return (
    <div className="form-section utils">
      <div className="util-buttons">
        <button className="print" onClick={handlePrint}>
          <Icon path={mdilPrinter} size={1} />
          Print
        </button>
        <button className="default" onClick={() => dispatch(revertAll())}>
          <Icon path={mdiFileAccountOutline} size={1} />
          Example
        </button>
        <button className="delete" onClick={() => dispatch(clearAll())}>
          <Icon path={mdilDelete} size={1} />
          Clear
        </button>
      </div>
    </div>
  );
};

export default SaveResume;
