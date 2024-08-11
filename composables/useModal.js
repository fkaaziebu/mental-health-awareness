import { Modal } from "flowbite";
const modalInstance = ref(null);

export function useModal() {
  const initModal = (targetElId) => {
    const $targetEl = document.getElementById(targetElId);

    const options = {
      placement: "bottom-right",
      closable: true,
      onHide: () => {},
      onShow: () => {},
      onToggle: () => {},
    };

    const instanceOptions = {
      id: targetElId,
      override: true,
    };

    const modal = new Modal(
      $targetEl,
      options,
      instanceOptions,
    );

    modalInstance.value = modal;
  };

  return {
    modalInstance,
    initModal,
  };
}
