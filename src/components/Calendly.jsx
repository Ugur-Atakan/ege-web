import { PopupButton } from "react-calendly";
import { useTranslation } from "react-i18next";
export default function Calendly() {
    const {t} = useTranslation();
    return (
        <div className="App">
        <PopupButton
          url="https://calendly.com/bceylan/30min"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
          text={t('free_tax_consultant_calendly_text')}
          className="text-white rounded-md p-3 bg-blue-600 hover:bg-white hover:text-blue-600 border border-blue-600x   x"
        />
      </div>
    )
}
