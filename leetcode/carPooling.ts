// 1094 Car Pooling

// There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

// You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.

// Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

function carPooling(trips: number[][], capacity: number): boolean {
  const changes = new Map<number, number>();

  for (const [passengers, start, end] of trips) {
    changes.set(start, (changes.get(start) || 0) + passengers);
    changes.set(end, (changes.get(end) || 0) - passengers);
  }

  let currentPassengers = 0;
  const times = [...changes.keys()].sort((a, b) => a - b);

  for (const time of times) {
    currentPassengers += changes.get(time)!;

    if (currentPassengers > capacity) return false;
  }

  return true;
}
