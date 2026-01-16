import { useState } from "react";

function MagicBall() {
  const answers: string[] = [
    "Да",
    "Нет",
    "Возможно",
    "Спроси позже",
    "Скорее всего",
    "Маловероятно"
  ];

  const [answer, setAnswer] = useState<string>("");

  function getPrediction() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  }

  return (
    <div className="card">
      <p>{answer || "Нажмите кнопку, чтобы получить предсказание"}</p>

      <button onClick={getPrediction}>
        Получить предсказание
      </button>
    </div>
  );
}

export default MagicBall;
