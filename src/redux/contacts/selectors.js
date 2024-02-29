import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../../redux/filter/selectors';

// Функція selectLoading вибирає прапор isLoading зі стану contacts.
export const selectLoading = state => state.contacts.isLoading;

// Функція selectError приймає об'єкт стану state і повертає значення якості error з об'єкта стану contacts.
export const selectError = state => state.contacts.error;

// Функція selectContacts приймає об'єкт стану state і повертає значення властивості items з об'єкта стану contacts.
export const selectContacts = state => state.contacts.items; // Возвращает список контактов из состояния

// Функція selectVisibleContacts використовує функцію createSelector для створення селектора, який залежить від двох інших селекторів: selectContacts і selectFilter.
// Селектор selectVisibleContacts повертає відфільтрований масив контактів, де ім'я контакту contact.name містить рядок фільтра filter.
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    // Фильтрует контакты, чтобы возвращать только те, чьи имена содержат подстроку фильтра (в нижнем регистре)
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
