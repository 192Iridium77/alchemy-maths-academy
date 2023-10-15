import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { MultiplicationQuestion, Player } from "../types";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const randomInt = (from: number, to: number) => {
  return Math.floor(from + Math.random() * to);
};

interface QuestionField extends MultiplicationQuestion{
  text: string;
}

/**
 * question generation and answer checking will need to be in the backend (security)
 * but for the sake of creating a prototype it should be fine here.
 */
export default function Multiplication({ players }: { players?: Player[] }) {
  // players need an id, move question field deeper
  const [player, setPlayer] = useState<QuestionField[]>();
  const [will, setWill] = useState<QuestionField[]>();
  const [eleanor, setEleanor] = useState<QuestionField[]>();
  const [mordred, setMordred] = useState<QuestionField[]>();

  const generateQuestion = (): QuestionField => {
    const a = randomInt(1, 10);
    const b = randomInt(2, 10);
    return {
      text: `What is ${a} x ${b}?`,
      value1: a,
      value2: b
    };
  };

  const generateQuestionList = () => {
    let result: QuestionField[] = [];
    for (let i = 0; i < 10; i++) {
      result.push(generateQuestion());
    }
    return result;
  };

  const checkMultiplicationAnswer = (a:number, b: number, value: number) => {
    return a *  b === value
  }

  const handleAnswerQuestion(question: QuestionField, value: string) => {
    if (checkMultiplicationAnswer(question.value1, question.value2, value))
  }

  const QuestionForm = ({ player }: { player: Player }) => {
    if (!player) return <div>No player found.</div>;
    // fetch the player's quiz
    return (
      <>
        {player.quiz.map((question) => {
          return (
            <>
              <div>{question.text}</div>
              <input onChange={(event) => handleAnswerQuestion(question.id, value: event.target.value, player.id)}></input>
            </>
          );
        })}
      </>
    );
  };

  const initialiseGame = () => {
    // loadPlayers();
    setPlayer(generateQuestionList());
    setWill(generateQuestionList());
    setEleanor(generateQuestionList());
    setMordred(generateQuestionList());
  };

  useEffect(() => {
    initialiseGame();
  }, [initialiseGame]);

  return (
    <div className="flex flex-col w-full">
      <DrawerHeader />
      <div className="container">
        <div style={{ display: "flex", gap: 40, width: "100%" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <h1>Player</h1>
            <QuestionForm player={player}></QuestionForm>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <h1>Will</h1>
            <QuestionForm player={will}></QuestionForm>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <h1>Eleanor</h1>
            <QuestionForm player={eleanor}></QuestionForm>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <h1>Mordred</h1>
            <QuestionForm player={mordred}></QuestionForm>
          </div>
        </div>
      </div>
    </div>
  );
}
