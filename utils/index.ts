import { config } from 'dotenv';
import axios from 'axios';

config();

export async function cars() {
  const headers = {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_X_RapidAPI_Host
    }
  const response = await axios.get('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers
  });

  const result = response.data;
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
