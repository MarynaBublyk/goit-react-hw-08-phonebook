import { Wrapper, Title } from './Home.styled';

// Компонент Home відповідає за відображення домашньої сторінки
export default function Home() {
  console.log('home');
  return (
    <Wrapper>
      <Title>Welcome to Phonebook!</Title>{' '}
      {/* Відображення заголовка на домашній сторінці */}
    </Wrapper>
  );
}
