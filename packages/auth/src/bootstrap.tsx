import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import {
  NavigationSync,
  type NavigationLocation,
} from "./routing/NavigationSync";

type MountOptions = {
  onNavigate?: (location: NavigationLocation) => void;
  initialPath?: string;
};

export const mount = (
  el: HTMLElement,
  { onNavigate, initialPath = "/" }: MountOptions = {},
) => {
  const root = createRoot(el);

  let onParentNavigate: (location: NavigationLocation) => void = () => {};

  const registerParentNavigate = (
    callback: (location: NavigationLocation) => void,
  ) => {
    onParentNavigate = callback;
  };

  root.render(
    <MemoryRouter initialEntries={[initialPath]}>
      <NavigationSync
        onNavigate={onNavigate}
        registerParentNavigate={registerParentNavigate}
      />

      <App />
    </MemoryRouter>,
  );

  return {
    onParentNavigate(location: NavigationLocation) {
      onParentNavigate(location);
    },

    unmount() {
      root.unmount();
    },
  };
};
