import { Dropdown } from "flowbite";
const dropdownInstance = ref(null);

export function useDropdown() {
  const initDropdown = (targetElId, triggerElId) => {
    const $targetEl = document.getElementById(targetElId);
    const $triggerEl = document.getElementById(triggerElId);

    const options = {
      placement: "bottom",
      triggerType: "click",
      offsetSkidding: 0,
      offsetDistance: 10,
      delay: 300,
      ignoreClickOutsideClass: false,
      onHide: () => {},
      onShow: () => {},
      onToggle: () => {},
    };

    const instanceOptions = {
      id: targetElId,
      override: true,
    };

    const dropdown = new Dropdown($targetEl, $triggerEl, options, instanceOptions);

    dropdownInstance.value = dropdown;
  };

  return {
    dropdownInstance,
    initDropdown,
  };
}
