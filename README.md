# Temporary Infrastructure Traffic Simulator

A small browser-based prototype for exploring how vehicles move through a one-way road environment. It forms an initial foundation for a larger temporary-infrastructure planning tool.

## Project aim

**Future Cities: Digital Tool for Temporary Infrastructure**

Councils and contractors currently plan road closures and work zones with limited ability to foresee their knock-on effects on surrounding traffic, pedestrians, and public transport.

The long-term goal is to create a digital tool that simulates the impact of a planned road closure or work zone before it is deployed. The simulation should support typical traffic-equipment inventory, including barriers, road signs, and variable message signs (VMS).

## Current prototype

The current version demonstrates the basic traffic-animation system:

- A single one-way road
- A new car entering every second
- Cars moving from the bottom to the top of the screen
- Different car colours
- Elapsed simulation time
- A live count of cars currently on the road
- A responsive layout for desktop and mobile screens

This prototype is intentionally dependency-free and small enough for a two-person team to understand and extend within a short hackathon session.

## Technology

- **HTML** provides the page structure.
- **CSS** creates the road, cars, windows, colours, and movement animation.
- **JavaScript** creates cars, controls the one-second interval, and updates the time and car count.

No backend or external packages are currently required.

## Run locally

From the project directory, run:

```bash
python3 -m http.server 3000
```

Then open [http://localhost:3000](http://localhost:3000) in a browser.

You can also open `index.html` directly in a browser.

## Project structure

```text
├── index.html   Page structure and simulation display
├── style.css    Road, car, animation, and responsive styling
├── script.js    Car generation, timer, and car-count logic
└── README.md    Project documentation
```

## Possible next steps

- Allow users to place road closures and work zones
- Add barriers, signs, cones, and VMS boards
- Support multiple roads, lanes, and intersections
- Model congestion and vehicle queues
- Include pedestrian and public-transport impacts
- Compare conditions before and after a planned closure
- Display estimated delays and traffic-flow results

## Scope

This repository currently contains a visual proof of concept rather than a complete traffic-engineering model. Its purpose is to demonstrate the core animation and provide a simple base for future simulation features.
