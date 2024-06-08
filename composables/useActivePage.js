const activePage = ref('')

export function useActivePage() {
    const updateActivePage = (activePageString) => {
        activePage.value = activePageString
    }

    return {
        activePage,
        updateActivePage
    }
}