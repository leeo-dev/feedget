type ButtonProps = {
  text: string;
};
function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}

function App() {
  return (
    <>
      <Button text="Comprar" />
      <Button text="Enviar" />
    </>
  );
}

export default App;
