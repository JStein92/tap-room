# Tap Room

#### Javascript Week 3 2-Day Project

##### By Jonathan Stein and Ben Budinger

## Description

_Angular Application that lets users create, edit, and sort various beers on tap._

### User Story

- As a patron, I want to see a list/menu of all available kegs. For each keg, I need to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).
- As an employee, I want to fill out a form when I tap a new keg to add it to the list. (Don't worry about authenticating employee user accounts yet.)
- As an employee, I want the option to edit a keg's properties after entering them just in case I make a mistake.
- As a patron and/or employee, I want to see how many pints are left in a keg. (Hint: A full keg has roughly 124 pints).
- As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.
- As an employee, I want to be able to see kegs with less than 10 pints left so I can be ready to change them.
- As a patron, I want to have kegs prices to be color-coded for easy readability. Perhaps based on their price (greater or less than $5 per pint, perhaps) or the particular style of beer or kombucha.
- As a patron, I want to use the alcohol content property to display stronger beers differently than weaker beers.
Further Exploration
- As an employee, I want to be able to click a button next to a keg whenever I sell a growler of it. Many growlers are 32 ounces, so this should decrease the number of pints left by 2.
- As an employee, I want to be able to click a button next to a keg whenever I sell a large growler. While most growlers are 32 ounces, some are 64. I'll need to select the appropriate growler size and correctly decrease the remaining number of pints left.
- As a patron, I want to filter the available kegs by style or flavor of beer and/or kombucha.
- As an employee, I want to select an option to put a certain keg on sale. This would lower the cost by a percentage of my choosing, and perhaps change a keg's appearance in the list to draw customers' attention to it.
- As an employee, I might want to program a "happy hour" option I can select to put all kegs on sale.
- As an employee, I might want to trigger the "happy hour" option automatically at a certain time of the day or week. (Note that this is advanced and goes beyond the scope of this week's curriculum. Prepare to do your own outside research.)

### _Content_ ###

Index.html:
- Splash page that has list of kegs, filters, and CRUD functionality

- styles.css
  - styling page

##### Components
- keg edit
- keg list
- new keg form
- type pipe
- keg class
