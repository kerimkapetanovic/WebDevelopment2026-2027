# Tutorial 6 — Interactive Product Discount Calculator

**Task:** Create an interactive webpage using HTML, CSS and JavaScript that allows users to calculate product discounts and keep track of successfully calculated products.

Your webpage must include:

1. Create two input fields for entering a product name and price, along with a "Calculate Discount" button.
2. When the button is clicked, use a JavaScript function to calculate the discounted price based on the following conditions:
   - If the price is **100 or more**, apply a **20% discount**.
   - If the price is **less than 100**, apply a **10% discount**.

   Display the product name, discount percentage and final price on the webpage.
3. If the product name is empty or the price is less than or equal to 0, display an appropriate error message instead of the result.
4. Change the background color of the displayed result based on the applied discount:
   - **Green** for a 20% discount.
   - **Yellow** for a 10% discount.
5. Display the total number of successfully calculated products on the webpage. The count should increase after each successful calculation, while invalid inputs should not be counted.

   **Example:**

   After successfully calculating the discount for "Mouse":
   ```
   "Total Products Calculated: 1"
   ```
   After successfully calculating the discount for "Keyboard":
   ```
   "Total Products Calculated: 2"
   ```

**Requirements:** Use JavaScript functions, conditional statements, DOM manipulation and event listeners. Use basic CSS to style the webpage. All results must update without reloading the page.
