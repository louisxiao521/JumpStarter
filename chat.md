# AI Interaction Overview

| AI Tool            | Role / Purpose                                      |
|--------------------|-----------------------------------------------------|
| **Gemini**         | **Color Palette & Visual Design Ideas**             |
| **Grok**           | **Creative Animation Ideas**                        |
| **Claude 3.5 Sonnet** | **Coding writing (CSS, HTML, JS)**                |
| **Grok**           | **Debug and optimisation of codes**

---

# Prompting Details

#### **Prompt 1**  
**Prompt:**  
> “Create a webpage for a job simulation app for university students, called CareerVerse; I want a front-end webpage design of it, it should only consist of html, css and js frameworks. 
Please show the designs as the following: 
On the top (the elements should be arranged from left to right): logo of career verse, search bar, notification button (with logo), message button (with logo), username & status 
In the middle: 
a box showing 3 of the skill-based badges earned (e.g. pitch delivery, strategic communication, data interpretation), daily streaks, career path; there should also be a text above stating “Welcome back, (name of participant)!”
profile summary: a picture of the user, name of user, name of university, university major, ID, selected career path
At the bottom: 3 boxes of active simulations and assignment list 
Active simulations: Include picture, name of simulation course, name of academic course related to the simulation course, due date, progress bar, a continue button (to continue the simulation)
Assignment list: Include upcoming assignments (with the deadlines), graded completed coursework
”  

**Response Summary:**  
Claude 3.5 Sonnet generated HTML, CSS and JS code for the layout.

**Impact:**  
This formed the initial layout of our page. The code is pasted to CodePen for preview. The preview of the page is then screenshotted for further refinements, in order for improvement in visual features.

---

#### **Prompt 2**  
**Prompt:**  
<By referencing the screenshot file attached, create a prompt leading to a page with a suitable colour palette (dark blue as the overall colour tone) & visual design ideas (the layout should be clear and easy to follow)

**Response Summary:**  
Gemini created a prompt that gives clear instructions on the details of the color palette and visual design.

For example, the prompt for the typography is as follows.
Typography for Professionalism & Clarity:
Sans-serif Fonts: Stick to modern, highly readable sans-serif fonts (e.g., Open Sans, Lato, Montserrat) for all text.
Hierarchical Sizing: Use distinct font sizes and weights for headings, subheadings, and body text to guide the user's eye and establish visual hierarchy.
Color for Emphasis: Use #1A3E6C for primary headings, #333333 for most body text, and #6C757D for secondary information (like due dates or related courses).

**Impact:**  
These prompts helped us to ensure visual consistency and increase the attractiveness of the page. This drives customer action, leading to measurable jumps in engagement and customer retention. 

---

#### **Prompt 3**  
**Prompt:**  
> “By referencing the screenshot file attached,please create prompts that lay out creative and eye-catching animation details to be incorporated into the page, which will then be used for creating codes to generate the page.

”  

**Response Summary:**  
Grok created a prompt that gives clear instructions on the animations of website.

For example, the prompt for the animation of the header.
[SECTION: Header & Welcome]
1. On page load → Nav bar slides down from y:-100 (0.7s, ease-out-quart).
2. Logo (CareerVerse) rotates 360° once (0.8s) then settles.
3. Search bar fades in + width expands from 40% → 100% (0.5s, delay 0.3s).
4. User avatar (SA) pops in with scale 0 → 1 (0.4s elastic) + subtle pulse every 8s.
5. "Welcome back, Sarah!" text:
   - Letters type-in one-by-one (stagger 0.05s)
   - Final word "Sarah!" bounces + cyan glow (0.3s).

**Impact:**  
These prompts are used to create appealing animation that has the following impacts
1. Higher User Retention
2. Increased Task Completion
3. Gamified Motivation
4. Premium Brand Perception

---

#### **Prompt 4**  
**Prompt:**  
< Based on the codes, identify potential bugs and refine the prompt to resolve the bugs. Additionally, make CareerVerse's interface more mobile-friendly for user convenience. 

**Response Summary:**  
Grok created a prompt that not only preempts and eliminates bugs that may occur, but also includes features that can enhance clarity for mobile users. 

For example, Grok identified the lack of logos in the app, which would potentially hinder readability for mobile users. The following shows refinement suggestions by Grok: 
- CareerVerse Logo: Custom SVG with star + checkmark
- Streak Icon: Animated fire SVG
- Skill Badges: Mic, Chat, Chart SVGs
- Alex’s Photo: https://i.pravatar.cc/150?u=alexchenNo 
- Text Emojis: All replaced with scalable SVGs
- Accessibility: alt text, proper semantics
- Performance: Inline critical CSS, deferred JS

**Impact:**  
These prompts can streamline predictive bug analysis through automatic detection and correction of bugs, minimising human errors that might occur during manual testing, and enhancing accuracy for all. 

### Project Evolution  

At first, we started with a basic static prompt, where we merely described the features of the app that we envision through drawing a brief diagram of our front-end page. After several iterations guided by AI suggestions, our landing page evolved to feature:  
- A responsive, clear and mobile-friendly layout.  
- Improved accessibility and SEO structure.  
- Consistent branding through typography and colors.  
- Cleaner, modular CSS architecture.  

Without extensive prior coding knowledge, AI helped to transform our visions into actionable coding scripts, providing new perspectives and solutions for layout and design challenges that sped up our development process while maintaining a professional finish. 
---
