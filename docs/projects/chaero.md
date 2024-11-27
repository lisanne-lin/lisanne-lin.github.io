---
title: CH-Aero
tags: ["Kotlin", "Firebase", "Jetpack Compose"]
image: "/img/docs/chaero/chaero-cover.png"
description: "Weighing aircraft"
sidebar_position: 3
custom_edit_url: null
---

# CH-Aero
 
An android app to replace Excel reports and streamline weighing aircrafts. This project is still ongoing!

---

## The project
[CH-Aero](https://www.ch-aero.com) provides aircraft weight and balance services in Europe, which are essential for maintaining safe operations.

![](/img/docs/chaero/chaero-cover.png)
The weight of an aircraft is a critical factor that affects its safe operation. Small changes happen over time due to modifications, ageing, and other factors, and knowing the correct weight and centre of gravity is crucial for safe operation.

An increase in weight can lead to higher fuel consumption, and knowing the correct centre of gravity is important for takeoff and landing. For this reason, it is mandatory to weigh an aircraft every four years or after significant weight changes. They use weighing scales that are extremely sensitive to measure the weight of an aircraft, and the establishment of weight is very precise.

CH-Aero also introduced wifi scales that can communicate with a laptop or tablet to avoid errors in noting down weights. The company wants to handle this information and create a report. For this, CH-Aero uses Excel, but they want an app to handle data and create reports for each aircraft, to minimise errors and ensure accuracy.
The app needs:

-   Functionality to verify data with the weight and balance for each specific aircraft type
-   Retrieve data from server, such as importing calibration certificates from the scales used for weighing
-   Calculate gravity and elevation difference based on location

This app will be made into an Android app, made with Kotlin and FireBase. Further requirements on technology will be researched and updated later. Stay tuned!
