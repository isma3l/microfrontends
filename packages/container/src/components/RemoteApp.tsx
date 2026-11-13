import { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { mountRemote } from "../federation/remoteLoader";

type RemoteAppProps = {
  remoteName: string;
  mountPath: string;
};

type RemoteInstance = {
  onParentNavigate: (loc: { pathname: string }) => void;
  unmount: () => void;
};

export default function RemoteApp({ remoteName, mountPath }: RemoteAppProps) {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const remoteInstanceRef = useRef<RemoteInstance | null>(null);

  useEffect(() => {
    let unmounted = false;

    mountRemote(remoteName).then((mount) => {
      if (unmounted || !ref.current) return;

      const relativePath = location.pathname.replace(mountPath, "") || "/";

      const instance = mount(ref.current, {
        initialPath: relativePath,
        onNavigate: ({ pathname }: { pathname: string }) => {
          const targetPath =
            pathname === "/" ? mountPath : `${mountPath}${pathname}`;

          if (location.pathname !== targetPath) {
            navigate(targetPath);
          }
        },
      });

      remoteInstanceRef.current = instance;
    });

    return () => {
      unmounted = true;
      remoteInstanceRef.current?.unmount();
      remoteInstanceRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remoteName, mountPath]);

  useEffect(() => {
    const relativePath = location.pathname.replace(mountPath, "") || "/";

    remoteInstanceRef.current?.onParentNavigate({
      pathname: relativePath,
    });
  }, [location.pathname, mountPath]);

  return <div ref={ref} />;
}
