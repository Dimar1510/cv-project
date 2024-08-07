import Icon from "@mdi/react";
import { mdilDelete, mdilPrinter } from "@mdi/light-js";
import { useDispatch } from "react-redux";
import { mdiClose, mdiExport, mdiFileAccountOutline, mdiImport } from "@mdi/js";
import { IResume } from "src/app/types";
import { useAppSelector } from "src/app/hooks";
import { selectAllPersonal } from "src/app/personal.slice";
import { selectEducation } from "src/app/education.slice";
import { selectProfession } from "src/app/profession.slice";
import { useEffect, useRef, useState } from "react";
import { importAll } from "src/app/useActions";
import cryptoJS from "crypto-js";
import "src/styles/dialog.scss";

const ImportExport = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const copyBtnRef = useRef<HTMLButtonElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [resume, setResume] = useState<string>("");
  const [error, setError] = useState("");
  const [showImport, setShowImport] = useState(false);
  const dispatch = useDispatch();
  const personal = useAppSelector(selectAllPersonal);
  const education = useAppSelector(selectEducation);
  const profession = useAppSelector(selectProfession);

  const SECRET_KEY = import.meta.env.VITE_SECRET_KEY || "secret_key";

  useEffect(() => {
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (dialogRef.current) {
        const dialogDimensions = dialogRef.current.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          dialogRef.current.close();
        }
      }
    };
    dialogRef.current?.addEventListener("click", closeOnOutsideClick);
    return () =>
      dialogRef.current?.removeEventListener("click", closeOnOutsideClick);
  });

  const handleExport = () => {
    setError("");
    setShowImport(false);
    const myResume: IResume = { personal, education, profession };
    const cipherResume = cryptoJS.AES.encrypt(
      JSON.stringify(myResume),
      SECRET_KEY
    );
    setResume(cipherResume.toString());
    dialogRef.current?.showModal();
  };

  const handleImport = async () => {
    if (resume.trim() === "") return;
    try {
      const bytes = cryptoJS.AES.decrypt(resume.trim(), SECRET_KEY);
      const newResume: IResume = JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
      dispatch(importAll(newResume));
      dialogRef.current?.close();
    } catch (error) {
      setError(
        "Something is wrong with your data, please check that you correctly copied the export string"
      );
    }
  };

  const handleShowImport = () => {
    setError("");
    setShowImport(true);
    setResume("");
    dialogRef.current?.showModal();
    textareaRef.current?.focus();
  };

  const handleCopy = async () => {
    if (textareaRef.current)
      navigator.clipboard.writeText(textareaRef.current.value);
    if (copyBtnRef.current) {
      copyBtnRef.current.textContent = "✔ Copied!";
      await timeout(2000);
      copyBtnRef.current.textContent = "Copy";
    }
  };

  const timeout = (ms: number) => {
    return new Promise((res) => setTimeout(res, ms));
  };

  return (
    <>
      <div className="util-buttons">
        <button className="import" onClick={handleShowImport}>
          <Icon path={mdiImport} size={1} />
          Import
        </button>
        <button className="export" onClick={handleExport}>
          <Icon path={mdiExport} size={1} />
          Export
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
          {showImport ? "Import resume" : "Export resume"}
        </h2>

        <p className="subtitle">
          {showImport ? (
            "Paste the code that was given to you on resume export."
          ) : (
            <>
              This is your resume code, copy it and save on your device.
              <br />
              Or send it to other people for them to import it.
            </>
          )}
        </p>
        <textarea
          ref={textareaRef}
          className="field"
          onChange={(e) => {
            setResume(e.target.value);
            setError("");
          }}
          value={resume}
          readOnly={!showImport}
        />
        <p className="error">{error}</p>
        <div className="util-buttons">
          {showImport ? (
            <button onClick={handleImport}>Import</button>
          ) : (
            <button ref={copyBtnRef} onClick={handleCopy}>
              Copy
            </button>
          )}
          <button onClick={() => dialogRef.current?.close()}>Back</button>
        </div>
      </dialog>
    </>
  );
};

export default ImportExport;
