import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export type NavigationLocation = {
  pathname: string;
};

type NavigationSyncProps = {
  onNavigate?: (location: NavigationLocation) => void;
  registerParentNavigate: (
    callback: (location: NavigationLocation) => void,
  ) => void;
};

export function NavigationSync({
  onNavigate,
  registerParentNavigate,
}: NavigationSyncProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const locationRef = useRef(location.pathname);

  useEffect(() => {
    locationRef.current = location.pathname;
  }, [location.pathname]);

  // MFE -> Shell
  useEffect(() => {
    onNavigate?.({
      pathname: location.pathname,
    });
  }, [location.pathname, onNavigate]);

  // Shell -> MFE
  useEffect(() => {
    registerParentNavigate(({ pathname }) => {
      if (locationRef.current !== pathname) {
        navigate(pathname);
      }
    });
  }, [navigate, registerParentNavigate]);

  return null;
}
