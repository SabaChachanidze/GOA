import turtle

# Set up the screen
screen = turtle.Screen()
screen.bgcolor("skyblue")

# Create a turtle object
castle = turtle.Turtle()
castle.speed(5)
castle.color("black")
castle.pensize(2)

# Function to draw a rectangle
def draw_rectangle(t, width, height, color):
    t.begin_fill()
    t.fillcolor(color)
    for _ in range(2):
        t.forward(width)
        t.left(90)
        t.forward(height)
        t.left(90)
    t.end_fill()

# Function to draw a square
def draw_square(t, size, color):
    draw_rectangle(t, size, size, color)

# Function to draw the battlements
def draw_battlement(t, width, height, color):
    t.begin_fill()
    t.fillcolor(color)
    for _ in range(2):
        t.forward(width)
        t.left(90)
        t.forward(height)
        t.left(90)
    t.end_fill()

# Function to draw the main building
def draw_main_building(t):
    t.penup()
    t.goto(-100, -150)
    t.pendown()
    draw_rectangle(t, 200, 150, "gray")

# Function to draw towers
def draw_tower(t, x, y):
    t.penup()
    t.goto(x, y)
    t.pendown()
    draw_square(t, 50, "gray")
    t.penup()
    t.goto(x, y + 50)
    t.pendown()
    for _ in range(3):
        draw_battlement(t, 10, 20, "gray")
        t.penup()
        t.forward(20)
        t.pendown()

# Function to draw the door
def draw_door(t):
    t.penup()
    t.goto(-25, -150)
    t.pendown()
    draw_rectangle(t, 50, 75, "brown")

# Draw the main building
draw_main_building(castle)

# Draw the left tower
draw_tower(castle, -150, -100)

# Draw the right tower
draw_tower(castle, 100, -100)

# Draw the door
draw_door(castle)

# Hide the turtle and display the window
castle.hideturtle()
turtle.done()
