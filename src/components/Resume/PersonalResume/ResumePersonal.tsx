import "src/styles/ResumePersonal.scss";
import Icon from "@mdi/react";
import {
  mdiEmailOutline,
  mdiMapMarkerOutline,
  mdiPhoneOutline,
  mdiWeb,
} from "@mdi/js";
import { selectLinks, selectPersonalDetails } from "src/app/personal.slice";
import { useAppSelector } from "src/app/hooks";

const ResumePersonal = () => {
  const { address, email, name, phone, specialty } = useAppSelector(
    selectPersonalDetails
  );
  const links = useAppSelector(selectLinks);
  return (
    <section className="personal-section">
      <div className="personal-info">
        <h1 className="name">{name}</h1>
        <h2 className="specialty">{specialty}</h2>
      </div>

      <div className="contact-info">
        {address && (
          <span>
            <Icon path={mdiMapMarkerOutline} size={1} />
            {address}
          </span>
        )}
        {email && (
          <span>
            <Icon path={mdiEmailOutline} size={1} />
            {email}
          </span>
        )}
        {phone && (
          <span>
            <Icon path={mdiPhoneOutline} size={1} />
            {phone}
          </span>
        )}
        {links.map((link, index) => (
          <span key={index}>
            <Icon path={mdiWeb} size={1} />
            {link}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ResumePersonal;
