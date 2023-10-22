/**
 * @author AdryDev
 */

const cards = document.querySelectorAll("[data-card]") // List of cards
const rates = document.querySelectorAll("[data-rate]") // List of rating numbers
const submit = document.querySelector("[data-submit]") // Submit button
const rate = document.querySelector("[data-result]") // Element that shows the selected rate

// Error message start
let error = document.createElement("p")
error.setAttribute("id", "error-message")
error.innerHTML = "Please rate us"
// Error message end

/**
 * @function SELECT_RATE
 * @param {Event} Event - interface that represents an event which takes place in the DOM
 */
const SelectRate = ({target}) => {
    rate.innerHTML = target.innerHTML // Using object destructuring to get the target/element from which the event was raised
    target.setAttribute("class", "active")
    rates.forEach(element => (element.innerHTML !== target.innerHTML) ? element.removeAttribute("class") : "")
}

/**
 * @function SUBMIT_SELECTED_RATE
 * @description Gets the selected rate and submit that value to show the thanks card
 */
function SubmitRate(event) {
    event.preventDefault()
    if (rate.innerHTML !== '') {
        cards[0].style.display = "none"
        cards[1].style.display = "block"
    } else {
        document.body.appendChild(error)
    }
}
// Event Listeners start
rates.forEach(item => item.addEventListener("click", SelectRate)) // Adds event listener to select a rating number
submit.addEventListener("click", SubmitRate) // Adds event listener to the button used to submit the selected rate
// Event Listeners end