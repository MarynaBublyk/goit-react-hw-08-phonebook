import { Wrapper, Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { changeFilter } from '../../redux/filter/filterSlice';

// Компонент фільтрації контактів відповідає за фільтрацію списку контактів за ім'ям
export const Filter = () => {
  const value = useSelector(selectFilter); // Отримуємо поточне значення фільтра зі стану
  const dispatch = useDispatch(); // Отримуємо функцію dispatch з Redux для зміни фільтра

  // Обрабник змін значень фільтрів
  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue)); // Викликаємо дію changeFilter, яка змінює значення фільтра в Redux store
  };

  return (
    <Wrapper>
      <Label>Find contacts by name</Label>
      <Input type="text" value={value} onChange={onChange} />
    </Wrapper>
  );
};
