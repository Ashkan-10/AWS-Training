# # Hello World
# print('hello world')

# # Variable
# a = 20
# b = 10
# print(a,b)

# #Formula
# a=20
# b=10
# c = a + b
# print(c)

# # Type conversion and user input
# a = input('enter value: ')
# print(type(a))
# a = int(a)
# print(type(a))
# b = 20
# c = a + b
# print (c)


# #Array, len(arr) = finds length of array
# arr = [1,2,3,4,5]
# print(arr[0], arr[1], arr[2], arr[3], arr[4])

# for x in arr:
#     print (x, end = ' ')

# print(' ')

# # range only shows indexes of array, not the values
# for x in range(len(arr)):
#     print (arr[x], end = ' ')


#Dictionary
# dic = {'name':'Ashkan', 'age':30}
# print(dic['age'])
# print(dic['name'])

# dic2 = {'name':'Ashkan', 'colour':['red', 'blue', 'yellow']}
# print(dic2['name'], dic2['colour'])
# print(dic2['colour'][0])
# arr2 = dic2['colour']
# print (arr2)

# for key in dic2:
#     print(key)
#     print(dic2[key])


# def calc(x,y):
#     z = x+y
#     return z

# # z = calc(1,2)
# # print(z)

# x = input('enter number 1: ')
# y = input('enter number 2: ')
# z = calc(int(x), int(y))
# print(z)


from email import message


class Rectangle:
    def __init__(self,length,width):
        self.length = length
        self.width = width

    def area(self):
       return self.length * self.width
    
    def perimeter(self):
        return 2*(self.length + self.width)

r1 = Rectangle(3,4)
area = r1.area()
perimeter = r1.perimeter()


print(area, perimeter)


# class Person:
#     def printMessage(self, message):
#         print(message)

# p1 = Person()
# p1.printMessage('hello world')


class Person:
    def __init__(self, age, name):
        self.age = age
        self.name = name

p1 = Person(20, 'ashkan')
print(p1.age)
p1.age = 30
print(p1.age)







class Calc:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def add(self):
        return self.x + self.y

    def subtract(self):
        return self.x - self.y

    def multiply(self):
        return self.x * self.y

    def divide(self):
        return self.x / self.y

c1 = Calc(5,10)
print(c1.x, c1.y)

a = c1.add()
s = c1.subtract()
m = c1.multiply()
d = c1.divide()
print(a, s, m, d)

c2 = Calc(5,0)
d2 = c2.divide()

