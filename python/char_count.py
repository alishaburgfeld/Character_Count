def char_count(str):
  unsorted=[]
  alphabet="abcdefghijklmnopqrstuvwxyz"
  for char in str:
    if char in alphabet:
      if [char, str.count(char)] not in unsorted:
        unsorted.append([char, str.count(char)])
  
  sorted_list=sorted(unsorted, key = lambda x: (-x[1], x[0]))       # this says sort the second item as first priority, sort it in descending order, then when equal sort based on first value ascending
  
  #print(unsorted)
  return sorted_list

#https://www.techiedelight.com/sort-list-of-objects-by-multiple-attributes-python/


#print(char_count("an apple a day will keep the doctor away"))