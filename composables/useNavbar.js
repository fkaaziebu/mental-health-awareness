import { Collapse } from "flowbite";
const navbarInstance = ref(null);

export function useNavbar() {
  const initNavbar = (targetElId, triggerElId) => {
    const $targetEl = document.getElementById(targetElId);
    const $triggerEl = document.getElementById(triggerElId);

    const options = {
      onCollapse: () => {},
      onExpand: () => {},
      onToggle: () => {},
    };

    const instanceOptions = {
      id: targetElId,
      override: true,
    };

    const collapse = new Collapse(
      $targetEl,
      $triggerEl,
      options,
      instanceOptions,
    );

    navbarInstance.value = collapse;
  };

  return {
    navbarInstance,
    initNavbar,
  };
}
