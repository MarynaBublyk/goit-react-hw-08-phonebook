import { useState } from 'react';
import { nanoid } from 'nanoid';
// import { Filter } from 'components/Filter/Filter';
import { Form, Label, Button, Input } from './ContactForm.styled';
import { ReactComponent as AddIcon } from '../icons/add.svg';

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContacts } from '../../redux/contacts/operations';
import { Form, Label, Input, Button } from './ContactForm.styled';

// Генерація унікальних ідентифікаторів для полів форми
const nameInputId = nanoid();
const numberInputId = nanoid();

// Компонент ContactForm відповідає за форму додавання нового контакту
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  // Обрабка відправки форми
  const handleSubmit = event => {
    event.preventDefault();

    // Перевіряємо, чи контакт з таким іменем вже існує в списку контактів
    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    // Перевірка чи існує контакт з таким іменем. Якщо контакт вже існує, з'являється попередження.
    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    //Виклик функції onSubmit із батьківського компонента з передачею об'єкта контакта
    dispatch(addContacts({ name, number }));
    setName('');
    setNumber('');
  };

  // Обробка зміни значень полів форми
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <Input
          type="text"
          name="name"
          placeholder="Enter the name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я\s'\-]+$"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
        />
      </Label>

      <Label htmlFor={numberInputId}>
        Number
        <Input
          type="tel"
          name="number"
          placeholder="Enter your phone number"
          value={number}
          onChange={handleChange}
          pattern="\+\d{12}"
          minlength="13"
          maxlength="13"
          title="The phone number must consist of 12 digits and start with +"
          required
        />
      </Label>

      <Button type="submit">
        <AddIcon fill="#cc0000" width="25" height="25" />
        Add contact{' '}
      </Button>
    </Form>
  );
};
