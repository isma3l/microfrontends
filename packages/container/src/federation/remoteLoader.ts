import {
  registerRemotes,
  loadRemote,
} from "@module-federation/enhanced/runtime";

type ManifestEntry = {
  name: string;
  entry: string;
};

type NavigationLocation = {
  pathname: string;
};

type MountFunction = (
  el: HTMLElement,
  options?: {
    initialPath?: string;
    onNavigate?: (location: NavigationLocation) => void;
  },
) => {
  onParentNavigate: (location: NavigationLocation) => void;
  unmount: () => void;
};

let initialized = false;

export async function loadManifestAndRegister(manifestUrl: string) {
  const response = await fetch(manifestUrl);

  if (!response.ok) {
    throw new Error(
      `No se pudo cargar el manifest: ${response.status} ${response.statusText}`,
    );
  }

  const manifest: ManifestEntry[] = await response.json();

  registerRemotes(
    manifest.map(({ name, entry }) => ({
      name,
      entry,
      type: "module" as const,
    })),
  );

  initialized = true;
}

export async function mountRemote(remoteName: string) {
  if (!initialized) {
    throw new Error("Manifest no cargado todavía");
  }

  const mod = await loadRemote<{ mount: MountFunction }>(
    `${remoteName}/bootstrap`,
  );

  if (!mod) {
    throw new Error(`No se pudo cargar el remote "${remoteName}"`);
  }

  return mod.mount;
}
