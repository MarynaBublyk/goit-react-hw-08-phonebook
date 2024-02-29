// Функція Вибирає значення isLoggedIn зі стану auth
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

// Функція selectIsLoading Вибирає значення isLoading зі стану auth
export const selectIsLoading = state => state.auth.isLoading;

// Функція selectError Вибирає значення error зі стану auth
export const selectError = state => state.auth.error;

// Вибирає значення user зі стану auth
export const selectUser = state => state.auth.user;

// Вибирає значення isRefreshing зі стану auth
export const selectIsRefreshing = state => state.auth.isRefreshing;
