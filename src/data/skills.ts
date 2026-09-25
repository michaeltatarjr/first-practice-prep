import type { Skill } from "./types";

export const WARM_UP_STEPS = [
  "10 jumping jacks",
  "10 high knees each leg",
  "5 slow arm circles forward and 5 backward",
  "20 fingertip ball taps (pass the ball hand to hand in front of your face)",
];

export const CUE_CARDS: { title: string; lines: string[] }[] = [
  { title: "BEEF", lines: ["Balance", "Eyes on the rim", "Elbow under the ball", "Follow through"] },
  { title: "Layup feet", lines: ["Right side: left foot, jump, right hand", "Left side: right foot, jump, left hand", "Aim: top corner of the square"] },
  { title: "Defense", lines: ["Low stance, hands active", "Slide, don't cross feet", "Stay between player and basket", "Don't reach"] },
];

export const SKILLS: Skill[] = [
  {
    title: "Dribbling",
    summary: "The skill coaches notice first. Control the ball without looking at it.",
    steps: [
      "Stand in an athletic stance: knees bent, back straight, head up.",
      "Push the ball down with your fingertips and finger pads, not your palm.",
      "Keep the ball at waist height or lower. Lower is harder to steal.",
      "Keep your eyes up so you can see teammates and defenders.",
      "Use your off arm as a shield between the defender and the ball.",
      "Crossover: bounce the ball low and quick across your body from one hand to the other.",
      "Speed dribble: push the ball out in front of you at waist height and run to it.",
    ],
    mistakes: "Slapping the ball with the palm, staring at the ball, dribbling too high.",
  },
  {
    title: "Layups",
    summary: "The easiest two points in basketball, and the most common shot at this age.",
    steps: [
      "Right side: last step with the LEFT foot, jump, shoot with the RIGHT hand, lift the right knee.",
      "Left side: last step with the RIGHT foot, jump, shoot with the LEFT hand, lift the left knee.",
      "Think \"right-left-up\" on the right side and \"left-right-up\" on the left side.",
      "Jump up toward the rim, not forward into the baseline.",
      "Aim for the top corner of the painted square on the backboard, closest to you.",
      "Protect the ball with both hands until the moment you shoot.",
      "Learn it walking first, then jogging, then at full speed.",
    ],
    mistakes: "Jumping off the wrong foot, shooting with the wrong hand on the left side, jumping too far.",
  },
  {
    title: "Shooting with BEEF",
    summary: "Good form from close range beats bad form from far away. Move back only when you are making shots.",
    steps: [
      "B is for Balance: feet shoulder-width apart, shooting-side foot slightly forward, knees bent.",
      "E is for Eyes: lock onto the front of the rim before and during the shot.",
      "E is for Elbow: shooting elbow under the ball, pointing at the rim, forming an L shape.",
      "F is for Follow-through: snap the wrist and hold it, like reaching into a cookie jar on a high shelf.",
      "The off hand sits on the side of the ball as a guide. It does not push.",
      "Power comes from the legs. Bend and rise in one smooth motion.",
    ],
    mistakes: "Elbow flaring out, pushing with both hands, shooting flat instead of with arc.",
  },
  {
    title: "Free throws",
    summary: "A free shot after a foul. The same routine every time builds confidence.",
    steps: [
      "Line up your shooting foot with the small nail or dot in the middle of the line.",
      "Pick a routine, for example: 2 dribbles, deep breath, BEEF, shoot.",
      "Use your legs. Most short free throws are from straight legs.",
      "Do not cross the line until the ball hits the rim.",
    ],
    mistakes: "Changing the routine, rushing, stepping over the line.",
  },
  {
    title: "Passing and catching",
    summary: "Good teams pass. Coaches love a kid who passes to the open teammate.",
    steps: [
      "Chest pass: ball at chest, step toward the target, push out, finish with thumbs down.",
      "Bounce pass: bounce it about two-thirds of the way so it reaches the chest-to-waist area.",
      "Overhead pass: ball above the forehead, step and snap forward. Good for passing over a defender.",
      "Catching: show your hands as a target, step toward the ball, catch with two hands.",
      "After catching, land in triple threat.",
    ],
    mistakes: "Lazy passes that float, not stepping into the pass, waiting for the ball instead of meeting it.",
  },
  {
    title: "Footwork",
    summary: "Clean footwork prevents traveling calls and makes every other skill easier.",
    steps: [
      "Triple threat: after a catch, hold the ball at your hip, knees bent, ready to shoot, pass, or dribble.",
      "Jump stop: land on both feet at the same time. Now either foot can be your pivot foot.",
      "Pivot: keep the ball of your pivot foot on the floor and turn on it. The other foot can step anywhere.",
      "Once you pick a pivot foot, it cannot leave the floor until you pass, shoot, or start dribbling.",
    ],
    mistakes: "Shuffling the pivot foot, standing straight up after the catch.",
  },
  {
    title: "Defense",
    summary: "Effort on defense is the fastest way to earn playing time.",
    steps: [
      "Stance: feet wider than shoulders, knees bent, butt down, back straight, hands active.",
      "Slide your feet sideways. Do not cross them or bring them together.",
      "Stay between your player and the basket.",
      "Keep a one-arm distance from the ball handler.",
      "Do not reach for the ball. Move your feet instead.",
      "Talk: call \"ball!\" when guarding the ball, \"help!\" when you are ready to help.",
    ],
    mistakes: "Reaching (the number one foul at this age), standing straight up, watching only the ball.",
  },
  {
    title: "Boxing out and rebounding",
    summary: "Most missed shots go to whoever wants the ball more.",
    steps: [
      "When a shot goes up, yell \"shot!\" and find the player you are guarding.",
      "Turn and put your back into them, arms wide, knees bent.",
      "Hold them off for a second, then go get the ball with two hands.",
      "Chin the ball: hold it tight under your chin, elbows out.",
    ],
    mistakes: "Watching the ball in the air, trying to jump before making contact.",
  },
];
