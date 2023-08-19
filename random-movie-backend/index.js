import express from "express"
import axios from "axios"

const app = express()

const options = {
  headers: {
  }
};

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

function getRandomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function formatNumber(number) {
  let newNumber = number.toString()
  if(number.length < 7) {
    for(let i = 0; i < 7 - number.length; i++) {
      newNumber = 0 + newNumber
    }
  }
  console.log(newNumber);
  return Number(newNumber)
}

console.log(formatNumber(1));

const random_number = getRandomNumber(1, 2000000)
const URL = `https://moviesdatabase.p.rapidapi.com/titles/tt${random_number}`

axios.get(URL, options)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

app.get('/', (req, res) => {

  axios.get(URL, options)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})