This is a great idea. Separating **Loops** (Repetition) from **Conditionals** (Logic) makes it much easier for students to digest. Loops are about "doing things repeatedly," while Conditionals are about "making decisions."

Here is the revised structure, split into **Chapter 2 (Loops)** and **Chapter 3 (Conditionals)**, with detailed explanations in English and Markdown.

---

# 📘 PictoBlox E-Module: Chapter 2

## 🔄 Title: The Power of Repetition (Loops)

**Goal:** Master animations and efficient code.
**Duration:** 1 Week

---

## 🎯 Learning Objectives

By the end of this chapter, you will be able to:

1. Understand why programmers use loops to save time.
2. Differentiate between **Finite Loops** (Repeat X times) and **Infinite Loops** (Forever).
3. Create smooth **Animations** using costume switching.
4. **Mini Project:** Create a "Walking & Talking" character animation.

---

## 📚 Topic 1: What is a Loop?

Imagine if you wanted a character to walk 100 steps.

* **Without a Loop:** You would have to drag the `Move 10 steps` block 10 times. (Messy!)
* **With a Loop:** You use **one** `Repeat (10)` block and put `Move 10 steps` inside it. (Clean!)

### The 3 Kings of Loops (Control Category)

| Block | Name | Function | Real Life Example |
| --- | --- | --- | --- |
| 🟧 | `forever` | Runs the code inside endlessly until you press Stop. | The rotation of the Earth (never stops). |
| 🟧 | `repeat (10)` | Runs the code a specific number of times. | Doing 10 push-ups. |
| 🟧 | `repeat until <>` | Runs *until* a specific condition happens. | Boiling water *until* it bubbles. |

---

## 🏃 Topic 2: Animation & Costumes

*Loops are the secret to making things look alive.*

### How Animation Works

Animation is just switching pictures (Costumes) very fast.

1. Go to the **Costumes** tab to see your sprite's poses.
2. Use the `Next Costume` block (Looks category).
3. **Crucial Tip:** Computers are too fast! If you just use `Forever` + `Next Costume`, the sprite will look like it's having a seizure. You **must** add a `Wait (0.1) seconds` block.

**The Perfect Animation Script:**

```
When [Green Flag] clicked
Forever:
   Next Costume
   Move (10) steps
   If on edge, bounce
   Wait (0.1) seconds

```

---

## 🧠 Deep Dive: The Coordinate System (Movement)

*To move effectively inside loops, we must understand the map.*

* **X-Axis (Horizontal):** -240 (Left) to 240 (Right).
* **Y-Axis (Vertical):** -180 (Bottom) to 180 (Top).
* **Center:** (0, 0).

**Challenge:** Can you use a `Repeat` loop to make your sprite walk in a perfect Square shape?
*(Hint: Move, Turn 90 degrees, Repeat 4 times)*.

---

# 📘 PictoBlox E-Module: Chapter 3

## 🚦 Title: Making Decisions (Conditionals & Sensing)

**Goal:** Giving your game a "Brain" to interact with players.
**Duration:** 1-2 Weeks

---

## 🎯 Learning Objectives

By the end of this chapter, you will be able to:

1. Understand **Boolean Logic** (True or False).
2. Use **Sensing** blocks to detect mouse, colors, and keys.
3. Use `If-Then` blocks to control game rules.
4. **Final Project:** Build the "Catch the Fruit" Game.

---

## 🤖 Topic 1: Boolean Logic (True or False?)

Computers make decisions based on questions that only have two answers: **Yes (True)** or **No (False)**. In PictoBlox, these are the **Hexagonal (Diamond-shaped)** blocks.

### The Logic Blocks (Operators - Green)

* **`>` (Greater Than):** Is Score > 10?
* **`<` (Less Than):** Is Timer < 0?
* **`=` (Equal To):** Does Lives = 0?

---

## 🖱️ Topic 2: Sensing (The Inputs)

*Sensing blocks (Light Blue) answer the question "Is this happening?"*

### Common Sensing Scenarios

| Scenario | Block to use | Example Use Case |
| --- | --- | --- |
| **Collision** | `touching [mouse-pointer]?` or `touching [Sprite1]?` | Catching a coin; Enemy hitting player. |
| **Keyboard** | `key [space] pressed?` | Jumping; Shooting. |
| **Environment** | `touching color [ ]?` | Checking if the player fell into lava (red color). |

---

## 🧠 Topic 3: The "If-Then" Structure

*This is the brain of your code.*

### Structure A: Simple Decision

**"If it is raining, take an umbrella."**

* `If <key [space] pressed?> then`:
* `Change y by (10)` (Jump)



### Structure B: Split Decision (If-Else)

**"If it is raining, take an umbrella. ELSE (if not), wear sunglasses."**

* `If <score > 50> then`:
* `Say [You Win!]`


* `Else`:
* `Say [Keep Trying!]`



---

## 🛠️ Project: Catch the Fruit (Logic Edition)

*Now we combine Loop (Chapter 2) and Logic (Chapter 3).*

**The Game Loop (Forever):**
We need the game to check these rules **constantly**. That's why we put `If-Then` blocks **inside** a `Forever` loop.

**Step-by-Step Logic:**

1. **Gravity:** `Change y by -5` (Always happening).
2. **Catching:** `If <touching [Bowl]?> then` -> `Change Score`, `Reset Position`.
3. **Game Over:** `If <y position < -170>` -> `Change Lives`, `Reset Position`.

---

## 🔧 Troubleshooting Guide (Logic Errors)

**Problem:** "I'm pressing space, but the character only jumps sometimes."

* **Cause:** You might have put the `If key pressed` block **outside** the `Forever` loop.
* **Fix:** The computer only checked the key ONCE at the start. Move the `If` block **inside** the `Forever` loop so it checks continuously.

**Problem:** "The game doesn't stop when lives hit 0."

* **Cause:** You are using `If <Lives = 0>`. Sometimes, if lives go from 1 to -1 (due to a bug), it skips 0.
* **Fix:** Use `If <Lives < 1>` to be safer.