// Section 1: Primitive and Union Types
let userName: string = "John";
let highScore: number = 100;
let isLoggedIn: boolean = false;
let countdown: number | null = null;

// Section 2: Structured Data (Arrays and Objects)
let gameTags: string[] = ["action", "adventure", "multiplayer"];
type SCORE = { points: number; isFinal: boolean };
let currentScore: SCORE = { points: 50, isFinal: false };
let userSetting: string | undefined = undefined;

// Section 3: Functions
const logError = (message: string): void => {
  console.error("Error:", message);
};
const calculatePercentage = (score: number, score2: number): number => {
  return (score / score2) * 100;
};

const markeplier = calculatePercentage(50, 200);
console.log(`Calculated Percentage: ${markeplier}%`);
