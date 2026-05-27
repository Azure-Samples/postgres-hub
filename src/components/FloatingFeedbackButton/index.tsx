import React, { useState } from "react";
import { Button } from "@fluentui/react-components";
import NewsletterDialog from "@site/src/theme/NavbarItem/NewsletterDialog";
import styles from "./styles.module.css";

export default function FloatingFeedbackButton(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        appearance="secondary"
        size="large"
        className={styles.floatingButton}
        onClick={() => window.open("https://github.com/Azure-Samples/postgres-hub/discussions", "_blank")}
      >
        Developer Forum
      </Button>
      <NewsletterDialog open={open} setOpen={setOpen} />
    </>
  );
}
