

<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://s12.directupload.net/images/201230/7v3r456k.png" alt="Logo">
  </a>

  <h3 align="center">BWI ALGORITHMUS CHALLENGE</h3>

  <p align="center">
    This is my project for the BWI Coding Challenge, it is an algorithm that generates a transport plan with the highest utility value.
    <br />
    <a href="https://www.get-in-it.de/coding-challenge?utm_source=magazin&utm_campaign=coding-challenge&utm_content=code-and-win"><strong>Link to the Challenge<strong></a>
    <br />
  </p>
</p>

<h3 align="center">About the project</h3>

<p align="center"> So it's actually just an algorithm that loads products / devices and transporters information from a JSON file. Each of these devices has a number, weight, and utility value. Each transporter has a weight limit of 1100kg, not including the weight of the driver. Two transporters are specified, but this can be expanded by adding more transporters to the JSON file. This algorithm creates a transport plan for each transporter, which is tailored to the weight and has the highest utility value.</p>

<h3 align="center">Installation</h3>
<p align="center">

1. Install [NodeJS](https://nodejs.org/en/download/) if it is not already installed

2. Clone the repo
   ```sh
   git clone https://github.com/Intevel/bwi-algorithmus-challenge.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
</p>

<h3 align="center">Usage</h3>
<p align="center">

1. Navigate to the "src" directory
   ```sh
   cd src
   ```

2. Start application
   ```sh
   node index.js
   ```
3. Now you can view the results in the documents folder
   ```sh
   cd ../documents/
   ```
</p>



<h3 align="center">License</h3>

Distributed under the MIT License. See `LICENSE` for more information.
