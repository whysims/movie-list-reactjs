import { useEffect, useState } from "react"
import { withRouter } from "react-router";

const ScrollToTop = (props) => {
    const [oldProps, setOldProps] = useState(props);

    useEffect(() => {
        if (props) {
            setOldProps(props);
        if (props.location !== oldProps.location) {
            window.scrollTo(0, 0)
          }
        }
    },[props, oldProps]);

    return props.children;
}
  
export default withRouter(ScrollToTop)