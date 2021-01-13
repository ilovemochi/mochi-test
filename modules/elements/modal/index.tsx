import { useI18n } from '@hooks';
import { mergeRight } from 'ramda';
import { FC, useEffect, useState } from 'react';
import ReactModal from 'react-modal';

import {
  CloseButtonWrapper,
  CloseIcon,
  defaultModalStyles,
  ModalContent,
  ModalWrapper,
} from './modal.styles';
import { ModalProps } from './modal.types';

ReactModal.setAppElement('#__next');

const Modal: FC<ModalProps> = ({ style = {}, children, isOpen, onClose, ...otherProps }) => {
  const { t } = useI18n();
  const [open, setOpen] = useState(isOpen);
  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <ModalWrapper>
      <ReactModal
        isOpen={open}
        style={mergeRight(defaultModalStyles as Object, style)}
        shouldCloseOnOverlayClick={!!onClose}
        onRequestClose={handleClose}
        aria-modal="true"
        {...otherProps}
      >
        <ModalContent>
          {!!onClose && (
            <CloseButtonWrapper onClick={handleClose} role="button">
              <CloseIcon role="img" aria-label={t('common.ariaLabel.close')} />
            </CloseButtonWrapper>
          )}
          {children}
        </ModalContent>
      </ReactModal>
    </ModalWrapper>
  );
};

export default Modal;

export * from './modal.types';
