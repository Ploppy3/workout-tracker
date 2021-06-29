import { useRef, useState } from "react";

export const useModal = () => {
  const resolve = useRef(null);
  const [isOpened, setIsOpened] = useState(false);
  const open = () => {
    setIsOpened(true);
    const promise = new Promise((_resolve) => (resolve.current = _resolve));
    promise.then(() => setIsOpened(false));
    return promise;
  };
  const close = (data = null) => {
    resolve.current(data);
  };
  return { isOpened, open, close };
};
