read file > get data > get array of data > break down into separate arrays based on prefix > sort within prefixes > put back together > write into file

weaknesses
    memory usage -> potentially bring in the readstream to read it by sections 
    inefficient grouping with prefixes (look into hashmaps)
    too much sorting inside each of the separate arrays -> only plan on sorting within the array with the added prefix if possible 
    too much sorting outside when putting arrays together -> if in readstream, it should already be ordered and written in that order 
        multi step sorting here where data sorted globally and then within each prefix?
    inefficient merging strategies -> look at other merge strategies
    not scalable -> look into external sorting or adaptive sorting techniques

has map allows O(1) insertions making easier to handle large and dynamic datasets
stream processing perhaps with dyanmic grouping or partionioning dataset for more efficient handling 

------------------------------------------------------------------------------------------------------------------------------------
potential v0.1 
read file in chunk> get data in chunk > get array of data > break down and insert into hashmap (suffix: [array of ids following it]) > look at inputed value > sort array with the prefix > write into file

using one main hash map and sorting it at the end versus temporary hashmap that creates new on every prefix

merge sort is a potential option for when files get too big