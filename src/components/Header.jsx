import Image from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={Image} alt="" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
