import React from "react";
import styles from "./PageContainer.module.css";

const PageContainer = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.pageContainer}>
      {props.children}
    </div>
  );
});

PageContainer.displayName = "PageContainer";

export default PageContainer;
