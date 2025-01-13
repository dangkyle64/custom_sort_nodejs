# Temporary Hashmap Usage Examples

The usage of temporary hashmaps may offer a possible solution to the problem of sorting the files and its values but there was a couple considerations found when working with it.

The array must be sorted originally with usage of a temporary hashmap with the current setup of creating a new hashmap with every new prefix. This problem could be sorted with the built in function sort() on the array of values after inputting the new value in.

An example would be something like below:

array = [
    100403,
    10040404,
    100503,
    10050456,
]

array.push(100405)
array.sort()

array = [
    100403
    10040404
    100405
    100503
    10050456
]

This is a potential solution for the problem but plans on working with a persistent hashmap would be a good idea. Tests toward being correct in the sorting process is the primary concern, with speed and cleanliness being secondary as of the testing stage.

## Table of Contents
- [Installation](#installation)

## Installation

Clone the repository:
   ```bash
   git clone https://github.com/dangkyle64/binary_insert_nodejs
   ```
