import { useEffect, useRef } from 'react';
const Modal = ({ className, children }: any) => {
  const ref: any = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.showModal();
    }
  }, []);

  return (
    <div
      ref={ref}
      className={'w-screen flex justify-center items-center m-0 ' + (className || '')}
      style={{ backdropFilter: 'blur(4px)', background: 'rgb(0, 0, 0, 0.2)', zIndex: 99999 }}
    >
      {children}
    </div>
  );
};

export default Modal;
