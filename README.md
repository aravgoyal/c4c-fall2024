This is the TypeScript version of the starter code for Code4Community's technical challenge for Fall 2024.
For more detailed information about each of the parts of this starter code, check out the [`INFO.md`](INFO.md) file

## Prerequisites

If you don't have them already, you'll need to install Node.js/NPM and Git:

- Node.js + NPM - install [here](https://nodejs.org/en/download/package-manager) (we highly recommend using at least Node 18.0.0 + NPM 8.6.0)
  - You can choose to install via the command line under "Package Manager", or download an installer under "Prebuilt Installer"
  - Node and NPM are installed together
- Git - install [here](https://git-scm.com/downloads)

## Setup Instructions

1. Clone this repo on to your computer. You can do so with the [desktop app](https://desktop.github.com/), or in a terminal with the following:

```
git clone https://github.com/huang0h/c4c-challenge-sample.git
```

2. In a terminal, run `npm install` **at the root of this project** to install the required packages
3. Run `npm run dev` **at the root of this project** to start the app locally
4. Visit `http://localhost:3000` to view the website

   4a. The backend will be available at `http://localhost:4000`

## Overview

The Partner Admin Dashboard allows user to add new information about partners to keep track of C4C's partners. A user can enter the name, description, URl of logo, and whether the partner is active or not, and the application will display the given information.

## Design Decisions

1. Each partner is represented by an object that contains information about the name, description, logo, and activity of a partner.

2. The PartnerTileProps contains a list of partners that acts as a view by converting the Partner data into a viewable tile for the user.

3. The frontend is split into two components: AddPartner and DisplayPartner. AddPartner allows the user to construct a partner, and, after refreshing (I couldn't figure out how to make the page rerender after submitting), the new partner appears in the display. DisplayPartners consists of PartnerTiles.

## Reflection

1. Since I was doing this project while in OOD, I wish I incorporated more of the concepts I've been learning, including MVC architecture. I also tried to challenge myself by using TypeScript since it seems pretty standard in web development, but I wasn't sure how to incorporate these concepts in this language. If I could restart, I would restructure my code to follow MVC architecture.

2. If I had more time to work on this, I would've attempted to allow the user to edit information about each partner after submitting.
