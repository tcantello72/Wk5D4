# Code Demo Instructions

## Overview

We'll be demonstrating associations in this app, it is an addition to the week long app. There is some suggested pre-session code, but you can build it in the session if you think you have enough time.

## Pre-Demo

1. Move to the dev branch and add the following files and contents from this repo
    - `~/db/seed.js`
    - `~/db/seedData.js`
    - `~/src/models/Badge.js`
    - `~/src/models/Trainer.js`
    - `~/src/models/index.js` (don't copy the associations code, just the import export)

2. Rename the `model.js` to `Pokemon.js` and move it to the models folder
3. Add a seed script to the package.json to run your seed file.
4. Push the changes once they're complete

## VS Code Terminal - `bash.sh` Has Syntax Instructions

1. checkout to feature branch

## Pre-Code App Tour

2. Show the badge, trainer and pokemon models, demonstrate the seed and explain it's usage, possibly even showing the seedData

## VS Code index.js - index.js Has Syntax Instructions

3. Add 1:n association between `Trainer` and `Pokemon`
4. Add m:n association between `Trainer` and `Badge`, using through table `"TrainerBadges"`

## VS Code Terminal - bash.sh Has Syntax Instructions

5. Run seed script

## VS Code main.js - main.js Has Syntax Instructions

6. Change imports to compensate for new export structure from models folder and remove the db import
7. Empty main function and store all entires for each table in constants at the top of main, this is for ease of use
8. Demonstrate adding one pokemon to a trainer, followed by adding many
9. Run a findOne on this trainer without eager loading to demonstrate the lack of pokemon information, then run a second search with eager loading
10. Demonstrate adding badges to two different trainers, followed by an eager loading search

## VS Code Terminal - bash.sh Has Syntax Instructions

11. git workflow

## GitHub

12. Merge feature branch into dev and then dev in main
