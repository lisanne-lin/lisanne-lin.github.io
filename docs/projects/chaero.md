---
title: CH-Aero
tags: [ "Kotlin", "Firebase", "Jetpack Compose" ]
image: "/img/docs/chaero/chaero-cover.png"
description: "Weighing aircraft"
sidebar_position: 3
custom_edit_url: null
---

# CH-Aero

An android app to replace Excel reports and streamline weighing aircrafts. This project is made in a team of 3 people.

---

## The project

[CH-Aero](https://www.ch-aero.com) provides aircraft weight and balance services in Europe, which are essential for
maintaining safe operations.

![](/img/docs/chaero/chaero-cover.png)
The weight of an aircraft is a critical factor that affects its safe operation. Small changes happen over time due to
modifications, ageing, and other factors, and knowing the correct weight and centre of gravity is crucial for safe
operation.

An increase in weight can lead to higher fuel consumption, and knowing the correct centre of gravity is important for
takeoff and landing. For this reason, it is mandatory to weigh an aircraft every four years or after significant weight
changes. They use weighing scales that are extremely sensitive to measure the weight of an aircraft, and the
establishment of weight is very precise.

CH-Aero also introduced wifi scales that can communicate with a laptop or tablet to avoid errors in noting down weights.
The company wants to handle this information and create a report. For this, CH-Aero uses Excel, but they want an app to
handle data and create reports for each aircraft, to minimise errors and ensure accuracy.
The app needs:

- Functionality to verify data with the weight and balance for each specific aircraft type
- Retrieve data from server, such as importing calibration certificates from the scales used for weighing
- Calculate gravity and elevation difference based on location
- Generate a pdf file containing the data

## Development

The app utilizes an MVVM (Model-View-ViewModel) architecture ensuring modularity, scalability, and ease of maintenance:
The app utilizes a
layered architecture ensuring modularity, scalability, and ease of maintenance:

* **Backend**: Firebase Real-time Database for synchronized data storage.
* **Frontend**: Jetpack Compose framework for a reactive, user-friendly interface.
* **Middleware**: A Repository pattern bridges the UI with the database, encapsulating business logic in ViewModel
  components.
* **Navigation and Permissions** : Declarative navigation and Accompanist-permissions library manage app navigation and
  device permissions efficiently.
* **Programming Language**: Kotlin, chosen for its concise syntax and Android development features.

Libraries Used:

* **LiveData**: Enables automatic updates of UI components based on data changes.
* **Navigation-Compose**: Handles screen transitions.
* **Material3**: Ensures a cohesive and visually appealing design.

## Key features

* Real time data storage using Firebase
* Intuitive UI built with Jetpack Compose
* Report generation in pdf format
* Automatic calculations for metrics like Center of Gravity (CG) and %RC and total weight of an airplane
* Warning when the weight difference is exceeds 0.05%

![](/img/docs/chaero/screens.png)

To calculate the total Center of Gravity (CG) of an aircraft, we used this formula:
$$
CG=D_m-(V\cdot sin(P))-(D_w\cdot \frac{(R_n+C)}{W_t})
$$
Where:

* $CG$ = Center of gravity position
* $D_m$ = Distance to the main wheel of the aircraft
* $V$ = Vertical offset of the CG above the main landing gear
* $P$ = Pitch angle (in degrees or radians).
* $D_w$ = Distance between the main wheels and the nose wheel
* $R_n$ = Reaction force at the nose gear
* $C$ = A constant specific to the aircraft
* $W_t$ = Total weight of the aircraft

## Areas for improvements

There are no actions to delete and edit rows, which limits user flexibility. Additionally, the app lacks the ability to
add images, customize formulas for different aircraft types, and implement CLEAN architecture to enhance collaboration.

This project was math-intensive and challenging, but I want to sincerely thank CH-Aero for their guidance and
for explaining the complex formulations involved. Despite lacking technical expertise, their support and insights were
essential in helping us create a solid foundation for the company's application.