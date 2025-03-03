import { useRegisterSW } from "virtual:pwa-register/react";
import { useCallback } from "react";
import { ReloadPromptContainer, Message, DateInfo } from "./reload-prompt.style";
import { Button, Flex } from "antd";
import { timeFormatter } from "@/utils/dates";

const buildDate = "__DATE__";
const reloadSW = "__RELOAD_SW__";

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW: (swUrl, r) => {
      console.log(`Service Worker registered at: ${swUrl}`);
      // @ts-expect-error just ignore
      if (reloadSW === "true" && r) {
        setInterval(() => {
          console.log("Checking for Service Worker update...");
          r.update();
        }, 2000);
      }
    },
    onRegisterError: error => {
      console.error("Service Worker registration error:", error);
    },
  });

  const closePrompt = useCallback(() => {
    setOfflineReady(false);
    setNeedRefresh(false);
  }, [setOfflineReady, setNeedRefresh]);

  return (
    <>
      {(offlineReady || needRefresh) && (
        <ReloadPromptContainer>
          <Flex gap="small" vertical>
            <Message>
              {offlineReady
                ? "App is ready to work offline."
                : "New content available! Click reload to update."}
              <DateInfo>{timeFormatter(buildDate)}</DateInfo>
            </Message>
            <Flex gap="small" justify="center">
              {needRefresh && (
                <Button type="primary" onClick={() => updateServiceWorker(true)}>
                  Reload
                </Button>
              )}
              <Button onClick={closePrompt}>Close</Button>
            </Flex>
          </Flex>
        </ReloadPromptContainer>
      )}
    </>
  );
}

export default ReloadPrompt;
