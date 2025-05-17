# Skip Selector App

This is a responsive web application built in **React.js** that allows users to select a waste skip size based on their needs and preferences. The UI is designed to be modern, clean, and intuitive, with a functional filtering system, selection logic, and modal information display.

---

##  Features

###  Skip Filtering
- **By Size**: Categorized as `<10 yards`, `10-20 yards`, `>20 yards`
- **By Price**: `0-400 GBP`, `400-500 GBP`, `500+ GBP`


###  Skip Display
- Responsive grid layout that adapts to different screen sizes
- Displays skip size, price, VAT-inclusive price, and an image
- Users can select only **one skip** at a time
- A `Selected` badge and blue border help indicate the active choice

###  Modal Info View
- When the "Read more" button is clicked, a **modal** appears
- The modal includes: skip image, full description, recommended use cases
- Modal skip data is handled separately from selection to avoid data conflict

###  Global State with React Context
- A global context manages:
  - `skips` data fetched
  - modal open state & content
  - selected skip for confirmation

###  UI & Styling
- **TailwindCSS** for styling and layout
- Uses `react-icons` for consistent iconography



---

##  Tech Stack

- **React.js**
- **TailwindCSS**
- **React Context**
- **React Icons**

---



---

##  Things To Do Next
- Integrate with a payment gateway
- Add step-by-step progress bar logic
- Store skip selections and navigate user through checkout

---

##  Author:

Built by **andrei_cos97@yahoo.com** – powered by coffee, nicotine... and questionable life choices :D .