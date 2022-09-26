# print("Hello world")

# define variable 
# x=10
# y=20
# print(f"the sum of {x} and {y} is {x+y}" )


# Define function below: 
# def sum(x,y):
#     z=x+y
#     return z

# z=sum(10,20)
# print(z)

# Define multiply function:
# def multiply(x,y):
#     z=x*y
#     return z

# print(multiply(2,5))

# array: 
# arr = [0,1,2,3,4]
# print(arr[2])

# arr2 = ['ashkan','saeid']
# print(arr2[1])

# # len function shows how many items in array 
# print(len(arr2))

# Dictionary:
# dic = {'name':'ashkan', 'age':30}
# print(dic['name'])

# # If:
# a=10
# if a>10:
#     print('number is larger than 10')
# elif a<10:
#     print('number is less than 10')
# else:
#     print('number is equal to 10')

# While:
# b=10
# while(b==10):
#     print(f'b is equal to {b}')
#     b=15

# For:
# for i in range(10):
#     print(i)

# arr3 = [5,10,15]
# for x in arr3:
#     print(x)

# name = 'ashkan'
# for x in name:
#     print(x)

# dic = {'name':'ashkan', 'age':30}

# for key in dic:
#     print(f'key {key} has value {dic[key]}')
#     print(key)
#     print(dic[key])

# Creates string from number
# a=10
# b=str(a)
# print(b)

# Join array of string:
# name = 'saeid'
# family = 'pahlevan'
# full_name = ' '.join([name,family])
# print(full_name)

# people = [{'name':'saeid'}, {'name':'ashkan'}]
# for person in people:
#     print(person['name'])

# # Creating Class
# class Student:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#     def print_family_name(self):
#         print(f"{self.name} is {self.age} years old")
    

# stu = Student ('ashkan', 30)
# stu.print_family_name()

# stu2 = Student('saeid', 56)
# stu2.age = 57
# stu2.print_family_name()

# Stack implementation, pop removes last element, LIFO (last in first out):
# stack = []
# stack.append('a')
# stack.append('b')
# stack.append('c')
# print(stack)
# print(stack.pop())
# print(stack)

#Queue implementation, FIFO (first in, first out):

# import queue
# q = queue.Queue (maxsize = 3)
# from queue import Queue
# q = Queue (maxsize = 3)
# q.put('a')
# q.put('b')
# q.put('c')
# print(q.full())
# print(q.get())


# # Input from command line: python hello-world.py 10 5
# import sys
# def addvalue (x:int,y:int):
#     return(x+y)

# x = int(sys.argv[1])
# y = int(sys.argv[2])

# z = addvalue(x,y)
# print(z)


# class Rectangle:
#     def __init__(self, width, height):
#         self.width = width
#         self.height = height
        
#     def area(self):
#         return self.width * self.height
    
#     def perimeter(self):
#         return 2 * (self.width + self.height)

# r1 = Rectangle(10, 20)
# area = r1.area()
# per = r1.perimeter()
# print(area)
# print(per)


# Rectangle class creation and factory method for rectangle class

# class Rectangle:
#     def __init__(self, width, height):
#         self.width = width
#         self.height = height

#     def area (self):
#         return self.width * self.height

#     def perimeter(self):
#         return (self.width + self.height) * 2
    
# r = Rectangle(5, 10)
# area = r.area()
# perimeter = r.perimeter()
# print(area, perimeter, r.height)

# Factory Method:

# def rectangleFactory(width, height):
#     return Rectangle(width, height)

# r1 = rectangleFactory(5, 10)
# print(r1.area(), r1.perimeter(), r1.height)



# class MyMath:
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y
#     def add(self):
#         return (self.x + self.y)

#     def subtract(self):
#         return (self.x - self.y)

# m = MyMath(1, 2)
# print(m.x, m.y, m.add(), m.subtract())

# def mathFactory(x, y):
#     return MyMath(x, y)

# m1 = mathFactory(5, 10)
# print(m1.add(), m1.subtract(), m1.x, m1.y)


# Exercise Dictionary and Array
arr = [{'Colour':['Blue','Green'], 'Name':'Ashkan'},{'Colour':['Red','Yellow'], 'Name':'Saeid'}]
# print(arr[1])
# print(arr[0]['Name'])
# print(arr[0]['Colour'])
# print(arr[0]['Colour'][0])

for item in arr:
    print(item['Name'])
    # print(item['Colour'])
    for colour in item['Colour']:
        print(colour)